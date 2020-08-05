import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMaestrosComponent } from './blog-maestros.component';

describe('BlogMaestrosComponent', () => {
  let component: BlogMaestrosComponent;
  let fixture: ComponentFixture<BlogMaestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMaestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
