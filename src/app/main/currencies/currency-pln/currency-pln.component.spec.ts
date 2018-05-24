import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyPlnComponent } from './currency-pln.component';

describe('CurrencyPlnComponent', () => {
  let component: CurrencyPlnComponent;
  let fixture: ComponentFixture<CurrencyPlnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyPlnComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyPlnComponent);
    component = fixture.componentInstance;
    component.amount = 13.34;
    component.currencyName = 'LSK';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
