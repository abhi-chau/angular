import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { CrudPageComponent } from './crud-page/crud-page.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { UserPageComponent } from './userPage/userPage.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
   { path: 'login', component: LoginFormComponent },
   { path: 'admin', component: AdminPageComponent,
     canActivate:[AuthGuard],
     data : {role:'admin'} 
   },
   { path: 'user', component: UserPageComponent,
     canActivate:[AuthGuard],
     data:{role:'user'}
   },
   { path: 'crud', component:CrudPageComponent},
   { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
