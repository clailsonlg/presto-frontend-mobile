import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { ProdutoDetailPage } from './produto-detail.page';

const routes: Routes = [
  {
    path: '', component: ProdutoDetailPage, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoDetailPageRoutingModule {}
