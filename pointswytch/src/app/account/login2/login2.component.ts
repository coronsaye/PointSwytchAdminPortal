import { Component } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html'
})
export class Login2Component {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService) { }


  login: Login;
  token: any;
  fault: String;

  authenticate(username: String, password: String): void {
   
    this.login = new Login(username, password);
    this.loginService.authenticate(this.login)

    .subscribe(token => {
      this.token = token;
      // localStorage.setItem('token', this.token);
      console.log('login token - ' + JSON.stringify(this.token));
      this.toastr.success('success', 'Logged successfuly');
      this.router.navigate(['/dashboard/admin']);
     },

     error => {

      this.fault = error ; // error path
      console.log(JSON.stringify(this.fault));

      this.toastr.error(JSON.stringify(this.fault), 'An Error Has Occured');

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
