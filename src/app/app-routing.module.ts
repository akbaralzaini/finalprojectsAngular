import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AgencyComponent } from './content/agency/agency.component';
import { BusesComponent } from './content/buses/buses.component';
import { TripsComponent } from './content/trips/trips.component';
import { ProfileComponent } from './content/profile/profile.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: SidebarComponent,
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
