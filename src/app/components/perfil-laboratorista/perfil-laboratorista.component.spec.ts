import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilLaboratoristaComponent } from './perfil-laboratorista.component';

describe('PerfilLaboratoristaComponent', () => {
  let component: PerfilLaboratoristaComponent;
  let fixture: ComponentFixture<PerfilLaboratoristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilLaboratoristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilLaboratoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
