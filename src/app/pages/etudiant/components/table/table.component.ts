import { Component  ,OnInit} from '@angular/core';
import { FormEtudiantComponent } from '../form-etudiant/form-etudiant.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  }
  ngOnInit(): void {
    console.log(this.etudiants)
  }
}
