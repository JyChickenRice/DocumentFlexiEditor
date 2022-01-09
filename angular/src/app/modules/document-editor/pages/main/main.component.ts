import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data: object[];
  public pageSettings: PageSettingsModel;

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        TemplateId: 'TON123',
        TemplateName: 'My first draft'
      },
      {
        TemplateId: 'INV241',
        TemplateName: 'My trading journal'
      }
    ];
    this.pageSettings = { pageSize: 2 };
  }

}
