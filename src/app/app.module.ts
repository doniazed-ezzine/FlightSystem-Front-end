import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';

import { RouterModule } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { FlightService } from './flight/flight.service';

import { AppRoutinModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  
    FlightComponent,
       DashboardComponent,
       RegisterComponent,
       LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutinModule,
    RouterModule,
    AppRoutinModule,
    HttpClientModule, FormsModule,
    
  ],
  providers: [FlightService, UserService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
