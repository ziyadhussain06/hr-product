import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { API_BASE_URL } from '../../../constant/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit{
 
  /*form disable buton*/
  // formGroup!: FormGroup; 
  signInForm!: FormGroup;
  signInError: string = '';
  loading: boolean = false;
  signInError401: string = '';
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router, 
              ) {}
  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
    });
  }
  onSubmit(): void {
    if (this.signInForm.valid) {
      const formData = this.signInForm.value;

      // Make API call to validate credentials
      this.validateCredentials(formData.email, formData.password);
    }
  }
  validateCredentials(email: string, password: string): void {
    this.http.post<any>(API_BASE_URL+'api/auth/login', { email: email, password: password })
    .subscribe(
        (response) => {
          // Handle successful response here
          if (response.success) {
            
          }else{
            localStorage.setItem('access_token', response.access_token); // Store the JWT in local storag 
            this.signInForm.reset();
            this.loading = true;
              setTimeout(() => {
                // Redirect to a success page using Angular Router
                this.router.navigate(['/onboarding']);
                // Reload the current page after 3 seconds
                setTimeout(() => {
                  this.loading = false; // Set the loading state to false
                  window.location.reload();
                }, 3000);
              }, 2000);
          }
        },
        (error: HttpErrorResponse) => {
         this.signInForm.reset();
          if(error.error instanceof ErrorEvent){
            // this.signInError400 = `Error ${error.error.message}`
             
          }else{
            if(error.status == 401){
              this.signInError = "Invalid Email or Password"
              this.reloadPageAfterDelay();
            }
            if(error.status == 400){
              this.signInError = `Error ${error.error.message}`
              this.reloadPageAfterDelay();
            }

           
          }
        }
      );
  }
   /*password*/
   password: string = '';
   isPasswordValid: boolean = true;
   passwordVisible: boolean = false;
   togglePasswordVisibility() {
     this.passwordVisible = !this.passwordVisible;
   }
  /*Alert warnig msg close button*/
  alertwarning = true;
  reloadPageAfterDelay() {
    setTimeout(() => {
      window.location.reload();
    }, 3000); // Adjust the delay time as needed
  }
   
  
}
