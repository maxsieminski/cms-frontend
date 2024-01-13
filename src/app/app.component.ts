import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/core/navbar/navbar.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { AdminHeaderComponent } from './components/admin/adminHeader/header.component';
import { CommonModule } from '@angular/common';

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
export class AppComponent implements OnInit {
  public isAdmin: boolean = false;

  ngOnInit() {
    this.isAdmin = window.location.href.includes("admin");
  }
}
