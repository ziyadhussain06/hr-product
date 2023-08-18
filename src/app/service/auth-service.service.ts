


import { API_BASE_URL } from '../../constant/environment';
import { HttpClient } from '@angular/common/http'; 
import {  Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http: HttpClient,
   
    ) {}

    getSignupConfirmationApi(email: any,token: any){
      const URL = API_BASE_URL+`api/auth/verifying/eazio-user/useremail=${email}&token=${token}`;
      return this.http.get(URL);

    }

    IsloggedIn(){
      return!!localStorage.getItem('access_token');
    }
}

