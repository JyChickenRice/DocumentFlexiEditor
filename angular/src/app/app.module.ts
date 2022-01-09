import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentEditorContainerModule, DocumentEditorModule } from '@syncfusion/ej2-angular-documenteditor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentEditorComponent } from './modules/document-editor/components/document-editor/document-editor.component';
import { MainComponent } from './modules/document-editor/pages/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { TemplateEditorComponent } from './modules/document-editor/pages/template-editor/template-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentEditorComponent,
    MainComponent,
    TemplateEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentEditorModule,
    DocumentEditorContainerModule,
    NgbModule,
    ButtonModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
