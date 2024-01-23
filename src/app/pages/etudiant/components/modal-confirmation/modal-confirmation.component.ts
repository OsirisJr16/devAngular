import { Component  , OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent  implements OnInit{
  @Input() studentData :any = {} ;
  deleteStudent(etudiant :any):void{
    if(etudiant && etudiant.id) { 
      const students  = JSON.parse(localStorage.getItem('etudiants') || '[]');
      const updatedStudents = students.filter((item: { id: any; }) => item.id !== etudiant.id);
      localStorage.setItem('etudiants', JSON.stringify(updatedStudents));
      window.location.reload() ; 
    }
  }
  ngOnInit(): void {
    
  }
}
