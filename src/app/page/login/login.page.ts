import { CredentialsDTO } from './../../models/credentials.dto';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credential: CredentialsDTO = {
    email: "",
    senha: ""
  };

  constructor(public router: Router, private auth: AuthService) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.router.navigate(['/home']);
      },
      error => { });
  }

  login() {
    this.auth.authenticate(this.credential)
      .subscribe(response => {
        this.router.navigate(['/home']);
      },
      error => { });
  }

  changePassword() {
    this.router.navigate(['/change-password']);
  }

}
