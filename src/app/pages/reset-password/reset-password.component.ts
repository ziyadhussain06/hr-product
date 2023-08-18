import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_BASE_URL } from '../../../constant/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  /*form disable buton*/
  resetpassword!: FormGroup;
  signInError: string = '';
  loading: boolean = false;
  signInError401: string = '';
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,

  ) { }
  ngOnInit() {
    this.resetpassword = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.resetpassword.valid) {
      const formData = this.resetpassword.value;
      this.validateCredentials(formData.password, formData.c_password);
    }
  }
  validateCredentials(password: string, c_password: string): void {
    //  const opt_values = this.otp_pin;
    // // Make API call to validate credentials
    const userEmail = sessionStorage.getItem('userEmail')
    this.http.patch<any>(API_BASE_URL + 'api/auth/reset-password', { userEmail, password: password, c_password: c_password })
      .subscribe(
        (response: any) => {
          sessionStorage.removeItem('userEmail');
          
          this.loading = true;
          setTimeout(() => {
            // Redirect to a success page using Angular Router
            this.router.navigate(['/signin']);
            // Reload the current page after 3 seconds
            setTimeout(() => {
              this.loading = false; // Set the loading state to false
              window.location.reload();
            }, 3000);
          }, 2000);
        }
      );

  }
  /*password*/
    password: string = '';
    confirmPassword: string = '';
    isPasswordValid: boolean = true;
    isPasswordConfirmed: boolean = true;
    passwordVisible: boolean = false;
    confirmPasswordVisible: boolean = false;
    confirmpassdisabled: boolean = false;
    onFocus() {
    }
    onBlur() {
    }
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
    toggleConfirmPasswordVisibility() {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
    validatePassword() {
      this.isPasswordValid = this.password.length >= 8 && this.containsUppercase() && this.containsLowercase() && this.containsSymbol() && this.containsNumbers();
      if(this.isPasswordConfirmed = this.password === this.confirmPassword){
        this.resetpassword.get('isPasswordConfirmed')?.enable(); // Disable the email form control
        this.confirmpassdisabled = false;
      }
      else{
        this.resetpassword.get('isPasswordConfirmed'); // Disable the email form control
        this.confirmpassdisabled = true;
      }
      
    }
    containsUppercase(): boolean {
      return /[A-Z]/.test(this.password);
    }
    containsLowercase(): boolean {
      return /[a-z]/.test(this.password);
    }
    containsSymbol(): boolean {
      return /[@$!%*?&#]/.test(this.password);
    }
    containsNumbers(): boolean {
      return /[0-9]/.test(this.password);
    }



  /*Alert warnig msg close button*/
  alertwarning = true;
  reloadPageAfterDelay() {
    setTimeout(() => {
      window.location.reload();
    }, 3000); // Adjust the delay time as needed
  }
}
