import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path:"login",component: LoginComponent},
  {path:"",component: HomeComponent},
  {path:"user",component: UserComponent},
  {path:"login",component: LoginComponent},
  {path:"add-user",component: AddUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
