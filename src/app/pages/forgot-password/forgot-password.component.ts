import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  /*form disable buton*/
  formGroup!: FormGroup; 
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
     
    });
  }
  onSubmit() {
    // Your form submission logic here
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
