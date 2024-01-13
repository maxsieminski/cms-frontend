import { Component } from '@angular/core';
import { cms_types } from '../../types';
import { cms_defs } from '../../defs';
import { PagesService } from '../../services/pages.service';
import { SectionComponent } from '../../section/section.component';
import { SubHeroBannerComponent } from '../../components/banners/sub-hero-banner/sub-hero-banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SubHeroBannerComponent,
    SectionComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public page: cms_types.frontend.PageObject = cms_defs.defaultPageConfig;

  constructor (private pageService: PagesService) { }

  ngOnInit(): void {
    this.pageService.getPage<cms_types.api.PageResponse>("contact").subscribe(page => this.page = page as cms_types.frontend.PageObject);
  }

}
