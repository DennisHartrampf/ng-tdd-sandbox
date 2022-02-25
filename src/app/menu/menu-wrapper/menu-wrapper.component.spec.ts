import {MenuWrapperComponent} from './menu-wrapper.component';
import {MockBuilder, MockRender, ngMocks} from "ng-mocks";
import {MenuModule} from "../menu.module";
import {Subject} from "rxjs";
import {MenuComponent} from "../menu/menu.component";
import {MenuProviderService} from "../menu-provider.service";
import {screen} from "@testing-library/angular";
import {Menu} from "../menu";

export const SAMPLE_MENU: Menu = [
  {flavor: "Vanilla", size: "M", priceEuros: 2},
  {flavor: "Vanilla", size: "L", priceEuros: 3},
  {flavor: "Mint", size: "S", priceEuros: 5},
];

describe('MenuWrapperComponent', () => {
  let currentMenu$: Subject<Menu>;

  beforeEach(() => {
      currentMenu$ = new Subject<Menu>();
      return MockBuilder(MenuWrapperComponent, MenuModule)
      .mock(MenuProviderService, {
        menu$: currentMenu$.asObservable()
      });
    }
  );

  it('gets menu from a service and shows it', () => {
    const fixture = MockRender(MenuWrapperComponent);

    currentMenu$.next(SAMPLE_MENU);
    fixture.detectChanges()

    expect(ngMocks.find(MenuComponent).componentInstance.menu).toEqual(SAMPLE_MENU);
  });

  it('does not show menu, but a waiting indicator when menu is still loading', () => {
    MockRender(MenuWrapperComponent);
    expect(ngMocks.findAll(MenuComponent).length).toBe(0);
    screen.getByText("please wait...")
  });
});
