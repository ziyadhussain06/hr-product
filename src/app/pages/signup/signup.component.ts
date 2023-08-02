import { Component , OnInit  } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  registrationForm: FormGroup;
  emailAvailabilityHint: string = '';
  userAvailabilityHint: string = '';
  registrationResponse: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.registrationForm = this.formBuilder.group({
      fullname: ['', [Validators.required] ],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required] ]
    });
    
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      // Make an HTTP POST request to the Postname local API endpoint
      this.http.post('http://192.168.100.4:3000/api/user/register', formData)
        .subscribe(
          (response) => {
            this.registrationResponse = 'Registration successful!';
            this.registrationForm.reset();
          },
          (error) => {
            this.registrationResponse = 'Registration failed. Please try again later.';
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
  alreadyExistEmail(){
    const formData = this.registrationForm.value;
    this.http.post('http://192.168.100.4:3000/api/user/email-exist', { email: formData.email })
        .subscribe(
          (response) => {
            if(response != null){
              this.emailAvailabilityHint = 'This email is already exist',response;
              this.registrationForm.get('email'); // Disable the email form control
              this.buttonDisabled = true;
            }else{
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
  }


  /*username*/
  usernam: string = '';
  isusernamValid: boolean = true;
  alreadyuser: boolean= true;
  userfielddisabled: boolean = false; 
  isusernamFormatValid = true;
  usernamValidation() {
    this.isusernamValid = true;
    this.alreadyuser = true;
  }
  validateusernam(){
    if (!this.usernam) {
      this.isusernamValid = false;
    } else {
      this.isusernamValid = this.isusernamFormatValid;
    }
    const formData = this.registrationForm.value;
      this.http.post('http://192.168.100.4:3000/api/user/unique-username', { username: formData.username })
          .subscribe(
            (response) => {
              if(response != null){
                this.userAvailabilityHint = 'This user is already exist',response;
                this.registrationForm.get('username'); // Disable the email form control
                this.userfielddisabled = true;
              }else{
                this.userAvailabilityHint = '';
                this.registrationForm.get('username')?.enable(); // Enable the email form control
                this.userfielddisabled = false;
              }
            }
          );
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
    this.isPasswordValid = this.password.length >= 8 && this.containsUppercase() && this.containsLowercase() && this.containsSymbol() && this.containsNumbers();
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
  containsNumbers(): boolean {
    return /[0-9]/.test(this.password);
  }
  pass: string = '';
  ispassValid: boolean = true;
  ispassFormatValid: boolean = true;
  
  passValidation() {
    this.ispassValid = true;
    this.ispassFormatValid = true;
  }

  
  


  
}
