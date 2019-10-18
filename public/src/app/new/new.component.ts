import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  myobj: any = {
    name: '',
    qty: 0,
    price: 0
  };
  ErrorDisplay = false;
  error = [];
  constructor(
      private httpService: HttpService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  errors;

  ngOnInit() {
    this.backResetForm();
  }
  submitForm() {
      const obs: any = this.httpService.create(this.myobj);
      obs.subscribe((data: any) => {
        console.log(data);
        if ( 'errors' in data ) {
        this.errors = data.errors;
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  backResetForm() {
    this.myobj = {
      name: '',
      qty: 0,
      price: 0
    };

  }
}
