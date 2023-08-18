import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BackgroundComponent } from './components/background/background.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './module/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpComponent } from './pages/otp/otp.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { SignupConfirmationComponent } from './pages/signup-confirmation/signup-confirmation.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SignupComponent,
    HeaderComponent,
    SigninComponent,
    FooterComponent,
    ForgotPasswordComponent,
    OtpComponent,
    OnboardingComponent,
    SignupConfirmationComponent,
    ResetPasswordComponent,
    TestComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgOtpInputModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
