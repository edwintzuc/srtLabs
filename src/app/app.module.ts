import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogAlumnosComponent } from './components/blog-alumnos/blog-alumnos.component';
import { BlogMaestrosComponent } from './components/blog-maestros/blog-maestros.component';
import { BlogLaboratoristaaComponent } from './components/blog-laboratoristaa/blog-laboratoristaa.component';
import { LaboratoriosComponent } from './components/laboratorios/laboratorios.component';
import { PerfilAlumnosComponent } from './components/perfil-alumnos/perfil-alumnos.component';
import { PerfilMaestrosComponent } from './components/perfil-maestros/perfil-maestros.component';
import { PerfilLaboratoristaComponent } from './components/perfil-laboratorista/perfil-laboratorista.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogAlumnosComponent,
    BlogMaestrosComponent,
    BlogLaboratoristaaComponent,
    LaboratoriosComponent,
    PerfilAlumnosComponent,
    PerfilMaestrosComponent,
    PerfilLaboratoristaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
