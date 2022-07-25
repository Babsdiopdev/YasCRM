import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Commande } from 'src/app/models/commande.model';

@Component({
  selector: 'app-update-devis',
  templateUrl: './update-devis.component.html',
  styleUrls: ['./update-devis.component.scss']
})
export class UpdateDevisComponent implements OnInit {

  devis!: Commande;

  commandeOrDevis: string = 'DEVIS';
  title: string = '';
  typeOperation: string = "update"
  buttonLabel: string = "Modifier"

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.getDevis();

    this.title = `Modification ${this.devis.reference}`;
  }

  getDevis() {
    return this.devis = this.data.devis;
  }

}
