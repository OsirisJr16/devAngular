import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantRoutingModule } from './pages/etudiant/etudiant-routing.module';
import { EtudiantModule } from './pages/etudiant/etudiant.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EtudiantRoutingModule,
    EtudiantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
