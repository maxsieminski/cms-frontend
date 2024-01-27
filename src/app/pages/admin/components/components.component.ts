import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../../../components/admin/adminHeader/header.component';
import { DataService } from '../../../services/data.service';
import { cms_types } from '../../../types';
import { cms_defs } from '../../../defs';
import { CommonModule } from '@angular/common';
import { AdminCardComponent } from '../../../components/admin/card/card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-components',
  standalone: true,
  imports: [
    CommonModule,
    AdminCardComponent,
    AdminHeaderComponent,
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class AdminComponentsComponent {
  public components: cms_types.api.ComponentResponse[] = [cms_defs.defaultComponentResponse];
  public componentsConfigs: cms_types.frontend.admin.CardConfig[] = [];
  public defaultCreateNewCardConfig = cms_defs.defaultCreateNewCardConfig;

  public constructor(public dataService: DataService, private _route: ActivatedRoute) { }

  public getCardConfig(section: cms_types.api.ComponentResponse, componentCount: number): cms_types.frontend.admin.CardConfig {
    return { 
      header: `Component ${componentCount}`,
      description: `${section.header.slice(0, 20)}...`,
      editable: true,
      link1: `${section.id}/paragraphs`,
      link2: `${section.id}/edit`,
      link1_text: 'View paragraphs',
      link2_text: "Edit",
      color: 'green'
    }
  }

  precomputeConfigs() {
    this.componentsConfigs = this.components.map((component, index) => 
      this.getCardConfig(component, index + 1));
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const sectionId = Number.parseInt(params['sectionId']);
      this.dataService.getComponents(sectionId).subscribe(components => {
        this.components = Array.isArray(components) ? components : [components];
        this.precomputeConfigs();
      });
    });
  }
}
