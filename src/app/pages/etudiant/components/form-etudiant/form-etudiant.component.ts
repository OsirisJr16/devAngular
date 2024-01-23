import { Component ,OnInit,Input } from '@angular/core';
import { NgbModal ,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit{
    constructor(private formBuilder:FormBuilder,private modal : NgbActiveModal , private location : Location){}
    formEtudiant !: FormGroup ;
    @Input() editMod:boolean =  false ; 
    @Input() studentData : any = {} ;
    modalTitle : string = "" ;

    onSubmit() {
      if (this.formEtudiant.valid) {
        const etudiant = this.formEtudiant.value;
        etudiant.id = this.generateId(); 
        const etudiants = JSON.parse(localStorage.getItem('etudiants') || '[]');
        etudiants.push(etudiant);
        localStorage.setItem('etudiants', JSON.stringify(etudiants));
        window.location.reload() ; 
      }
    }
    modifyEtudiantInLocalStorage(updatedEtudiant: any): void {
      if (this.formEtudiant.valid) {
        const etudiants = JSON.parse(localStorage.getItem('etudiants') || '[]');
        const index = etudiants.findIndex((student: any) => student.id === updatedEtudiant.id);
        if (index) {
          etudiants[index] = updatedEtudiant;
          localStorage.setItem('etudiants', JSON.stringify(etudiants));
          window.location.reload()
        } else {
          console.error('student not found');
        }
      }
    }
    
    generateId(): string {
      return Math.random().toString(36).substr(2, 9);
    }
    ngOnInit(): void {
        this.modalTitle = this.editMod ? "Modifier les informations" : "Nouveau Etudiant" ;
        this.formEtudiant = this.formBuilder.group({
          nom : [null , [Validators.required]] , 
          prenom : [null , [Validators.required]] , 
          dateNaiss : [null , [Validators.required]] , 
          classe : [null, [Validators.required ]]
        })
    }
} 
