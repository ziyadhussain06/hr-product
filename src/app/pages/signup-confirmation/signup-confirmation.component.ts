import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { AuthService } from 'src/app/service/auth-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup-confirmation',
  templateUrl: './signup-confirmation.component.html',
  styleUrls: ['./signup-confirmation.component.css']
})

export class SignupConfirmationComponent{
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,

    ) {}


ngOnInit(): void{

 
  const token = this.route.snapshot.params['token'];
  const email = this.route.snapshot.params['email'];
  this.authService.getSignupConfirmationApi(email, token).subscribe(
    (response)=> {
      console.warn(response);
     this.router.navigate(['/signin']);
    },
    (error)=>{
      console.log(error);
    }
  )
}
// constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

// ngOnInit() {
//   const token = this.route.snapshot.paramMap.get('token '); // Get the token from the URL parameter
//   if (token) {
//     this.verifyToken(token);
//   }
// }

// verifyToken(token: string) {
//   this.http.post('http//192.168.100.4:3000/api/auth/verifying/eazio-user/useremail=:email&token=:token', {token }).subscribe((response: any) => {
//     console.log(response);
//     this.router.navigate(['/signin']); // Redirect to the sign-in page after successful verification
//   });
// }
}
