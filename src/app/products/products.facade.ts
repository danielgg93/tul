import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FirebaseService } from '../services/firebase.service';
import Product from '../model/product.model';
import { map } from 'rxjs/operators';
import Cart from '../model/cart.model';

@Injectable()
export class ProductsFacade {
  constructor(private service: FirebaseService) {

  }

  public createProduct(payload: Product): void {
    this.service.create(payload);
  }

   public createCart(cart: Cart): void {
    this.service.createCart(cart);
  } 

  public removeProduct(id){
    this.service.delete(id);

  }
}
