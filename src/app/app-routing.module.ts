import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantRoutingModule } from './pages/etudiant/etudiant-routing.module';
import { EtudiantRootComponent } from './pages/etudiant/containers/etudiant-root/etudiant-root.component';
const routes: Routes = [
  { 
    path : '' , 
    component  : EtudiantRootComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EtudiantRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
