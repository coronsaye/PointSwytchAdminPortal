import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AppSettings } from 'src/app/app_settings';
import { AccessToken } from '../../models/access-token';
import { Login } from '../../models/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private _baseUrl = AppSettings.API_ENDPOINT;

  constructor(private http: HttpClient) { }

    // Add new user group
    authenticate (data: Login): Observable<AccessToken>  {
      console.log('...validating login credentials');
      return this.http.post<AccessToken>(this._baseUrl + '/users/login', data , httpOptions).pipe(
        tap((token: any) => console.log('Login session created with token ' + JSON.stringify(token)),
        catchError(error => of('error: ' + error))));
    }
}
