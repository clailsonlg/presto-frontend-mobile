import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { OrderDetailsComponent } from './page/menu/menu-list/order-details/order-details.component';
=======
import { SignInModule } from './page/signin/signin.module';
>>>>>>> 15d477b2a31ec5ee8a34d451454886696c5d863e

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
<<<<<<< HEAD
=======
  },
  {
    path: 'signin',
    loadChildren: () => import('./page/signin/signin.module').then(m => m.SignInModule)
>>>>>>> 15d477b2a31ec5ee8a34d451454886696c5d863e
  },
  {
    path: 'change-password',
    loadChildren: () => import('./page/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'menu-list',
    loadChildren: () => import('./page/menu/menu-list/menu-list.module').then(m => m.MenuListPageModule)
<<<<<<< HEAD
  },
  {
    path: 'order-details',
    loadChildren: () => import('./page/menu/menu-list/order-details/order-details.module').then(m => m.OrderDetailsModule)
=======
>>>>>>> 15d477b2a31ec5ee8a34d451454886696c5d863e
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
