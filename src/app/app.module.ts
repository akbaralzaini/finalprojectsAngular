import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { AgencyComponent } from './content/agency/agency.component';
import { BusesComponent } from './content/buses/buses.component';
import { TripsComponent } from './content/trips/trips.component';
import { ProfileComponent } from './content/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    DashboardComponent,
    AgencyComponent,
    BusesComponent,
    TripsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
