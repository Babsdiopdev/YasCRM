import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss']
})
export class AddCommandeComponent implements OnInit {
  
  commandeOrDevis: string = 'COMMANDE';
  title: string = 'Ajout de commande';
  typeOperation: string = "save";
  buttonLabel: string = "Ajouter"

  constructor() { }

  ngOnInit(): void {
  }

}
