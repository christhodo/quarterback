import { Component, OnInit } from '@angular/core';
import { Quarterback } from '@quarterback-angular/api-interfaces';
import { QuarterbacksFacade } from '@quarterback-angular/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'quarterback-angular-quarterbacks',
  templateUrl: './quarterbacks.component.html',
  styleUrls: ['./quarterbacks.component.scss'],
})
export class QuarterbacksComponent implements OnInit {
  allQuarterbacks$: Observable<Quarterback[]> = this.quarterbacksFacade
    .allQuarterbacks$;
  selectedQuarterback$: Observable<Quarterback> = this.quarterbacksFacade
    .selectedQuarterback$;

  constructor(private quarterbacksFacade: QuarterbacksFacade) {}

  ngOnInit(): void {
    this.reset();
    this.quarterbacksFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadQuarterbacks();
    this.selectQuarterback(null);
  }

  resetForm() {
    this.selectQuarterback(null);
  }

  selectQuarterback(quarterback: Quarterback) {
    this.quarterbacksFacade.selectQuarterback(quarterback?.id);
  }

  loadQuarterbacks() {
    this.quarterbacksFacade.loadQuarterbacks();
  }

  saveQuarterback(quarterback: Quarterback) {
    this.quarterbacksFacade.saveQuarterback(quarterback);
  }

  deleteQuarterback(quarterback: Quarterback) {
    this.quarterbacksFacade.deleteQuarterback(quarterback);
  }
}
