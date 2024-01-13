import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cms_types } from '../types';
import { ComponentComponent } from '../components/component.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [
    CommonModule,
    ComponentComponent
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  @Input() config: cms_types.frontend.SectionObject[] = [];
  
  public _getRowClass(componentName: string): string {
    const classTag = "cms-row";    
    return componentName === 'card1' ? `${classTag} row flex-just-center` : `${classTag} row`;
  }
}
