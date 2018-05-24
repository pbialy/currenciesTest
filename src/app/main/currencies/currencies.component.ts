import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  public onBackButtonClick(): void {
    this.router.navigate(['/features']);
  }

}
