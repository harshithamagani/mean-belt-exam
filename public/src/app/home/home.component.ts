import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  products: any = [];
  ngOnInit() {
    this.getAllObjects();
  }

  getAllObjects() {
    const obs = this.httpService.findAll();
    obs.subscribe(data => {
      if ( data ['errorMsg']) {
        console.log(data.data);
      } else {
        this.products = data.data;
      }
    });
  }

  // deleteObj(id) {
  //   const obs = this.httpService.delete(id);
  //   obs.subscribe(data => {
  //     this.getAllObjects();
  //   });
  // }
}
