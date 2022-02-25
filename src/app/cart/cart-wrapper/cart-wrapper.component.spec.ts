import {CartWrapperComponent} from './cart-wrapper.component';
import {BehaviorSubject} from "rxjs";
import {MockBuilder, MockRender, ngMocks} from "ng-mocks";
import {CartModule} from "../cart.module";
import {CartComponent} from "../cart/cart.component";
import {CartService} from "../cart.service";
import {ShoppingCart} from "../shopping-cart";

describe('CartWrapperComponent', () => {
  let currentShoppingCart$: BehaviorSubject<ShoppingCart>;

  beforeEach(() => {
      currentShoppingCart$ = new BehaviorSubject<ShoppingCart>({sumInEuro: 31})
      return MockBuilder(CartWrapperComponent, CartModule)
        .mock(CartService, {
          currentShoppingCart$: currentShoppingCart$.asObservable()
        });
    }
  );

  it('gets cart and shows cart component', () => {
    MockRender(CartWrapperComponent);

    expect(ngMocks.find(CartComponent).componentInstance.shoppingCart).toEqual({sumInEuro: 31})
  })
});
