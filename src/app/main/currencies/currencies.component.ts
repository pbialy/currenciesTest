import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrenciesService } from '../../services/currencies.service';


@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  public isGetCurrenciesArrayRequestPending = true;
  public getCurrenciesRequestHasError = false;

  public currenciesArray: any[];

  constructor(
    private router: Router,
    private currenciesService: CurrenciesService
  ) {}

  ngOnInit() {
    this.currenciesService.getCurrenciesArray()
      .finally(() => this.isGetCurrenciesArrayRequestPending = false)
      .subscribe(
        (currencies) => {
          console.log(currencies);
          this.currenciesArray = currencies;
        },
        () => {
          this.getCurrenciesRequestHasError = true;
        }
      );  // TODO need the USD thing (in component)
  }

  public onBackButtonClick(): void {
    this.router.navigate(['/features']);
  }

}
