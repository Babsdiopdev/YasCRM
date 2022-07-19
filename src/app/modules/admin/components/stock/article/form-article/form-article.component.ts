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
        etat: [Validators.required],
        qte: [Validators.required]
      });
    } else if(this.typeOperation === 'update') {
      this.articleForm = this.articleService.createArticleForm();
      //this.articleForm.setValue(this.article);
      this.articleForm.get('libelle')?.setValue(this.article.libelle);
      this.articleForm.get('prixVente')?.setValue(this.article.prixVente);
      this.articleForm.get('etat')?.setValue(this.article.etat);
      this.articleForm.get('qte')?.setValue(this.article.qte);
    }
  }

  onsaveArticle() {
    const article: Article = {
      libelle: this.articleForm.value['libelle'],
      prixVente:  this.articleForm.value['prixVente'],
      etat: this.articleForm.value['etat'].value,
      type: 'PRODUIT',
      qte: this.articleForm.value['qte'],
    };

    if(this.typeOperation === 'save') {
      this.saveArticle(article);
    } else if(this.typeOperation === 'update') {
      this.updateArticleById(article)
    }
  }

  saveArticle(article: Article) {
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
