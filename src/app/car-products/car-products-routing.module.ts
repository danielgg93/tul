import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarProductsComponent } from './car-products.component';

const routes: Routes = [{ path: '', component: CarProductsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarProductsRoutingModule { }
