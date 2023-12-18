import { TestBed } from '@angular/core/testing';

import { TransferTreeDataService } from './transfer-tree-data.service';

describe('TransferTreeDataService', () => {
  let service: TransferTreeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferTreeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
