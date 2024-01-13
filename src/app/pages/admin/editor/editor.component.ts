import { Component } from '@angular/core';
import { cms_types } from '../../../types';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../../../services/admin/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { cms_defs } from '../../../defs';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class AdminEditorComponent {
  private entity: cms_types.frontend.ModelCommonObject | undefined;
  private entityType: string = "none";
  
  public componentCategories: cms_types.api.ComponentCategoryResponse[] = [];
  public isCreateEntity: boolean = false;
  public selectedCategory: cms_types.api.ComponentCategoryResponse = {
    id: 1,
    category_name: 'default',
  }

  public constructor(public dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  public getEntityKeys() {
    if (this.entity) {
      const { id, pageId, sectionId, component_id, ...entityWithoutId } = this.entity as any;
      return Object.keys(entityWithoutId);
    }
    return [];
  }

  public getEntityValue(key: string) {
    if (this.entity) {
      return this.entity[key as keyof cms_types.frontend.ModelCommonObject];
    }
    return '';
  }

  private sanitizeEntity() {
    const newEntity = Object.keys(this.entity!)
    .map(key => {
      try {
        return {
          [key]: (document.getElementById(`input-${key}`) as HTMLInputElement).value
        }
      } catch (err) {
        return;
      }
    })
    .reduce((acc, curr) => {
      if (curr && acc) {
        const key = Object.keys(curr)[0];
        if (key.toLowerCase().includes('id') || curr[key] === '' || (curr[key] == (this.entity as any)[key])) {
          return acc;
        }
        acc[key] = curr[key];  
      }
      return acc;
    }, {});

    const categoryId = (document.getElementById("select-category") as HTMLSelectElement);

    return categoryId ? { ...newEntity, category: categoryId.value } : newEntity;
  }

  public saveEntity() {
    if (this.entity) {
      const newEntity = this.sanitizeEntity();
      this.dataService.patchData<any>(`${this.entityType}`, (this.entity as any)['id'], newEntity).subscribe(res => this.router.navigate(['admin']));
    }
  }

  public createEntity() {
    const newEntity = this.sanitizeEntity();
    this.dataService.createData<any>(this.entityType, { ...this.entity, ...newEntity }).subscribe(res => this.router.navigate(['admin']));
  }

  public deleteEntity() {
    if (this.entity) {
      this.dataService.deleteData<any>(this.entityType, (this.entity as any)['id']).subscribe(res => this.router.navigate(['admin']));
    }
  }

  private createInitialEntity(params: Params) {
    this.isCreateEntity = true;
    
    const href = location.href;

    if (href.includes('paragraphs')) {
      this.entityType = "paragraphs";
      const componentId = Number.parseInt(params['componentId']);
      this.entity = { component_id: componentId, ...cms_defs.objects.defaultParagraph };
    }
    else if (href.includes('components')) {
      this.entityType = "components";
      const sectionId = Number.parseInt(params['sectionId']);
      this.entity = { sectionId: sectionId, ...cms_defs.objects.defaultComponent };
    }
    else if (href.includes('sections')) {
      this.entityType = "sections";
      const pageId = Number.parseInt(params['pageId']);
      this.entity = { pageId: pageId, ...cms_defs.objects.defaultSection };
    }
    else if (href.includes('pages')) {
      this.entityType = "pages";
      this.entity = cms_defs.objects.defaultPage;
    }
  }

  private getSelectedEntity(params: Params) {
    if ('paragraphId' in params) {
      this.entityType = "paragraphs";
      const paragraphId = Number.parseInt(params['paragraphId']);
      this.dataService.getParagraph(paragraphId).subscribe(paragraph => this.entity = paragraph as cms_types.frontend.ParagraphObject);
    }
    else if ('componentId' in params) {
      this.entityType = "components";
      const componentId = Number.parseInt(params['componentId']);
      
      this.dataService.getComponent(componentId).subscribe(component => {
        this.entity = component as cms_types.frontend.ComponentObject;
        
        this.componentCategories.map(category => {
          if (category.category_name === (this.entity as cms_types.frontend.ComponentObject).category) {
            this.selectedCategory = category;
          }
        });
      });
    }
    else if ('sectionId' in params) {
      this.entityType = "sections";
      const sectionId = Number.parseInt(params['sectionId']);
      this.dataService.getSection(sectionId).subscribe(section => this.entity = section as cms_types.frontend.SectionObject);
    }
    else if ('pageId' in params) {
      this.entityType = "pages";
      const pageId = Number.parseInt(params['pageId']);
      this.dataService.getPage(pageId).subscribe(page => this.entity = page as cms_types.frontend.PageObject);
    }
    else if ('inquryId' in params) {
      this.entityType = "inquries";
      const inquryId = Number.parseInt(params['inquryId']);
      this.dataService.getData<cms_types.api.InuqryResponse>('inquries', inquryId).subscribe(inqury => this.entity = inqury as cms_types.api.InuqryResponse);
    }
  }

  ngOnInit() {
    this.dataService.getComponentsCategories().subscribe(categories => this.componentCategories = categories as cms_types.api.ComponentCategoryResponse[]);
    this.route.params.subscribe(params => {
      location.href.includes('new') ? this.createInitialEntity(params) : this.getSelectedEntity(params);
    });
  }
}
