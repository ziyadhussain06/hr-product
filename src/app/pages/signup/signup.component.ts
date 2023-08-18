import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_BASE_URL } from '../../../constant/environment';
import { Router } from '@angular/router';
function alphabeticValidator(control: FormControl): ValidationErrors | null {
  const value: string = control.value;
  // Check if the value contains non-alphabetic characters
  const pattern = /^[a-zA-Z]*$/;
  const valid = pattern.test(value);
  return valid ? null : { nonAlphabetic: true };
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;
  emailAvailabilityHint: string = '';
  userAvailabilityHint: string = '';
  registrationResponse: string = '';
  loading: boolean = false;
  registrationSuccess = false;
  registrationError = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registrationForm = this.formBuilder.group({
      fullname: ['', [Validators.required ]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });

  }

  ngOnInit(): void { }

  onSubmit(): void {

    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      // Make an HTTP POST request to the Postname local API endpoint
      this.http.post(API_BASE_URL + 'api/user/register', formData)
        .subscribe(
          (response) => {
            this.registrationSuccess = true;
            this.registrationError = false;
            this.registrationResponse = 'Registration successful!';
            this.registrationForm.reset();
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
          },
          (error) => {
            this.registrationResponse = 'Registration failed. Please try again later.';
            this.registrationSuccess = false;
            this.registrationError = true;
            this.registrationForm.reset();
          }
        );
    }


  }
  /*email*/
  email: string = '';
  isEmailValid: boolean = true;
  isEmailFormatValid: boolean = true;
  alreadyEmail: boolean = false;
  buttonDisabled: boolean = false;
  resetValidation() {
    this.isEmailValid = true;
    this.isEmailFormatValid = true;
    this.alreadyEmail = true;
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
  alreadyExistEmail() {
    const formData = this.registrationForm.value;
    this.http.post(API_BASE_URL + 'api/user/email-exist', { email: formData.email })
      .subscribe(
        (response) => {
          if (response != null) {
            this.emailAvailabilityHint = 'This email is already exist', response;
            this.registrationForm.get('email'); // Disable the email form control
            this.buttonDisabled = true;
          } else {
            this.emailAvailabilityHint = '';
            this.registrationForm.get('email')?.enable(); // Enable the email form control
            this.buttonDisabled = false;
          }
        }
      );

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
    this.isfullnameValid =this.containsAlphabet() && this.fullname.length >= 4;
  }
  containsAlphabet(): boolean {
    return /^[a-z A-Z]*$/.test(this.fullname);
  }


  /*username*/
  usernam: string = '';
  isusernamValid: boolean = true;
  userfielddisabled: boolean = false;
  isusernamFormatValid = true;
  usernamValidation() {
    this.isusernamValid = true;
    this.isusernamFormatValid = true;
  }
  validateusernam() {
    
    if (!this.usernam) {
      this.isusernamValid = false;
    } else {
      this.isusernamValid = this.isusernamFormatValid;
    }
    const formData = this.registrationForm.value;
    this.http.post(API_BASE_URL + 'api/user/unique-username', { username: formData.username })
      .subscribe(
        (response) => {
          if (response != null) {
            this.userAvailabilityHint = 'This user is already exist', response;
            this.registrationForm.get('username'); // Disable the email form control
            this.userfielddisabled = true;
           } else {
            this.userAvailabilityHint = '';
            this.registrationForm.get('username')?.enable(); // Enable the email form control
            this.userfielddisabled = false;
          }
          
            
        }
      );
      this.isusernamValid = this.usernam.length >= 8 && this.containsUpper() && this.containsLower() && this.containsSymbols() && this.containsNumber() && this.containsspace();
      if(this.isusernamValid = this.usernam.length >= 8 && this.containsUpper() && this.containsLower() && this.containsSymbols() && this.containsNumber() && this.containsspace()){
        this.registrationForm.get('isusernamValid')?.enable(); // Disable the email form control
        this.userfielddisabled =false;

      }
      else{
        this.registrationForm.get('isusernamValid'); // Disable the email form control
        this.userfielddisabled = true;
      }
  }
  containsUpper(): boolean {
    return /[A-Z]/.test(this.usernam);
  }
  containsLower(): boolean {
    return /[a-z]/.test(this.usernam);
  }
  containsSymbols(): boolean {
    return /[@$!%*?&#_-]/.test(this.usernam);
  }
  containsNumber(): boolean {
    return /[0-9]/.test(this.usernam);
  }
  containsspace(): boolean {
    return /^[a-zA-Z0-9_@$!%*?&#-]*$/.test(this.usernam);
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
      this.registrationForm.get('isPasswordConfirmed')?.enable(); // Disable the email form control
      this.confirmpassdisabled = false;
    }
    else{
      this.registrationForm.get('isPasswordConfirmed'); // Disable the email form control
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
