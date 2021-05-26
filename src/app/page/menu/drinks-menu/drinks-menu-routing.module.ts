import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { DrinksMenuPage } from './drinks-menu.page';

const routes: Routes = [
  {
    path: '', component: DrinksMenuPage, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksMenuPageRoutingModule {}
