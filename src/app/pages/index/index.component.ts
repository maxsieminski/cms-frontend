import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../components/banners/hero-banner/hero-banner.component';

import { SectionComponent } from '../../section/section.component';
import { cms_types } from '../../types';
import { cms_defs } from '../../defs';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    HeroBannerComponent,
    SectionComponent,
  ],
  templateUrl: './index.component.html'
})
export class IndexComponent {
  public page: cms_types.frontend.PageObject = cms_defs.defaultPageConfig;

  constructor (private pageService: PagesService) { }

  ngOnInit(): void {
    this.pageService.getPage<cms_types.api.PageResponse>("home").subscribe(page => this.page = page as cms_types.frontend.PageObject);
  }
}
