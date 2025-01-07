import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { CrudPageComponent } from './crud-page/crud-page.component';

const routes: Routes = [
   { path: 'login', component: LoginFormComponent },
   { path: 'crud', component:CrudPageComponent},
   { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
