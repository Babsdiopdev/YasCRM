import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Commande } from 'src/app/models/commande.model';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.scss']
})
export class UpdateCommandeComponent implements OnInit {

  commande!: Commande;

  commandeOrDevis: string = 'COMMANDE';
  title: string = '';
  typeOperation: string = "update"
  buttonLabel: string = "Modifier"

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.getCommande();

    this.title = `Modification ${this.commande.reference}`;
  }

  getCommande() {
    return this.commande = this.data.commande;
  }

}
