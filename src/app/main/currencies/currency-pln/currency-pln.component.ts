import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.css']
})
export class CurrencyPlnComponent {

  @Input() public currencyName: string;
  @Input() public amount: number;

  constructor() {}

  public getFormattedAmount(): string {
    return Number(this.amount.toFixed(2)).toLocaleString();
  }

}
