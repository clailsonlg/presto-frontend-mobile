import { AuthGuard } from 'src/app/services/auth-guard.service';
import { StorageService } from './storage.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UsuarioService,
    StorageService,
    JwtHelperService,
    AuthGuard,
    HttpClientModule
  ]
})
export class ServicesModule { }
