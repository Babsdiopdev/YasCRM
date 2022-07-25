import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.scss']
})
export class FormArticleComponent implements OnInit {

  @Input() title: string = '';
  @Input() buttonLabel: string = '';
  @Input() typeOperation: string = '';
  @Input() article: any;

  etatOptions = [ {value: 'DISPONIBLE'}, {value: 'INDISPONIBLE'} ];

  articleForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createArticleForm();
  }

  createArticleForm() {
    if(this.typeOperation === 'save') {
      this.articleForm = this.articleService.createArticleForm({
        libelle: [Validators.required],
        prixVente: [Validators.required],
        etat: {disabled: true},
      });
    } else if(this.typeOperation === 'update') {

      let etat = {};
      
      this.etatOptions.forEach(e => {
        if(e.value === this.article.etat) {
          etat = e;
        }
      });

      this.articleForm = this.articleService.createArticleForm();
      this.articleForm.get('libelle')?.setValue(this.article.libelle);
      this.articleForm.get('prixVente')?.setValue(this.article.prixVente);
      this.articleForm.get('etat')?.setValue(etat);
    }
  }

  onsaveArticle() {
    const article: Article = {
      libelle: this.articleForm.value['libelle'],
      prixVente:  this.articleForm.value['prixVente'],
      type: 'PRODUIT',
      qte: 0
    };

    if(this.typeOperation === 'save') {
      this.saveArticle(article);
    } else if(this.typeOperation === 'update') {
      this.updateArticleById(article)
    }
  }

  saveArticle(article: Article) {
    article.etat = this.etatOptions[1].value;

    this.articleService.saveArticle(article).subscribe(
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

  updateArticleById(article: Article) {

    article.id = this.article.id;
    article.etat = this.articleForm.value['etat'].value;

    this.articleService.updateArticleById(article.id!, article).subscribe(
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
