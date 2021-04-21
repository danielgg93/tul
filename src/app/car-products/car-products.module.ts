import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarProductsRoutingModule } from './car-products-routing.module';
import { CarProductsComponent } from './car-products.component';


@NgModule({
  declarations: [
    CarProductsComponent
  ],
  imports: [
    CommonModule,
    CarProductsRoutingModule
  ]
})
export class CarProductsModule { }
