import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryApiComponent } from './country-api/country-api.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "country",
    component:CountryApiComponent
  },
  {
    path: "home",
    component:HomepageComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
