import { Component, OnInit } from '@angular/core';

import Cart from '../model/product.model';
import { FirebaseService } from '../services/firebase.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-car-products',
  templateUrl: './car-products.component.html',
  styleUrls: ['./car-products.component.scss'],
})
export class CarProductsComponent implements OnInit {
  constructor(private service: FirebaseService) {}

  cartArray: any[];

  ngOnInit() {
    this.getAllCarts();
  }

  public getAllCarts(): void {
    this.service
      .getAllCarts()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ cartId: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.cartArray = data;
      });
  }
}
