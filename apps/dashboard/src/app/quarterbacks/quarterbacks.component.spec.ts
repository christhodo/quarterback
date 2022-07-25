import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterbacksComponent } from './quarterbacks.component';

describe('QuarterbacksComponent', () => {
  let component: QuarterbacksComponent;
  let fixture: ComponentFixture<QuarterbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
