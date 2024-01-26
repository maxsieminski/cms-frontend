import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { cms_types } from '../../../types';
import { CommonModule } from '@angular/common';
import { cms_defs } from '../../../defs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  public pages: cms_types.frontend.PageObject[] = [];
  public header = cms_defs.title;
  public constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPages().subscribe(pages => this.pages = pages as cms_types.frontend.PageObject[]);
  }
}
