import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'menu-list.page.html',
  styleUrls: ['menu-list.page.scss'],
})
export class MenuListPage {

  constructor(public router: Router) { }

  showPizzaMenu() {
    this.router.navigate(['/pizza-menu']);
  }

  showDrinksMenu() {
    this.router.navigate(['/drinks-menu']);
  }

  showDessertMenu() {
    this.router.navigate(['/dessert-menu']);
  }

}
