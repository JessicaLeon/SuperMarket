import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Products//list/list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'productos', component:ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
