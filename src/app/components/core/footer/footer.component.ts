import { Component } from '@angular/core';
import { cms_types } from '../../../types';
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { cms_defs } from '../../../defs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public pages: cms_types.frontend.PageObject[] = [];
  public config: cms_types.api.ConfigResponse = cms_defs.objects.defaultConfig;

  public constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPages().subscribe(pages => this.pages = pages as cms_types.frontend.PageObject[]);
    this.dataService.getData<cms_types.api.ConfigResponse>('config').subscribe(config => this.config = config as cms_types.api.ConfigResponse);
  }}
