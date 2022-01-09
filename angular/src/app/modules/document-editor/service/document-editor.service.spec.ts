import { TestBed } from '@angular/core/testing';

import { DocumentEditorService } from './document-editor.service';

describe('DocumentEditorService', () => {
  let service: DocumentEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
