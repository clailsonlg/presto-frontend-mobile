import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./page/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'menu-list',
    loadChildren: () => import('./page/menu/menu-list/menu-list.module').then( m => m.MenuListPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./page/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./page/produto/produto.module').then( m => m.ProductPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./page/produto-detail/produto-detail.module').then( m => m.ProdutoDetailPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
