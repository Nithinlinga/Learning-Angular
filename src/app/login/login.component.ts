import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  counter=0
  updateCounter(a:number){
    if(a==0){
      this.counter=0;
      return;
    }
    this.counter+=a;
  }
}
