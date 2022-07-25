import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quarterback } from '@quarterback-angular/api-interfaces';

@Component({
  selector: 'quarterback-angular-quarterback-details',
  templateUrl: './quarterback-details.component.html',
  styleUrls: ['./quarterback-details.component.scss'],
})
export class QuarterbackDetailsComponent {
  currentQuarterback: Quarterback;
  originalTitle = '';
  @Input() set quarterback(value: Quarterback) {
    if (value) this.originalTitle = value.title;
    this.currentQuarterback = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
