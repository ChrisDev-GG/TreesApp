import { TestBed } from '@angular/core/testing';

import { CommentsForTreesService } from './comments-for-trees.service';

describe('CommentsForTreesService', () => {
  let service: CommentsForTreesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsForTreesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
