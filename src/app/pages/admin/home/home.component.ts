import { Component } from '@angular/core';
import { AdminCardComponent } from '../../../components/admin/card/card.component';
import { cms_types } from '../../../types';
import { cms_defs } from '../../../defs';
import { DataService } from '../../../services/admin/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AdminCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class AdminHomeComponent {
  public pages: cms_types.api.PageResponse[] = [cms_defs.defaultPageResponse];
  public inquries: cms_types.api.InuqryResponse[] = [cms_defs.defaultInquiryResponse];

  public constructor(public dataService: DataService) { }

  public getPagesCardConfig(): cms_types.frontend.admin.CardConfig {
    return {
      header: 'Pages',
      description: `${this.pages.length} total`,
      editable: false,
      link1: 'pages',
      link2: '',
      link1_text: "View Sections",
      link2_text: '',
      color: 'green',
    }
  }

  public getInquiriesCardConfig(): cms_types.frontend.admin.CardConfig {
    return {
      header: 'Inquiries',
      description: `${this.inquries.length} total`,
      editable: false,
      link1: 'inquries',
      link2: '',
      link1_text: "View Inquiries",
      link2_text: '',
      color: 'blue',
    }
  }

  ngOnInit() {
    this.dataService.getData<cms_types.api.PageResponse>('pages').subscribe(pages => this.pages = (Array.isArray(pages) ? pages : [pages]));
    this.dataService.getData<cms_types.api.InuqryResponse>('inquries').subscribe(inquries => this.inquries = (Array.isArray(inquries) ? inquries : [inquries]));
  }
}
