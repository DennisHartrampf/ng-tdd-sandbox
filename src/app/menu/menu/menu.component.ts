import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Offer} from "../offer";

@Component({
  selector: 'tdd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  @Input()
  menu!: Offer[]
}
