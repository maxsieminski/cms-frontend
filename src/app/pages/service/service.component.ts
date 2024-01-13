import { Component } from '@angular/core';
import { SubHeroBannerComponent } from '../../components/banners/sub-hero-banner/sub-hero-banner.component';
import { NavbarComponent } from '../../components/core/navbar/navbar.component';
import { SectionComponent } from '../../section/section.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    SubHeroBannerComponent,
    NavbarComponent,
    SectionComponent,
  ],
  templateUrl: './service.component.html'
})
export class ServiceComponent {

}
