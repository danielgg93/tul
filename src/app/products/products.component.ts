import { Component, OnInit } from '@angular/core';

import { ProductsFacade } from '../products/products.facade';
import { FirebaseService } from '../services/firebase.service';
import { map } from 'rxjs/operators';
import Product from '../model/product.model';
import Cart from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsArray: Product[];

  constructor(
    private productsFacade: ProductsFacade,
    private service: FirebaseService
  ) {}

  

  ngOnInit(): void {
    this.getAllProducts();
  }

  addItem(products) {
    this.productsFacade.createProduct(products);
  }

  deleteItem(id){
    this.productsFacade.removeProduct(id);

  }

    addToCart(product){
    this.productsFacade.createCart(product);

  } 
  public getAllProducts(): void {
    this.service
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ firebaseId: c.payload.key, ...c.payload.val() }))
        )
      )
      .subscribe((data) => {
        this.productsArray = data;

      });
  }


}
