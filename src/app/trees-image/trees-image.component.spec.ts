import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesImageComponent } from './trees-image.component';

describe('TreesImageComponent', () => {
  let component: TreesImageComponent;
  let fixture: ComponentFixture<TreesImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreesImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
