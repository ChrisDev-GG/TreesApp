import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesCommentComponent } from './trees-comment.component';

describe('TreesCommentComponent', () => {
  let component: TreesCommentComponent;
  let fixture: ComponentFixture<TreesCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreesCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
