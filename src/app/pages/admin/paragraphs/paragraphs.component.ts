import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AdminCardComponent } from '../../../components/admin/card/card.component';
import { cms_types } from '../../../types';
import { cms_defs } from '../../../defs';
import { DataService } from '../../../services/admin/data.service';

@Component({
  selector: 'app-paragraphs',
  standalone: true,
  imports: [
    CommonModule,
    AdminCardComponent
  ],
  templateUrl: './paragraphs.component.html',
  styleUrl: './paragraphs.component.css'
})
export class AdminParagraphsComponent {
  public paragraphs: cms_types.api.ParagraphResponse[] = [cms_defs.defaultParagraphResponse];
  public defaultCreateNewCardConfig = cms_defs.defaultCreateNewCardConfig;

  public constructor(public dataService: DataService, private _route: ActivatedRoute) { }

  public getCardConfig(paragraph: cms_types.api.ParagraphResponse): cms_types.frontend.admin.CardConfig {
    return { 
      header: paragraph.header ?? "error",
      description: "",
      editable: true,
      link1: ``,
      link2: `${paragraph.id}/edit`,
      link1_text: '',
      link2_text: "Edit",
      color: 'green'
    }
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const componentId = Number.parseInt(params['componentId']);
      this.dataService.getParagraphs(componentId).subscribe(paragraphs => this.paragraphs = Array.isArray(paragraphs) ? paragraphs : [paragraphs]);
    });
  }
}
