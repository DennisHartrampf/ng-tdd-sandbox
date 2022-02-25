import {OfferComponent} from './offer.component';
import {MockBuilder, MockRender} from "ng-mocks";
import {MenuModule} from "../menu.module";
import {screen} from "@testing-library/angular";
import {Offer} from "../offer";

const SAMPLE_OFFER: Offer = {
  flavor: "Chocolate",
  size: "S",
  price_euros: 3
}

describe('OfferComponent', () => {
  beforeEach(() =>
    MockBuilder(OfferComponent, MenuModule)
  );

  it('shows basic offer information', () => {
    const fixture = MockRender(OfferComponent, {
      offer: SAMPLE_OFFER
    });
    expect(fixture.componentInstance).toBeTruthy();
    expect(screen.getByText("Chocolate")).toBeTruthy();
    expect(screen.getByText("S")).toBeTruthy();
    expect(screen.getByText("€3.00")).toBeTruthy()
  });

  it('allows to "buy" an offer', () => {
    let buyWasClicked = false;

    // <tdd-offer [offer]="..." (clickedBuy)="..."></tdd-offer>
    MockRender(OfferComponent, {
      offer: SAMPLE_OFFER,
      clickedBuy: () => buyWasClicked = true
    });

    screen.getByText("Buy").click();
    expect(buyWasClicked).toBeTruthy();
  });
});
