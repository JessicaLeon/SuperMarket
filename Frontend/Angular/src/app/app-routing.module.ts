import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Products//list/list.component';
import { AppComponent } from './app.component';
import { ListUserComponent } from './Users/List/list.component';


const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'productos', component:ListComponent},
  {path: 'usuarios', component:ListUserComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
