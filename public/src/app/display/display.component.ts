import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  myobj: any = {
    name: '',
    qty: 0,
    price: 0
  };
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
backHome() {
  this.router.navigate(['/']);
}

deleteObj(id) {
    const obs = this.httpService.delete(id);
    obs.subscribe(data => {
      this.router.navigate(['/']);
    });
}
}
