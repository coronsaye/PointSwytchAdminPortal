import { Component } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html'
})
export class Login2Component {

  constructor(private loginService: LoginService) { }


  login: Login;
  token: any;
  fault: String;

  authenticate(username: String, password: String): void {
   
    this.login = new Login(username, password);
    this.loginService.authenticate(this.login)

    .subscribe(token => {
      this.token = token;
      localStorage.setItem('access_token', this.token);
      console.log(JSON.stringify(this.token));
     },

     error => {

      this.fault = error ; // error path
      console.log(JSON.stringify(this.fault));

     }

     );
  }

  loginform = true;
  recoverform = false;

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
