import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.css']
})
export class CurrencyPlnComponent implements OnInit {

  @Input() public currencyName: string;
  @Input() public amount: number;

  constructor() { }

  ngOnInit() {
  }

  public getFormattedAmount(): string {
    return Number(this.amount.toFixed(2)).toLocaleString();
  }

}
