import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextSimpleComponent } from '../../text-simple/text-simple.component';
import { cms_types } from '../../../types';

@Component({
  selector: 'app-card2',
  standalone: true,
  imports: [
    CommonModule,
    TextSimpleComponent
  ],
  templateUrl: './card2.component.html'
})
export class Card2Component {
  @Input() public config: cms_types.frontend.ComponentObject = {
    header: 'header',
    category: 'card',
    paragraphs: []
    // cards: [
    //   {
    //     title: 'title',
    //     header: 'header',
    //     text: 'description',
    //     image: 'image'
    //   }
    // ]
  }
}
