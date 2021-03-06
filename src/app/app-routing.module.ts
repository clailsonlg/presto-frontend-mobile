import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './page/menu/menu-list/order-details/order-details.component';
import { SignInModule } from './page/signin/signin.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./page/signin/signin.module').then(m => m.SignInModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./page/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'menu-list',
    loadChildren: () => import('./page/menu/menu-list/menu-list.module').then(m => m.MenuListPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./page/menu/menu-list/order-details/order-details.module').then(m => m.OrderDetailsModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./page/qr-code/qr-code.module').then(m => m.QrCodeModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
