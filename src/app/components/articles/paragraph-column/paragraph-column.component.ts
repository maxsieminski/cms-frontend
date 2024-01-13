import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cms_types } from '../../../types';

@Component({
  selector: 'app-paragraph-column',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './paragraph-column.component.html'
})
export class ParagraphColumnComponent {
  @Input() public config: cms_types.frontend.ComponentObject = {
    header: '',
    paragraphs: [],
    image: '',
    category: ''
  };
}
