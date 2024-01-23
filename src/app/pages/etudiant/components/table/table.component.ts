import { Component  ,OnInit} from '@angular/core';
import { FormEtudiantComponent } from '../form-etudiant/form-etudiant.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private ModalService : NgbModal){}
  etudiants = JSON.parse(localStorage.getItem('etudiants') || '[]');

  newEtudiant(){
    const modalRef = this.ModalService.open(FormEtudiantComponent, {centered : true ,    scrollable : true});
    modalRef.componentInstance.editMod = false ; 
    modalRef.componentInstance.studentData = {} ; 
  }
  modifyEtudiant(student: any){
    const modalRef = this.ModalService.open(FormEtudiantComponent , {centered : true , scrollable : true}) ; 
    modalRef.componentInstance.editMod = true ; 
    modalRef.componentInstance.studentData = {...student} ; 
  }
  deleteStudent(){
    const modalRef = this.ModalService.open(ModalConfirmationComponent , {centered : true})
  }
  ngOnInit(): void {
    console.log(this.etudiants)
  }
}
