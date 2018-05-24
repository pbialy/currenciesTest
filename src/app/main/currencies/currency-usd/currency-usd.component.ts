import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.css']
})
export class CurrencyUsdComponent implements OnInit {

  @Input() public currencyName: string;
  @Input() public amount: number;

  constructor() { }

  ngOnInit() {
  }

  public getFormattedAmount(): string {
    const amountInUSD = this.amount / 3;
    return Number(amountInUSD.toFixed(2)).toLocaleString();
  }

}
