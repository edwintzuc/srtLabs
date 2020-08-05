import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAlumnosComponent } from './blog-alumnos.component';

describe('BlogAlumnosComponent', () => {
  let component: BlogAlumnosComponent;
  let fixture: ComponentFixture<BlogAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
