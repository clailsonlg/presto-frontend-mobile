import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { DessertMenuPage } from './dessert-menu.page';

const routes: Routes = [
  {
    path: '', component: DessertMenuPage, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DessertMenuPageRoutingModule {}
