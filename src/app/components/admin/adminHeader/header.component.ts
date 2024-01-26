import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class AdminHeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public logout() {
    this.authService.clearToken();
    this.router.navigate(["/home"]);
  }
}
