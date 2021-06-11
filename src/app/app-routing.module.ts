import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/content/dashboard/dashboard.component';
import { AgencyComponent } from './components/content/agency/agency.component';
import { BusesComponent } from './components/content/buses/buses.component';
import { TripsComponent } from './components/content/trips/trips.component';
import { ProfileComponent } from './components/content/profile/profile.component';
import { TemplatesComponent } from './components/templates/templates.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: TemplatesComponent,
    children:[
      {
        path: "dashboard",
        component : DashboardComponent
      },
      {
        path:"agency",
        component: AgencyComponent
      },
      {
        path:"buses",
        component: BusesComponent
      },
      {
        path: "trips",
        component: TripsComponent
      },
      {
        path : "profile",
        component: ProfileComponent
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
    ]
  },{ path: '', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
