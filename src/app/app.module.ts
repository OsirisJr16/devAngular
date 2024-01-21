import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EtudiantRootComponent } from './pages/etudiant/containers/etudiant-root/etudiant-root.component';
@NgModule({
  declarations: [
    AppComponent,
    EtudiantRootComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
