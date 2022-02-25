import {CartWrapperComponent} from './cart-wrapper.component';
import {BehaviorSubject, Observable} from "rxjs";
import {MockBuilder} from "ng-mocks";
import {ShoppingCart} from "../cart/cart.component.spec";
import {CartModule} from "../cart.module";

export class CartService {
  currentShoppingCart$!: Observable<ShoppingCart>;
}
describe('CartWrapperComponent', () => {
  let currentShoppingCart$: BehaviorSubject<ShoppingCart>;

  beforeEach(() => {
      currentShoppingCart$ = new BehaviorSubject<ShoppingCart>({sumInEuro: 0})
      return MockBuilder(CartWrapperComponent, CartModule)
        .mock(CartService, {
          currentShoppingCart$: currentShoppingCart$.asObservable()
        });
    }
  );
});
