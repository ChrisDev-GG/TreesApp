import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesButtonComponent } from './trees-button.component';

describe('TreesButtonComponent', () => {
  let component: TreesButtonComponent;
  let fixture: ComponentFixture<TreesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreesButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
