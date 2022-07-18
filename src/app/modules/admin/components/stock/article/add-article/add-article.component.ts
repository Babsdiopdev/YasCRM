import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  title: string = 'Ajout article';
  typeOperation: string = "save";
  buttonLabel: string = "Ajouter"

  constructor() { }

  ngOnInit(): void {
  }

}
