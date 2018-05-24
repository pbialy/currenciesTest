import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrenciesService } from '../../services/currencies.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  constructor(
    private router: Router,
    private currenciesService: CurrenciesService
  ) {}

  ngOnInit() {
    // TODO get currencies and show loader before they are loaded
    this.currenciesService.getCurrenciesArray().subscribe(currencies => {
      console.log(currencies);
    });  // TODO need the USD thing (in component)
  }

  public onBackButtonClick(): void {
    this.router.navigate(['/features']);
  }

}
