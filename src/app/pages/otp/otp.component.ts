import { Component ,OnInit,OnDestroy } from '@angular/core';

import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit, OnDestroy {
  minutes: number = 0;
  seconds: number = 10;
  isTimerRunning: boolean = true; // Initially set to true to start the timer automatically
  private intervalId: any;
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
  otp!: FormGroup; 
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.startTimer();
    this.otp = this.formBuilder.group({
      otpone: ['', Validators.required, ],
      otptwo: ['', Validators.required],
      otpthree: ['', Validators.required],
      otpfour: ['', Validators.required],
      otpfive: ['', Validators.required],
      otpsix: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.otp.valid) {
      const data = this.otp.value;
      // Make API call to validate credentials
      this.validateCredentials(data);
    }
  }
  validateCredentials(data:any): void {

  }
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  }

  onKeyPress(event: KeyboardEvent) {
    const allowedCharacters = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!allowedCharacters.test(inputChar)) {
      event.preventDefault();
    }
  }
}
