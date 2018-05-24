import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrenciesService {

  constructor(
    private http: HttpClient
  ) {}

  public getCurrencies(): Observable<any> {
    // return this.http.get<any>(this.USER_ENDPOINT + '/current');
    return this.http.get<any>('change-me');
  }

}
