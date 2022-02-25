import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer/offer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    OfferComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
