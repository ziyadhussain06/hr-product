import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  checkEmailExists(email: string) {
    return this.http.get<boolean>(`http://192.168.100.4/api/user/email-exist/${email}`);
  }
}