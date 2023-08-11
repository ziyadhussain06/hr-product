


import { API_BASE_URL } from '../../constant/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signInForm!: FormGroup;
  signInError: string = '';
  loading: boolean = false;
  constructor(private http: HttpClient,
    private router:Router) { }
    login(data:any){ 
      this.http.post(API_BASE_URL+'api/auth/login',data)
      .subscribe(
        (response:any)=>{
          if (response.success) {
            // Sign-in successful, navigate to the dashboard or the desired page
            this.signInError = '';
            
           } else {
            // Sign-in failed, show error message to the user
           this.signInError ;
           this.signInForm.reset();
           localStorage.setItem("access_token", response.access_token); // Store the JWT in local storage
           // Display the JWT token in the console (for demonstration only)
           console.log("access_token", response.access_token);
            this.loading = true;

              setTimeout(() => {
                
                // Redirect to a success page using Angular Router
                this.router.navigate(['']);

                // Reload the current page after 3 seconds
                setTimeout(() => {
                  this.loading = false; // Set the loading state to false
                  window.location.reload();
                }, 3000);
              }, 2000);
          }
        
        (error: HttpErrorResponse) => {
         
          // Handle API error response here
          //console.error('Sign-in failed:', error);
          this.signInError = 'An error occurred during sign-in. Please try again later.';
          this.signInForm.reset();
        }
        }
      )
    }

    
}

