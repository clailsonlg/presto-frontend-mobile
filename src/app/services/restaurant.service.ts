import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PREFIX } from '../api_config/prefix';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

  // Get for all restaurants
  getAllRestaurants(): Observable<String[]> {
    return this.http.get<String[]>(
      `${PREFIX.baseUrl}/restaurante/restaurantes/nomes`
    )
  }
}
