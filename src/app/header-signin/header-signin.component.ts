import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from './email.service';
@Component({
  selector: 'app-header-signin',
  templateUrl: './header-signin.component.html',
  styleUrls: ['./header-signin.component.css']
})

export class HeaderSigninComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private emailService: EmailService
  ) {
    this.registrationForm = this.formBuilder.group({
      fullname: ['', [Validators.required] ],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
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
            // Registration successful, handle response if needed
            console.log('Registration successful:', response);
          },
          (error) => {
            // Registration failed, handle error if needed
            console.error('Registration failed:', error);
          }
        );
    }
  }

  /*check email*/
  enteredEmail = '';
  // Method to check if the entered email exists in the records
 
  checkEmail() {
    this.emailService.checkEmailExists(this.enteredEmail).subscribe(
      (emailExists) => {
        if (emailExists) {
          console.log('Email already exists in records. Show error message.');
        } else {
          console.log('Email does not exist in records. Show success message.');
        }
      },
      (error) => {
        console.error('Error occurred while checking email:', error);
      }
    );
  }

  
}
