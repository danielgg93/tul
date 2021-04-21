import { Injectable } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';
import Product from '../model/product.model';

@Injectable()
export class CartFacade {
  constructor(private service: FirebaseService) {}

  public removeCart(id) {
    this.service.deleteCart(id);
  }
}
