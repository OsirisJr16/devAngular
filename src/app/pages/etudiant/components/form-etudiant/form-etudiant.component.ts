import { Component ,OnInit,Input } from '@angular/core';
import { NgbModal ,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit{
    constructor(private formBuilder:FormBuilder,private modal : NgbActiveModal){}
    formEtudiant !: FormGroup ;
    onSubmit() {
      if (this.formEtudiant.valid) {
        const etudiant = this.formEtudiant.value;
        etudiant.id = this.generateId(); 
        const etudiants = JSON.parse(localStorage.getItem('etudiants') || '[]');
        etudiants.push(etudiant);
        localStorage.setItem('etudiants', JSON.stringify(etudiants));
      }
    }
    generateId(): string {
      return Math.random().toString(36).substr(2, 9);
    }
    ngOnInit(): void {
        this.formEtudiant = this.formBuilder.group({
          nom : [null , [Validators.required]] , 
          prenom : [null , [Validators.required]] , 
          dateNaiss : [null , [Validators.required]] , 
          classe : [null, [Validators.required]]
        })
    }
} 
