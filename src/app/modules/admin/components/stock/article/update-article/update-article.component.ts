import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {

  article!: Article;

  title: string = '';
  typeOperation: string = "update"
  buttonLabel: string = "Modifier"

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.getArticle();

    this.title = `Modification ${this.article.libelle}`;
  }

  getArticle() {
    this.article = this.data.article;
  }

}
