import { Component, OnInit } from '@angular/core';
import { Quarterback } from '@quarterback-angular/api-interfaces';
import { QuarterbacksService } from '@quarterback-angular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'quarterback-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quarterbacks$: Observable<Quarterback[]>;

  constructor(private quarterbacksService: QuarterbacksService) {}

  ngOnInit(): void {
    this.loadQuarterbacks();
  }

  loadQuarterbacks() {
    this.quarterbacks$ = this.quarterbacksService.all();
  }
}
