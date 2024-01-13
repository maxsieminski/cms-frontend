import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cms_types } from '../../../types';

@Component({
  selector: 'app-card1',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card1.component.html'
})
export class Card1Component {
  @Input() public config: cms_types.frontend.ComponentObject = {
    header: 'header',
    category: 'card',
    paragraphs: []
  }
}
