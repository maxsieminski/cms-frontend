import { AfterContentInit, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { AdminHeaderComponent } from './components/admin/adminHeader/header.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    AdminHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public isAdmin: boolean = false;
  public isGuest: boolean = true;

  constructor(private authService: AuthService, private ngZone: NgZone, private router: Router) {
    this.listenToRouterEvents()
  }

  listenToRouterEvents() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateUserRoles();
    });
  }

  updateUserRoles(): void {
    if (this.router.url.includes("login")) {
      this.isAdmin = this.isGuest = false;
    }
    else if (this.router.url.includes("admin")) {
      this.isAdmin = true;
      this.isGuest = false;
    }
    else {
      this.isAdmin = false;
      this.isGuest = true;
    }
  }
}
