import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cms_types } from '../../../types';

@Component({
  selector: 'app-article-navigated',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './article-navigated.component.html'
})
export class ArticleNavigatedComponent {
  @Input() public config: cms_types.frontend.ComponentObject = {
    header: '',
    category: '',
    paragraphs: [],
  }
 
  public _buildParagraphId(paragraph: cms_types.frontend.ParagraphObject): string {
    if (paragraph.header) {
      return paragraph.header.replace(/\s/g, '-').toLowerCase();
    }
    return "";
  }
}
