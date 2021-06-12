import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { DashboardComponent } from './components/content/dashboard/dashboard.component';
import { AgencyComponent } from './components/content/agency/agency.component';
import { BusesComponent } from './components/content/buses/buses.component';
import { TripsComponent } from './components/content/trips/trips.component';
import { ProfileComponent } from './components/content/profile/profile.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavigationComponent } from './components/templates/navigation/navigation.component';
import { ErrorPageComponent } from './error-page/error-page.component';

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
    ProfileComponent,
    TemplatesComponent,
    FooterComponent,
    NavigationComponent,
    ErrorPageComponent
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
