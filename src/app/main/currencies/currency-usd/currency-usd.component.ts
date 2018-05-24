import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.css']
})
export class CurrencyUsdComponent {

  @Input() public currencyName: string;
  @Input() public amount: number;

  constructor() {}

  public getFormattedAmount(): string {
    const amountInUSD = this.amount / 3;
    return Number(amountInUSD.toFixed(1)).toLocaleString();
  }

}
