import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { API_BASE_URL } from 'src/constant/environment';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-signup-confirmation',
  templateUrl: './signup-confirmation.component.html',
  styleUrls: ['./signup-confirmation.component.css']
})

export class SignupConfirmationComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) {}


ngOnInit(): void{
  const token = this.route.snapshot.params['token'];
  const email = this.route.snapshot.params['email'];
  this.http.get<any>(API_BASE_URL+`/api/auth/verifying/eazio-user/useremail=${email}&token=:${token}`).subscribe(
    ()=> {
     console.log('mbnnknkn');
    this.router.navigate(['/signin']);
    },
    (error)=>{

    }
    
  )
}
}
