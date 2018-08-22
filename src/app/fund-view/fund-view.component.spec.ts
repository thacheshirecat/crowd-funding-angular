import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundViewComponent } from './fund-view.component';

describe('FundViewComponent', () => {
  let component: FundViewComponent;
  let fixture: ComponentFixture<FundViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
