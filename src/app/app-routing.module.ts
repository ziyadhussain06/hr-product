import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpComponent } from './pages/otp/otp.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';  
import { SignupConfirmationComponent } from './pages/signup-confirmation/signup-confirmation.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';


const routes: Routes = [
  {path: 'signupconfirm/:email/:token', component : SignupConfirmationComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: '', redirectTo:'/signup', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
