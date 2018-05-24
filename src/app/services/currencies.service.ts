import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CurrenciesService {

  private readonly BITBAY_ENDPOINT = 'https://bitbay.net/API/Public';

  private readonly VALUES_TO_GET = [
    'BTCPLN',
    'LSKPLN',
    'ETHPLN'
  ];

  constructor(
    private http: HttpClient
  ) {}

  public getCurrency(currency: string): Observable<any> {

    return this.http.get(`${this.BITBAY_ENDPOINT}/${currency}/ticker.json`);
  }

  public getCurrenciesArray(): Observable<any> {
    return Observable.forkJoin(
      this.getCurrency(this.VALUES_TO_GET[0]),
      this.getCurrency(this.VALUES_TO_GET[1]),
      this.getCurrency(this.VALUES_TO_GET[2])
    ).map(responses => {
      // debugger;
      return responses.map((resp, i) => {
        return {
          currencyName: this.formatCurrencies(this.VALUES_TO_GET[i]),
          amount: Number(resp.bid)
        };
      });
      // return responses.reduce((allValues, currentValue, i) => {
      //   return {
      //     ...allValues,
      //     [this.formatCurrencies(this.VALUES_TO_GET[i])]: this.formatAmount(currentValue.bid)
      //   };
      // }, {});
    });
  }

  private formatCurrencies(currencies: string): string {
    return currencies.slice(0, 3);
  }


}
