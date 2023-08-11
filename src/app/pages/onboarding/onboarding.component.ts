import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit{
  /*form disable buton*/
  formGroup!: FormGroup; 
  username: string | null = null;
  constructor(private formBuilder: FormBuilder,
    private router: Router,) {
    const token = localStorage.getItem('access_token');
    console.warn(token)
    if (token) {
      try {
        const tokenPayload: any = jwt_decode.default(token);
        this.username = tokenPayload.fullname;
        console.warn(this.username); 
        // Assuming your token payload has a 'username' field
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }
  logout() {
    // Clear the token from local storage and navigate to the sign-in page
    localStorage.removeItem('access_token');
    this.router.navigate(['/signin']);
  }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      bname: ['', [Validators.required]],
      bcategory: ['', [Validators.required]],
      btype: ['', [Validators.required]],
      pnumber: ['', [Validators.required]],
      website: ['', [Validators.required]],
      saddress: ['', [Validators.required]],
      saddress2: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      boxnumber: ['', [Validators.required]],
            
    });
  }
  onSubmit() {
    // Your form submission logic here
  }
  /*personal inf
/* close button*/
closebtn = true;
currentStep = 1;
nextStep() {
  if (this.currentStep < 3) {
    this.currentStep++;
  }
}
previousStep() {
  if (this.currentStep > 1) {
    this.currentStep--;
  }
}
onFormSubmit() {
  // Handle the form submission here
  console.log('Form submitted successfully!');
}

/* */


}
