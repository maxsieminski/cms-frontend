import { Component, Input } from '@angular/core';
import { cms_types } from '../../types';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Input() public config: cms_types.frontend.ComponentObject = {
    header: 'header',
    category: 'card',
    paragraphs: []
  }

  public constructor(public dataService: DataService, private router: Router) { }

  public sendRequest() {
    const email = (document.getElementById('message-email') as HTMLInputElement).value;
    const name = (document.getElementById('message-name') as HTMLInputElement).value;
    const category = (document.getElementById('message-subject') as HTMLInputElement).value;
    const content = (document.getElementById('message-message') as HTMLInputElement).value;

    const entity = {email, name, category, content};

    this.dataService.createData<any>('inquries', entity).subscribe(inqury => console.log(inqury));

    alert("Request sent!");

    this.router.navigate(["home"]);
  }
}
