import { Component, Input } from '@angular/core';
import { cms_types } from '../../../types';
import { CommonModule } from '@angular/common';
import { AdminCardComponent } from '../../../components/admin/card/card.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-inquries',
  standalone: true,
  imports: [
    CommonModule,
    AdminCardComponent
  ],
  templateUrl: './inquries.component.html',
  styleUrl: './inquries.component.css'
})
export class InquriesComponent {
  public inquiries: cms_types.api.InuqryResponse[] = [];

  public constructor(private dataService: DataService) { };

  public getInquiryCardConfig(inqury: cms_types.api.InuqryResponse): cms_types.frontend.admin.CardConfig {
    return {
      header: inqury.email,
      description: `${inqury.name}`,
      editable: false,
      link1: `${inqury.id}`,
      link2: '',
      link1_text: "View Inquiry",
      link2_text: '',
      color: 'blue',
    }
  }

  ngOnInit() {
    this.dataService.getData<cms_types.api.InuqryResponse[]>('inquries').subscribe(inquries => this.inquiries = inquries);
  }
}
