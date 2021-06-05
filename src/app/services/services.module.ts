import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { StorageService } from './storage.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenInterceptor } from '../interceptors/token-interceptor';
import { CardapioService } from './cardapio.service';
import { CartService } from './cart.service';
import { ProdutoService } from './product.service';

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
    CardapioService,
    JwtHelperService,
    AuthGuard,
    HttpClientModule,
    NativeStorage,
    CartService,
    ProdutoService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class ServicesModule { }
