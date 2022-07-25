import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.scss']
})
export class AddDevisComponent implements OnInit {

  commandeOrDevis: string = 'DEVIS';
  title: string = 'Ajout de devis';
  typeOperation: string = "save";
  buttonLabel: string = "Ajouter"

  constructor() { }

  ngOnInit(): void {
  }

}
