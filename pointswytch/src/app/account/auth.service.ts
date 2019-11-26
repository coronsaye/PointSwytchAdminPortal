import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}
  // ...
  public isAuthenticated(): boolean {
    
    const token = localStorage.getItem('token');

    console.log(localStorage.getItem('token'));

    if (token === '') {

      // tslint:disable-next-line: max-line-length
      return !this.jwtHelper.isTokenExpired('eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzQzNTE1NDQsImlzcyI6Imlzc3Vlcl9uYW1lIiwiYXVkIjoiY2xpZW50IiwidXNlcl9pZCI6MX0.HZzqnyHZcbmxUheh4abSG6DE78Bhe6fAi2AOgIV4BYA');
    }
    
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
