import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Cart from '../model/cart.model';
import Product from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private dbPath = '/products';
  private dbPathCarts ='/carts';

  productsRef: AngularFireList<Product>;
  cartRef : AngularFireList <Cart>

  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list(this.dbPath);
    this.cartRef = db.list(this.dbPathCarts);
  }
  getAll(): AngularFireList<Product> {
    return this.productsRef;
  }
  getAllCarts(): AngularFireList<Cart> {
    return this.cartRef;
  }

  create(product: Product): any {
    return this.productsRef.push(product);
  }
  
   createCart(cart: Cart): any {
    return this.cartRef.push(cart);
  } 

  update(id: string, value: any): Promise<void> {
    return this.productsRef.update(id, value);
  }

  delete(id: string): Promise<void> {
    return this.productsRef.remove(id);
  }

  deleteCart(id: string): Promise<void> {
    return this.cartRef.remove(id);
  }

  deleteAll(): Promise<void> {
    return this.productsRef.remove();
  }
}
