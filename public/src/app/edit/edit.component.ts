import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myobj: any = {
    name: '',
    qty: 0,
    price: 0
  };
  ErrorDisplay = false;
  errors;
  constructor(
      private httpService: HttpService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
    this.getOneObject();
  }

  getOneObject() {
    const obs = this.httpService.findOne(this.route.snapshot.params.id);
    obs.subscribe(data => {
      this.myobj = data;
    });
}

submitForm() {
  const obs: any = this.httpService.edit(this.myobj);
  obs.subscribe((data: any) => {
  if ( 'errors' in data ) {
    this.errors = data.errors;
    } else {
    this.myobj = data;
    this.ErrorDisplay = false;
    this.router.navigate(['/']);
  }
    });
}
backHome() {
  this.getOneObject();
}
}
