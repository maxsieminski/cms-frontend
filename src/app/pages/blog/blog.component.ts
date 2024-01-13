import { Component } from '@angular/core';
import { SectionComponent } from '../../section/section.component';
import { SubHeroBannerComponent } from '../../components/banners/sub-hero-banner/sub-hero-banner.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    SubHeroBannerComponent,
    SectionComponent,
  ],
  templateUrl: './blog.component.html'
})
export class BlogComponent {
  // public cardConfig: CardComponentConfig = {
  //   header: 'Blog',
  //   cards: [
  //     {
  //       title: 'Card 1',
  //       header: '2021-01-01',
  //       text: 'This is a description of the card.',
  //       href: 'blog',
  //       href_text: 'Read More',
  //       image: 'assets/art/hero1.webp'
  //     },
  //     {
  //       title: 'Card 2',
  //       header: '2021-01-01',
  //       text: 'This is a description of the card.',
  //       href: 'blog',
  //       href_text: 'Read More',
  //       image: 'assets/art/hero3.webp'
  //     },
  //     {
  //       title: 'Card 13',
  //       header: '2021-01-01',
  //       text: 'This is a description of the card.',
  //       href: 'blog',
  //       href_text: 'Read More',
  //       image: 'assets/art/hero2.webp'
  //     },
  //   ]
  // }

  // public config: SectionConfig = {
  //   title: 'Blog',
  //   components: [
  //     {
  //       name: 'card1',
  //       config: this.cardConfig
  //     }
  //   ]
  // }
}
