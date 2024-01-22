import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantRootComponent } from './containers/etudiant-root/etudiant-root.component';
import { FormEtudiantComponent } from './components/form-etudiant/form-etudiant.component';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EtudiantRootComponent,
    FormEtudiantComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports : [
    TableComponent
  ]
})
export class EtudiantModule { }
