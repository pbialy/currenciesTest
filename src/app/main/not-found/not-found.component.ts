import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(
    private router: Router
  ) {}

  public onFeaturesButtonClick(): void {
    this.router.navigate(['/features']);
  }

}
