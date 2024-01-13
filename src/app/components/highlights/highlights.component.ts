import { Component, Input } from '@angular/core';
import { TextSimpleComponent } from '../text-simple/text-simple.component';
import { CommonModule } from '@angular/common';
import { cms_types } from '../../types';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [
    CommonModule,
    TextSimpleComponent
  ],
  templateUrl: './highlights.component.html'
})
export class HighlightsComponent {
  @Input() public config: cms_types.frontend.ComponentObject = {
    header: '',
    category: '',
    paragraphs: []
  };
}
