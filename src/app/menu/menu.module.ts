import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer/offer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuWrapperComponent } from './menu-wrapper/menu-wrapper.component';



@NgModule({
  declarations: [
    OfferComponent,
    MenuComponent,
    MenuWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
