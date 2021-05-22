import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (this.auth.loggedUser().token !== null) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.auth.loggedUser().token}`
          }
        });
      }

      return next.handle(request);
    }
}