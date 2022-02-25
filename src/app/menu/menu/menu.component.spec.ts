import {MenuComponent} from './menu.component';
import {MockBuilder, MockRender, ngMocks} from "ng-mocks";
import {MenuModule} from "../menu.module";
import {Offer} from "../offer";
import {OfferComponent} from "../offer/offer.component";
import {screen} from "@testing-library/angular";

describe('MenuComponent', () => {
  beforeEach(() => MockBuilder(MenuComponent, MenuModule).keep(OfferComponent));

  it('shows a headline', () => {
    MockRender(MenuComponent, {menu: []});
    screen.getByText("Ice Cream, you scream, everybody scream!")
  });

  it('shows multiple offers', () => {

    MockRender(MenuComponent, {
      menu: [
        {flavor: "Vanilla", size: "M", priceEuros: 2},
        {flavor: "Vanilla", size: "L", priceEuros: 3},
        {flavor: "Mint", size: "S", priceEuros: 5},
      ] as Offer[]
    });

    const offerComponents = ngMocks.findAll(OfferComponent);
    expect(offerComponents.length).toBe(3)

    expect(offerComponents[0].componentInstance.offer).toEqual(
      {flavor: "Vanilla", size: "M", priceEuros: 2}
    );
  });
});
