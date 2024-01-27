import { Component } from '@angular/core';
import { SectionComponent } from '../../section/section.component';
import { SubHeroBannerComponent } from '../../components/banners/sub-hero-banner/sub-hero-banner.component';
import { cms_types } from '../../types';
import { cms_defs } from '../../defs';
import { PagesService } from '../../services/pages.service';

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
  public page: cms_types.frontend.PageObject = cms_defs.defaultPageConfig;

  constructor (private pageService: PagesService) { }

  ngOnInit(): void {
    this.pageService.getPage<cms_types.api.PageResponse>("blog").subscribe(page => this.page = page as cms_types.frontend.PageObject);
  }
}
