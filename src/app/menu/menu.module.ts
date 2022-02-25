import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer/offer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuWrapperComponent } from './menu-wrapper/menu-wrapper.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    OfferComponent,
    MenuComponent,
    MenuWrapperComponent
  ],
  exports: [
    MenuWrapperComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MenuModule { }
