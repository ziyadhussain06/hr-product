import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component ,OnInit,OnDestroy, ViewChild} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { API_BASE_URL } from 'src/constant/environment';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit, OnDestroy {
  minutes: number = 0;
  seconds: number = 59;
  isTimerRunning: boolean = true; // Initially set to true to start the timer automatically
  private intervalId: any;
  loading: boolean = false;
  otp: number | undefined;
  error_msg: string="";
  otpstatus: string = '';
  showResponse: boolean = false;
ngOnDestroy() {
    this.stopTimer();
  }
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes > 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.stopTimer();
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.intervalId);
    this.isTimerRunning = false;
  }
  /*form disable buton*/
  otp_form!: FormGroup; 
  constructor(private formBuilder: FormBuilder,private http: HttpClient,
    private router: Router, ) {}
  ngOnInit() {
    this.startTimer();
    this.otp_form = this.formBuilder.group({
       otpcontrol: ['', Validators.required],
    });
   
  }
  /*submit button*/
  onSubmit() {
    
    if (this.otp_form.valid) {
      const otp = this.otpCode.join('');
      //  const opt_values = this.otp_pin;
      // // Make API call to validate credentials
      const userEmail = sessionStorage.getItem('userEmail')
     
      this.http.post<any>(API_BASE_URL+'api/auth/verifying/eazio-user/verify-otp', {userEmail,otp})
      .subscribe(
        (response:any)=>{

           if (response.statusCode==200){
      
          this.otpstatus= (response.message);
          this.loading = true;
          
          setTimeout(() => {
            // Redirect to a success page using Angular Router
            this.router.navigate(['/resetpassword']);
            // Reload the current page after 3 seconds
            setTimeout(() => {
              this.loading = false; // Set the loading state to false
              window.location.reload();
            }, 3000);
          }, 2000);
           }
           else{
            if(response.statusCode==400){
              
              this.error_msg=(response.message)
             
              this.showResponse = true;
              // Hide the response after a few seconds
              setTimeout(() => {
                this.showResponse = false;
              }, 3000); // 3000 milliseconds = 3 seconds
            }
          }
        },
        (error: HttpErrorResponse) => {
          
        }
      )
    }
  }
  
  
  // validateCredentials(otp:number): void {
  // }
  /*only number show*/
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  }
  /*otp send in to data number show*/
  otpCode: string[] = ['', '', '', '', '', ''];

  onDigitChange(digit: string, index: number) {
    this.otpCode[index] = digit;
    if (digit && index < 5) {
      const nextInput = document.querySelector(`[name=digit${index + 1}]`) as HTMLInputElement;
      nextInput?.focus();
    }
  }
  isValid(): boolean {
    return this.otpCode.every(digit => digit.length === 1);
  }

  /*resend OTP*/
  resendotp() {
    if (!this.isTimerRunning) {
      this.minutes = 0;
      this.seconds = 59;
      this.isTimerRunning = true;
      this.startTimer();
    }
    const otp = this.otpCode.join('');
    const userEmail = sessionStorage.getItem('userEmail')
     this.http.post<any>(API_BASE_URL+'api/resend-otp', {userEmail,otp})
     .subscribe(
      (response:any)=>{
        
        
       
      }
     );
    
  }
  
  /*Alert warnig msg close button*/
  alertwarning = true;
  reloadPageAfterDelay() {
    setTimeout(() => {
      window.location.reload();
    }, 3000); // Adjust the delay time as needed
  }
  }
 

