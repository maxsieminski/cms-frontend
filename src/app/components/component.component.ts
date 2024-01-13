import { Component, Input } from '@angular/core';
import { cms_types } from '../types';
import { CommonModule } from '@angular/common';
import cards from './cards/cards';
import { articles } from './articles/articles';
import { HighlightsComponent } from './highlights/highlights.component';
import { HeaderComponent } from './header/header.component';
import { TextSimpleComponent } from './text-simple/text-simple.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TextSimpleComponent,
    HighlightsComponent,
    ContactFormComponent,
    cards,
    articles
  ],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {
  @Input() config: cms_types.frontend.ComponentObject[] = [];

  ngOnInit() { }
}
