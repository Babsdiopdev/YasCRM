import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.scss']
})
export class AddFournisseurComponent implements OnInit {

  title: string = 'Ajout de contact';
  typeOperation: string = "save";
  buttonLabel: string = "Ajouter"

  constructor() { }

  ngOnInit(): void {
  }

}
