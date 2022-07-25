import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterbacksListComponent } from './quarterbacks-list.component';

describe('QuarterbacksListComponent', () => {
  let component: QuarterbacksListComponent;
  let fixture: ComponentFixture<QuarterbacksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterbacksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterbacksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
