import { Component } from '@angular/core';
import { cms_types } from '../../../types';
import { cms_defs } from '../../../defs';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AdminCardComponent } from '../../../components/admin/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-sections',
  standalone: true,
  imports: [
    CommonModule,
    AdminCardComponent
  ],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class AdminSectionsComponent {
  public sections: cms_types.api.SectionResponse[] = [cms_defs.defaultSectionResponse];
  public defaultCreateNewCardConfig = cms_defs.defaultCreateNewCardConfig;

  public constructor(public dataService: DataService, private _route: ActivatedRoute) { }

  public getCardConfig(section: cms_types.api.SectionResponse): cms_types.frontend.admin.CardConfig {
    return { 
      header: section.header ?? "error",
      description: "",
      editable: true,
      link1: `${section.id}/components`,
      link2: `${section.id}/edit`,
      link1_text: 'View components',
      link2_text: "Edit",
      color: 'green'
    }
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const pageId = Number.parseInt(params['pageId']);
      this.dataService.getSections(pageId).subscribe(sections => this.sections = sections);
    });
  }
}
