import { Component , OnInit  } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  /*form disable buton*/
  formGroup!: FormGroup; 
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
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

  /*fullname*/
  fullname: string = '';
  isfullnameValid: boolean = true;
  isfullnameFormatValid: boolean = true;
  fullnameValidation() {
    this.isfullnameValid = true;
    this.isfullnameFormatValid = true;
  }
  validatefullname() {
    if (!this.fullname) {
      this.isfullnameValid = false;
    } else {
      this.isfullnameValid = this.isfullnameFormatValid;
    }
  }


  /*username*/
  input: string = '';
  isinputValid: boolean = true;
  isinputFormatValid: boolean = true;
  
  inputValidation() {
    this.isinputValid = true;
    this.isinputFormatValid = true;
  }

  validateinput() {
    if (!this.input) {
      this.isinputValid = false;
    } else {
     
      this.isinputValid = this.isinputFormatValid;
    }
  }


  /*password*/
  password: string = '';
  confirmPassword: string = '';
  isPasswordValid: boolean = true;
  isPasswordConfirmed: boolean = true;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
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
    this.isPasswordValid = this.password.length >= 8 && this.containsUppercase() && this.containsLowercase() && this.containsSymbol();
    this.isPasswordConfirmed = this.password === this.confirmPassword;
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
  containsNumber(): boolean {
    return /[1234567890]/.test(this.password);
  }
  pass: string = '';
  ispassValid: boolean = true;
  ispassFormatValid: boolean = true;
  
  passValidation() {
    this.ispassValid = true;
    this.ispassFormatValid = true;
  }

  



  
}
