import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyUsdComponent } from './currency-usd.component';

describe('CurrencyUsdComponent', () => {
  let component: CurrencyUsdComponent;
  let fixture: ComponentFixture<CurrencyUsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyUsdComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyUsdComponent);
    component = fixture.componentInstance;
    component.amount = 13.34;
    component.currencyName = 'LSK';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
