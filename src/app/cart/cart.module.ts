import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { CartComponent } from './cart/cart.component';
import { CartWrapperComponent } from './cart-wrapper/cart-wrapper.component';



@NgModule({
  declarations: [
    SummaryComponent,
    CartComponent,
    CartWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
