import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'tdd-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartWrapperComponent {

}
