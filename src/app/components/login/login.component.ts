import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private attempt: number = 1;
  constructor() { }

  ngOnInit() { }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  public attempTime(newAttempt: number): number {
    return this.attempt + newAttempt;
  }

  public auth(name: string): string {
    return 'auth '+name;
  }

}
