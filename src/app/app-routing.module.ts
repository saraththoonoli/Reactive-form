import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookRegComponent } from './book-reg/book-reg.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:BookRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
