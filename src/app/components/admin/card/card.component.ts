import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { cms_types } from '../../../types';
import { cms_defs } from '../../../defs';

@Component({
  selector: 'app-admin-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class AdminCardComponent {
  @Input() config: cms_types.frontend.admin.CardConfig = cms_defs.defaultAdminCardConfig;

  public circleClasses = {
    "red": "p-2 bg-red-200 rounded-full",
    "green": "p-2 bg-green-200 rounded-full",
    "blue": "p-2 bg-blue-200 rounded-full",
    "yellow": "p-2 bg-yellow-200 rounded-full",
    "orange": "p-2 bg-orange-200 rounded-full",
    "purple": "p-2 bg-purple-200 rounded-full"
  };

  public buttonClasses = {
    "red": "w-full text-red-600 bg-red-100 hover:bg-red-200 text-sm py-2 px-4 rounded-md",
    "green": "w-full text-green-600 bg-green-100 hover:bg-green-200 text-sm py-2 px-4 rounded-md",
    "blue": "w-full text-blue-600 bg-blue-100 hover:bg-blue-200 text-sm py-2 px-4 rounded-md",
    "yellow": "w-full text-yellow-600 bg-yellow-100 hover:bg-yellow-200 text-sm py-2 px-4 rounded-md",
    "orange": "w-full text-orange-600 bg-orange-100 hover:bg-orange-200 text-sm py-2 px-4 rounded-md",
    "purple": "w-full text-purple-600 bg-purple-100 hover:bg-purple-200 text-sm py-2 px-4 rounded-md",
  }

  ngOnInit() {
    this.config.color = this.config.color ?? 'purple';
  }
}
