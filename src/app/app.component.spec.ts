import { AppComponent } from './app.component';
import {MockBuilder, MockRender, ngMocks} from "ng-mocks";
import {AppModule} from "./app.module";
import {MenuWrapperComponent} from "./menu/menu-wrapper/menu-wrapper.component";

describe(AppComponent.name, () => {
  beforeEach(() => MockBuilder(AppComponent, AppModule))
  it('shows the ice cream menu', () => {
    MockRender(AppComponent)
    ngMocks.find(MenuWrapperComponent)
  })
});
