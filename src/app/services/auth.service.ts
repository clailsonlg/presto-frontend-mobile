import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { CredentialsDTO } from './../models/credentials.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PREFIX } from '../api_config/prefix';
import { LocalUser } from '../models/local_user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${PREFIX.baseUrl}/login`
  jwtHelper?: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, public storage: StorageService, public router: Router) {
  }

  authenticate(credential: CredentialsDTO) {
    console.log(credential);
    return this.http.post<any>(
      this.url,
      credential,
      {
        observe: 'response'
      })
      .pipe(map(user => {
        console.log(user);
        this.successfulLogin(user.headers.get('Authorization'));
        this.router.navigate(['/home']);
        return user;
      }));
    ;

  }

  successfulLogin(authorizationValue: string) {
    console.log(authorizationValue);
    let tok = authorizationValue.substring(7);
    let user : LocalUser = {
      token: tok
      ,
      email: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }

  loggedUser(): LocalUser {
    return JSON.parse(localStorage.getItem('localUser'));
  }

}
