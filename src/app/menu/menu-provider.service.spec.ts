import {MenuProviderService} from "./menu-provider.service";
import {MockBuilder} from "ng-mocks";
import {MenuModule} from "./menu.module";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {Menu} from "./menu";
import {SAMPLE_MENU} from "./menu-wrapper/menu-wrapper.component.spec";
import {environment} from "../../environments/environment";


describe(MenuProviderService.name, () => {

  beforeEach(() => MockBuilder(MenuProviderService, MenuModule).replace(
    HttpClientModule, HttpClientTestingModule
  ));

  it('pulls menu via HTTP request', () => {
    const service = TestBed.inject(MenuProviderService);

    let menu: Menu | null = null;
    service.menu$.subscribe(
      fromService => menu = fromService
    );

    const http = TestBed.inject(HttpTestingController);

    http.expectOne(environment.api.menu).flush(
      SAMPLE_MENU
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(menu!).toEqual(SAMPLE_MENU);
  });
});
