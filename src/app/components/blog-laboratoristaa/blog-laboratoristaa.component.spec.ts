import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLaboratoristaaComponent } from './blog-laboratoristaa.component';

describe('BlogLaboratoristaaComponent', () => {
  let component: BlogLaboratoristaaComponent;
  let fixture: ComponentFixture<BlogLaboratoristaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLaboratoristaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLaboratoristaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
