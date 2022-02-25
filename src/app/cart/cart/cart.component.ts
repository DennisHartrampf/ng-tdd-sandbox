import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ShoppingCart} from "../shopping-cart";

@Component({
  selector: 'tdd-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  @Input() shoppingCart!: ShoppingCart;
}
