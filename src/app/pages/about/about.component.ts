import { Component } from '@angular/core';
import { Card2Component } from '../../components/cards/card2/card2.component';
import { SubHeroBannerComponent } from '../../components/banners/sub-hero-banner/sub-hero-banner.component';
import { SectionComponent } from '../../section/section.component';
import { cms_defs } from '../../defs';
import { cms_types } from '../../types';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    SectionComponent,
    Card2Component,
    SubHeroBannerComponent,
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent {    
  public page: cms_types.frontend.PageObject = cms_defs.defaultPageConfig;

  constructor (private pageService: PagesService) { }

  ngOnInit(): void {
    this.pageService.getPage<cms_types.api.PageResponse>("about").subscribe(page => this.page = page as cms_types.frontend.PageObject);
  }
}
