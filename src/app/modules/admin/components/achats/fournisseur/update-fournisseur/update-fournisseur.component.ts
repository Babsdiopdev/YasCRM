import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Fournisseur } from 'src/app/models/fournisseur.model';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.scss']
})
export class UpdateFournisseurComponent implements OnInit {

  fournisseur!: Fournisseur;

  title: string = '';
  typeOperation: string = "update"
  buttonLabel: string = "Modifier"

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.getFournisseur();

    this.title = `Modification ${this.fournisseur.prenom} ${this.fournisseur.nom}`;
  }

  getFournisseur() {
    this.fournisseur = this.data.fournisseur;
  }

}
