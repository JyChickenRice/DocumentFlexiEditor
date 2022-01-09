import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { ToolbarService, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { defaultDocument, WEB_API_ACTION } from 'src/app/modules/shared/data';
import { TitleBar } from 'src/app/modules/shared/title-bar';


@Component({
  selector: 'document-editor',
  templateUrl: './document-editor.component.html',
  providers: [ToolbarService],
  styleUrls: ['./document-editor.component.scss']
})

export class DocumentEditorComponent implements OnInit {
  public hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';
  @ViewChild('documenteditor_default')
  container: DocumentEditorContainerComponent;
  public culture: string = 'en-US';
  titleBar: TitleBar;

  constructor() { }

  ngOnInit(): void {
    console.log('init document editor')
  }

  onCreate(): void {
    let titleBarElement: HTMLElement = document.getElementById('default_title_bar');
    this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true);
    this.container.serviceUrl = this.hostUrl + WEB_API_ACTION;
    this.container.documentEditor.documentName = 'Getting Started';
    this.titleBar.updateDocumentTitle();
}

onDocumentChange(): void {
    if (!isNullOrUndefined(this.titleBar)) {
        this.titleBar.updateDocumentTitle();
    }
    this.container.documentEditor.focusIn();
}

}
