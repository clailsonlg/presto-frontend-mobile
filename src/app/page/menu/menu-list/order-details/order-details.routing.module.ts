import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { OrderDetailsComponent } from './order-details.component';

const routes: Routes = [
    {
        path: '', component: OrderDetailsComponent, canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderDetailsRoutingModule { }
