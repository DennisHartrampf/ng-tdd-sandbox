import { SummaryComponent } from './summary.component';
import {MockBuilder, MockRender} from "ng-mocks";
import {CartModule} from "../cart.module";
import {screen} from "@testing-library/angular";

describe('SummaryComponent', () => {
  beforeEach(() => MockBuilder(SummaryComponent, CartModule))

  it('should display sum', () => {

    MockRender(SummaryComponent, {
      sum: 42
    });

    expect(screen.getByText('€42.00')).toBeTruthy();

  })
});
