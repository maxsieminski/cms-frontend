import { Component } from '@angular/core';
import { cms_types } from '../../../types';
import { DataService } from '../../../services/data.service';
import { cms_defs } from '../../../defs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './sub-hero-banner.component.html'
})
export class SubHeroBannerComponent {
  public config: cms_types.api.ConfigResponse = cms_defs.objects.defaultConfig;
  public currentPath: string = "";

  public constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.currentPath = (this.router.url.substring(1).charAt(0).toLocaleUpperCase()) + this.router.url.substring(2);
    this.dataService.getData<cms_types.api.ConfigResponse>('config').subscribe(config => this.config = config as cms_types.api.ConfigResponse);
  }

}
