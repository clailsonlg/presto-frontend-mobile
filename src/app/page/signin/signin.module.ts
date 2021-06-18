import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInComponentRoutingModule } from './signin-routing.module';

import { SigninComponent } from './signin.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignInComponentRoutingModule,
        SharedModule
    ],
    declarations: [SigninComponent]
})
export class SignInModule { }
