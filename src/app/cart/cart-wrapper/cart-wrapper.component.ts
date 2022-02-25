import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {CartService} from "../cart.service";
import {ShoppingCart} from "../shopping-cart";

@Component({
  selector: 'tdd-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartWrapperComponent {
  readonly shoppingCart$: Observable<ShoppingCart>

  constructor(cartService: CartService) {
    this.shoppingCart$ = cartService.currentShoppingCart$
  }
}
