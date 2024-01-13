import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-simple',
  standalone: true,
  imports: [],
  templateUrl: './text-simple.component.html'
})
export class TextSimpleComponent {
  @Input() public text: string = '';
}
