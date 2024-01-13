import { Component } from '@angular/core';
import { SubHeroBannerComponent } from '../../components/banners/sub-hero-banner/sub-hero-banner.component';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [
    SubHeroBannerComponent
  ],
  templateUrl: './industries.component.html'
})
export class IndustriesComponent {

}
