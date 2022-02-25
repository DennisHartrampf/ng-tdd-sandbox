import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Offer} from "../offer";

@Component({
  selector: 'tdd-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferComponent {

  @Input()
  offer!: Offer

  @Output()
  clickedBuy = new EventEmitter<void>()

}
