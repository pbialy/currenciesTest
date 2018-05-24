import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Rx';

import { CurrenciesComponent } from './currencies.component';
import { LogOutComponent } from '../log-out/log-out.component';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';
import { CurrenciesService } from '../../services/currencies.service';

describe('CurrenciesComponent', () => {
  let component: CurrenciesComponent;
  let fixture: ComponentFixture<CurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [{
        provide: CurrenciesService,
        useValue: {
          getCurrenciesArray: () => Observable.of([{
            currencyName: 'BTC',
            'amount': 26535.64
          }, {
            currencyName: 'LSK',
            amount: 31.92
          }, {
            currencyName: 'ETH',
            amount: 2035.27
          }])
        }
      }],
      declarations: [
        CurrenciesComponent,
        LogOutComponent,
        CurrencyPlnComponent,
        CurrencyUsdComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
