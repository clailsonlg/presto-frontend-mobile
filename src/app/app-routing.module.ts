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
    path: 'product-menu',
    loadChildren: () => import('./page/menu/product-menu/product-menu-routing.module').then( m => m.ProductMenuPageRoutingModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
