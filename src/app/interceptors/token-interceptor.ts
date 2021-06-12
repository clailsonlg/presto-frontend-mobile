import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted')
    if (this.auth.loggedUser() !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.loggedUser().token}`
        }
      });
    }
    console.log('intercepted com request', request.headers.get('Authorization'))
    return next.handle(request);
  }
}
