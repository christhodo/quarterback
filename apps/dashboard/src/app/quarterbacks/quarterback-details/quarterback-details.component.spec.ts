import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterbackDetailsComponent } from './quarterback-details.component';

describe('QuarterbackDetailsComponent', () => {
  let component: QuarterbackDetailsComponent;
  let fixture: ComponentFixture<QuarterbackDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterbackDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterbackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
