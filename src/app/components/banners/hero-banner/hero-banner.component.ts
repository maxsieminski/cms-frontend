import { Component } from '@angular/core';
import { cms_types } from '../../../types';
import { cms_defs } from '../../../defs';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.component.html'
})
export class HeroBannerComponent {
  public config: cms_types.api.ConfigResponse = cms_defs.objects.defaultConfig;

  public constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData<cms_types.api.ConfigResponse>('config').subscribe(config => this.config = config as cms_types.api.ConfigResponse);
  }
}
