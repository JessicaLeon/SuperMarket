import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Products//list/list.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './NewPass/newpass.component';
import { HomeComponent } from './home/home.component';
import { Category } from './Models/category';
import { ListCategoryComponent } from './Category/list-category/list-category.component';
import { ListUserComponent } from './Users/List/list.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'productos', component:ListComponent},
  {path: 'login', component:LoginComponent},
  {path: 'categorias', component:ListCategoryComponent},
<<<<<<< Updated upstream
  {path: 'usuarios', component:ListUserComponent}


=======
  {path: 'usuarios', component:ListUserComponent},
  {path: "reset", component: ResetComponent, pathMatch: "full" }
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
