import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { MealComponent } from './meal/meal.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'meal', component: MealComponent},
  { path: 'form', component: FormComponent},
  { path: 'about', component: AboutComponent},
  { path: 'navbar', component: NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
