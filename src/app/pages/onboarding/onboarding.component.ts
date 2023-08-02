import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit{

  /*form disable buton*/
  formGroup!: FormGroup; 
  constructor(private formBuilder: FormBuilder) {}
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
