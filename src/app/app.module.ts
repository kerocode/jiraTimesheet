import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from 'app/welcome-screen/welcome-screen.component';
import { HomeScreenComponent } from 'app/home-screen/home-screen.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationGuard } from 'app/services/authenticationguard';
import { AuthService } from 'app/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdCardModule, MdIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MdInputModule,
    MdCardModule,
    MdIconModule
  ],
  exports: [BrowserAnimationsModule, HttpClientModule,
    MdInputModule, ReactiveFormsModule],
  providers: [AuthService, AuthenticationGuard],
  declarations: [WelcomeScreenComponent, HomeScreenComponent, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
