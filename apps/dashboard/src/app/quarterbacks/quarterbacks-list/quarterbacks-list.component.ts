import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quarterback } from '@quarterback-angular/api-interfaces';

@Component({
  selector: 'quarterback-angular-quarterbacks-list',
  templateUrl: './quarterbacks-list.component.html',
  styleUrls: ['./quarterbacks-list.component.scss'],
})
export class QuarterbacksListComponent {
  @Input() quarterbacks: Quarterback[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
