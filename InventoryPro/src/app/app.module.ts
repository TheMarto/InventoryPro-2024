import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ForgotComponent } from './pages/login/forgot/forgot.component';
import { NewAccountComponent } from './pages/login/new-account/new-account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { NewPasswordComponent } from './pages/login/new-password/new-password.component';


//rutas
const appRoutes:Routes=[

  {path:'', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'new-account', component:NewAccountComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'new-password', component:NewPasswordComponent},
  //{path:'**', component: LoginComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    NewAccountComponent,
    DashboardComponent,
    HomePageComponent,
    NewPasswordComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    
  ],
  providers: [
    provideClientHydration(), Router
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
