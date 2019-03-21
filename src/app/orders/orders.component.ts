import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

export interface IOrder {
  pid?: string;
  image?: string;
  description?: string;
  price?: number;
  quantity?: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})



export class OrdersComponent implements OnInit {

  orders: Array<IOrder> = [];

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }

  async ngOnInit() {

  }

  addItems(item: string) {
    switch (item) {
      case 'Android':
        this.orders.unshift({
          'pid': '1',
          'image': 'assets/sm_android.jpeg',
          'description': 'Android',
          'price': 150.00,
          'quantity': 1
        });
        break;
      }
    switch (item) {
      case 'iPhone':
      this.orders.unshift({
        'pid': '2',
        'image': 'assets/sm_iphone.jpeg',
        'description': 'iPhone',
        'price': 200.00,
        'quantity': 1
      });
      break;
    }
    switch (item) {
      case 'Windows Phone':
        this.orders.unshift({
        'pid': '3',
        'image': 'assets/sm_windows.jpeg',
        'description': 'Windows Phone',
        'price': 110.00,
        'quantity': 1
      });
      break;
    }
}

  clear(index: number) {
    console.log();
    this.orders.splice(index, 1);
  }

  displayOrder() {
    this.orders = [{
      'pid': '1',
      'image': 'assets/sm_android.jpeg',
      'description': 'Android',
      'price': 150.00,
      'quantity': 2
    }, {
      'pid': '2',
      'image': 'assets/sm_iphone.jpeg',
      'description': 'IPhone',
      'price': 200.00,
      'quantity': 1
    }, {
      'pid': '3',
      'image': 'assets/sm_windows.jpeg',
      'description': 'Windows Phone',
      'price': 110.00,
      'quantity': 2
    }];
  }

}
