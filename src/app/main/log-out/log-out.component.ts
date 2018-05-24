import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

  constructor(
    private router: Router
  ) {}

  public onLogOutButtonClick(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']); // TODO remove this, it should be handled by guard
  }

}
