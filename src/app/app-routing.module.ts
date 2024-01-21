import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantRootComponent } from './pages/etudiant/containers/etudiant-root/etudiant-root.component';
const routes: Routes = [
  { 
    path : '' , 
    component  : EtudiantRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
