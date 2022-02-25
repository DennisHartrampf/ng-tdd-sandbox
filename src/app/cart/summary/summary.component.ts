import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'tdd-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  @Input() sum!: number;

}
