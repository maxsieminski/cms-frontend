import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cms_types } from '../../../types';

@Component({
  selector: 'app-paragraph-column-large',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './paragraph-column-large.component.html'
})
export class ParagraphColumnLargeComponent {
  @Input() public config: cms_types.frontend.ComponentObject = {
    header: '',
    paragraphs: [],
    image: '',
    category: ''
  }
}
