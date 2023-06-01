import{ NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { UserComponent } from "./user/user.component";
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
    { path: '', redirectTo: '/dash', pathMatch: 'full' },
    {path : 'dash' , component:DashboardComponent},
    {path : 'signup' , component:RegisterComponent},
    {path : 'login' , component:LoginComponent},
    { path: 'flight', component: FlightComponent},
    
    {path:'utilisateur', component:UserComponent}
];
@NgModule({
 imports:[RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]

})
export class AppRoutinModule {

}
