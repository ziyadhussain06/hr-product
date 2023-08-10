import { Component , Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  /*header toggle button */
  constructor(private router: Router) { }
  hamburgerOpen = false;
  ngOnInit(): void {
  }
  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  /*header signup and signin*/
  isSignUpPage(): boolean {
    return this.router.url === '/signup';
  }
  
}
