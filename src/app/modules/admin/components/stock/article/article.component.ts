import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import Swal from 'sweetalert2';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @ViewChild('dt1 ') dt1: Table | undefined;

  articleResponse: any;

  articles: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllArticlesByProduit();
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }


  getAllArticlesByProduit() {
    this.articleService.getAllArticlesByProduit().subscribe(
      (response: any) => {
        this.articleResponse = response;
        this.articles = response.payload;
      }
    )
  }

  onopenAddArticle() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '10px'};
    const dialogRef = this.dialog.open(AddArticleComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllArticlesByProduit();
      //this.getStatistiqueOfContact();
    });
  }

  onopenUpdateArticle(article: Article) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '5px' };
    dialogConfig.data = { article: article }
    const dialogRef = this.dialog.open(UpdateArticleComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllArticlesByProduit();
    });
  }

  ondeleteArticleById(article: Article) {
    Swal.fire({
      icon: 'question',
      title: `<small>Voulez-vous supprimer le contact</small><br /> ${article.libelle} ?`,
      showDenyButton: true,
      confirmButtonText: 'Confirmer',
      denyButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.articleService.deleteArticleById(article.id!).subscribe(
          (response) => {
            Swal.fire({
              position: 'top-end',
              icon: (response.status === 'OK') ? 'success': 'error',
              title: `<small>${response.message}</small>`,
              showConfirmButton: false,
              timer: 1500
            }).then((result) => {
              if(result.dismiss && response.status === 'OK') {
                this.getAllArticlesByProduit();
                //this.getStatistiqueOfContact();
              }
            });
          }
        );
      }
    })
  }
}
