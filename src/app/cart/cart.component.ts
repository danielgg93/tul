import { Component, OnInit } from '@angular/core';

import Cart from '../model/product.model';
import { FirebaseService } from '../services/firebase.service';
import { CartFacade } from '../cart/cart.facade';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartArray: any[];

  constructor(
    private cartFacade: CartFacade,
    private service: FirebaseService
  ) {}

  ngOnInit(): void {
    this.getAllCarts();
  }

  deleteProduct(id) {
    this.cartFacade.removeCart(id);
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
