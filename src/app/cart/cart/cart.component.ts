import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ShoppingCart} from "./cart.component.spec";

@Component({
  selector: 'tdd-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  @Input() shoppingCart!: ShoppingCart;
}
