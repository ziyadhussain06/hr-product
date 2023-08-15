import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
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
  // formGroup!: FormGroup; 
  resetpassword!: FormGroup;
  signInError: string = '';
  loading: boolean = false;
  signInError401: string = '';
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router,
              
              ) {}
  ngOnInit() {
    this.resetpassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
    });
  }
  onSubmit(): void {
    if (this.resetpassword.valid) {
     
      // Make API call to validate credentials
      this.validateCredentials();
    }
  }
  validateCredentials(): void {

    
  }
   /*password*/
   password: string = '';
   isNewPasswordValid: boolean = true;
   newpasswordVisible: boolean = false;
   confirmpasswordVisible: boolean = false;
   isConfirmPasswordValid: boolean = true;
   
   toggleNewPasswordVisibility() {
     this.newpasswordVisible = !this.newpasswordVisible;
   }
   toggleConfirmPasswordVisibility() {
    this.confirmpasswordVisible = !this.confirmpasswordVisible;
  }
  

  /*Alert warnig msg close button*/
  alertwarning = true;
  reloadPageAfterDelay() {
    setTimeout(() => {
      window.location.reload();
    }, 3000); // Adjust the delay time as needed
  }
   
}
