import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { PizzaMenuPage } from './pizza-menu.page';

const routes: Routes = [
  {
    path: '', component: PizzaMenuPage, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaMenuPageRoutingModule {}
