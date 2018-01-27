import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message: string;

  private attempt: number = 1;
  title: string = "Login Application";
  public username: string;
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

  showUername(){
    this.username = ' sameera'
  }

  eventPop(msg:string){
   this.message = msg;
   alert(this.message)
  }


}
