import { Component } from '@angular/core';
import { cms_types } from '../../../types';
import { AdminCardComponent } from '../../../components/admin/card/card.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { cms_defs } from '../../../defs';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    CommonModule,
    AdminCardComponent
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class AdminPagesComponent {
  public pages: cms_types.api.PageResponse[] = [cms_defs.defaultPageResponse];
  public defaultCreateNewCardConfig = cms_defs.defaultCreateNewCardConfig;
  public createNewPageConfig = {
    title: "",
    path: "",
  }

  public constructor(public dataService: DataService) { }

  public getCardConfig(page: cms_types.api.PageResponse): cms_types.frontend.admin.CardConfig {
    return {
      header: page.title ?? "error",
      description: page.path ?? "",
      editable: true,
      link1: `${page.id}/sections`,
      link2: `${page.id}/edit`, 
      link1_text: 'View sections',
      link2_text: "Edit"
    }
  }

  ngOnInit() {
    this.dataService.getPages().subscribe(pages => this.pages = pages);
  }
}
