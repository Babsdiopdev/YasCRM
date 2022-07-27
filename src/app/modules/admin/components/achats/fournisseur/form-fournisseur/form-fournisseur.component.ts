import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-fournisseur',
  templateUrl: './form-fournisseur.component.html',
  styleUrls: ['./form-fournisseur.component.scss']
})
export class FormFournisseurComponent implements OnInit {

  @Input() title: string = '';
  @Input() buttonLabel: string = '';
  @Input() typeOperation: string = '';
  @Input() fournisseur: any;

  fournisseurForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fournisseurService: FournisseurService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createFournisseurForm();
  }

  createFournisseurForm() {
    if(this.typeOperation === 'save') {
      this.fournisseurForm = this.fournisseurService.createFournisseurForm({
        nom: [Validators.required],
        prenom: [Validators.required],
        telephone: [Validators.required],
        email: [Validators.required],
        adresse: [Validators.required]
      });
    } else if(this.typeOperation === 'update') {
      this.fournisseurForm = this.fournisseurService.createFournisseurForm();

      this.fournisseurForm.get('nom')?.setValue(this.fournisseur.nom);
      this.fournisseurForm.get('prenom')?.setValue(this.fournisseur.prenom);
      this.fournisseurForm.get('telephone')?.setValue(this.fournisseur.telephone);
      this.fournisseurForm.get('email')?.setValue(this.fournisseur.email);
      this.fournisseurForm.get('adresse')?.setValue(this.fournisseur.adresse);
    }
  }

  onsaveFournisseur() {
    const fournisseur: Fournisseur = {
      nom: this.fournisseurForm.value['nom'],
      prenom:  this.fournisseurForm.value['prenom'],
      telephone: this.fournisseurForm.value['telephone'],
      email: this.fournisseurForm.value['email'],
      adresse: this.fournisseurForm.value['adresse'],
    };

    if(this.typeOperation === 'save') {
      this.saveFournisseur(fournisseur);
    } else if(this.typeOperation === 'update') {
      this.updateFournisseurById(fournisseur)
    }
  }

  saveFournisseur(fournisseur: Fournisseur) {
    this.fournisseurService.saveFournisseur(fournisseur).subscribe(
      (response) => {
        Swal.fire({
          position: 'top-end',
          icon: (response.status === 'OK') ? 'success': 'error',
          title: `<small>${response.message}</small>`,
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
            if(result.dismiss) {
              this.dialog.closeAll();
            }
          }
        );
      }
    );
  }

  updateFournisseurById(fournisseur: Fournisseur) {

    fournisseur.id = this.fournisseur.id;

    this.fournisseurService.updateFournisserurById(fournisseur.id!, fournisseur).subscribe(
      (response) => {
        Swal.fire({
          position: 'top-end',
          icon: (response.status === 'OK') ? 'success': 'error',
          title: `<small>${response.message}</small>`,
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
            if(result.dismiss) {
              this.dialog.closeAll();
            }
          }
        );
      }
    );
  }

}
