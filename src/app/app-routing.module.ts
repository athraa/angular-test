import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : "", component : HomeComponent,pathMatch:"full"},
  {path : "add", component:AddComponent},
  {path : "register", component:RegisterComponent},
  {path : "login", component:LoginComponent},
  {path: "info",component:DetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponent = [
  HomeComponent, AddComponent,RegisterComponent,LoginComponent,DetailsComponent
]
