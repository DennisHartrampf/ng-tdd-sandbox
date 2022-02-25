import {CartComponent} from './cart.component';
import {MockBuilder, MockRender, ngMocks} from "ng-mocks";
import {CartModule} from "../cart.module";
import {SummaryComponent} from "../summary/summary.component";

export type ShoppingCart = {
  sumInEuro: number;
}

describe('CartComponent', () => {
  beforeEach(() => MockBuilder(CartComponent, CartModule))

  it('show summary', () => {

    MockRender(CartComponent, {
      shoppingCart: {
        sumInEuro: 42
      } as ShoppingCart
    });

    expect(ngMocks.find(SummaryComponent).componentInstance.sum).toEqual(42);
  })
});
