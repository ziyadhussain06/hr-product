import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { API_BASE_URL } from '../../../constant/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  /*form disable buton*/
  forgetpassword!: FormGroup; 
  loading: boolean = false;
  otpmessage: string ='';
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    
    ) {}
  ngOnInit() {
    this.forgetpassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    // Your form submission logic here
    if (this.forgetpassword.valid) {
      const formData = this.forgetpassword.value;
      // Make API call to validate credentials
      this.validateCredentials(formData.email);
    }
  }
  validateCredentials(email: string ): void {
    this.http.post<any>(API_BASE_URL+'api/forget-password', { email: email })
    .subscribe(
        (response:any) => {
          console.warn('addffdf');
            this.otpmessage = response.message;
            console.warn(this.otpmessage); // Set the API response message
            this.loading = true;
            setTimeout(() => {
              // Redirect to a success page using Angular Router
              this.router.navigate(['/otp']);
              // Reload the current page after 3 seconds
              setTimeout(() => {
                this.loading = false; // Set the loading state to false
                window.location.reload();
              }, 3000);
            }, 2000);
        },
        (error: HttpErrorResponse) => {
          this.otpmessage= 'Server Error'
          console.warn(this.otpmessage);
        }
    );
  }
  /*email*/
  email: string = '';
  isEmailValid: boolean = true;
  isEmailFormatValid: boolean = true;
  resetValidation() {
    this.isEmailValid = true;
    this.isEmailFormatValid = true;
  }
  validateEmail() {
    if (!this.email) {
      this.isEmailValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isEmailFormatValid = emailPattern.test(this.email);
      this.isEmailValid = this.isEmailFormatValid;
    }
  }

   

}
