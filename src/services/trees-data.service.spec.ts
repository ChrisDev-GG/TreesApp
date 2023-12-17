import { TestBed } from '@angular/core/testing';

import { TreesDataService } from './trees-data.service';

describe('TreesDataService', () => {
  let service: TreesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
