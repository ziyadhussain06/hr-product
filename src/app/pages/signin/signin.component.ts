import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
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
           
            // Sign-in successful, navigate to the dashboard or the desired page
            this.signInError = '';
            localStorage.setItem('userId', response.userId);
            this.signInForm.reset();
            localStorage.setItem('jwtToken', response.token); // Store the JWT in local storage

            // Display the JWT token in the console (for demonstration only)
            console.log('JWT Token:', response.token);
            
            // Redirect to the dashboard or the desired page
          } else {
            // Sign-in failed, show error message to the user
           // this.signInError ;
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
         
          // Handle API error response here
          //console.error('Sign-in failed:', error);
          this.signInError = 'An error occurred during sign-in. Please try again later.';
          this.signInForm.reset();
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
   
  
}
