import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Offer} from "../offer";
import {MenuProviderService} from "../menu-provider.service";

@Component({
  selector: 'tdd-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuWrapperComponent {

  readonly menu$: Observable<Offer[]>;

  constructor(provider: MenuProviderService) {
    this.menu$ = provider.menu$
  }
}
