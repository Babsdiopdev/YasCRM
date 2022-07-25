import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Article } from 'src/app/models/article.model';
import { Contact } from 'src/app/models/contact.model';
import { ArticleService } from 'src/app/services/article.service';
import { CommandeService } from 'src/app/services/commande.service';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-commande',
  templateUrl: './form-commande.component.html',
  styleUrls: ['./form-commande.component.scss']
})
export class FormCommandeComponent implements OnInit {

  @Input() title: string = '';
  @Input() buttonLabel: string = '';
  @Input() typeOperation: string = '';
  @Input() commande: any;

  contacts: Contact[] = [];

  articles: any[] = [];

  etatOptions = [
    {label: 'Validée', value: 'VALIDE'},
    {label: 'En cours', value: 'EN_COURS'},
    {label: 'Annulée', value: 'ANNULE'},
  ];

  commandeForm!: FormGroup;

  articlesForm!: FormArray;

  constructor(
    private fb: FormBuilder,
    private commandeService: CommandeService,
    private contactService: ContactService,
    private articleService: ArticleService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createCommandeForm();
    this.getAllContacts();
    this.getAllArticlesDisponible();
  }

  createCommandeForm() {
    if(this.typeOperation === 'save') {
      this.commandeForm = this.commandeService.createCommandeForm({
        etat: [Validators.required],
        contact: [Validators.required],
        articles: {
          article: [Validators.required],
          qte: [Validators.required]
        }
      });

      this.articlesForm = this.getArticlesForm();

    } else if(this.typeOperation === 'update') {
      this.commandeForm = this.commandeService.createCommandeForm();
      //this.commandeForm.get('etat')?.setValue(this.commande.etat);
      //this.commandeForm.get('contact')?.setValue(this.commande.contact);
      //this.commandeForm.get('articles')?.setValue(this.commande.article);
      //this.commandeForm.get('qte')?.setValue(this.commande.qte);

      this.articlesForm = this.getArticlesForm();

      for(let i=0; i<this.commande.ventes.length; i++) {
        if(i < this.commande.ventes.length-1) {
          this.articlesForm.push(this.fb.group({
            article: [''],
            qte: [''],
          }))
        }
      }

      const articles = [];

      for(const vente of this.commande.ventes) {
        articles.push({
          qte: vente.qte,
          article: vente.article.libelle
        });
      }

      this.commandeForm.get('articles')?.setValue(articles);
    }
  }

  getArticlesForm(): FormArray {
    return <FormArray> this.commandeForm.get('articles');
  }

  addArticleForm() {
    this.getArticlesForm().push(this.commandeService.createArticleForm({
      article: [Validators.required],
      qte: [Validators.required]
    }));
  }

  removeArticleForm(index: number) {
    this.getArticlesForm().removeAt(index);
  }

  getAllContacts() {
    this.contactService.getAllContacts().subscribe(
      (response) => this.contacts = response.payload
    );
  }

  getAllArticlesDisponible() {
    this.articleService.getAllArticlesDisponible().subscribe(
      (response) => this.articles = response.payload
    )
  }

  onsaveCommande() {
    const articles = [];

    for(let value of this.commandeForm.value['articles']) {
      articles.push({
        qte: value.qte,
        articleId: value.article.id
      });
    }

    const commande = {
      etape: 'COMMANDE',
      etat:  this.commandeForm.value['etat'].value,
      contactId: this.commandeForm.value['contact'].id,
      ventes: articles
    };

    if(this.typeOperation === 'save') {
      this.saveContact(commande);
    } else if(this.typeOperation === 'update') {
      this.updateCommandeById(commande);
    }
  }

  saveContact(commande: any) {
   this.commandeService.saveCommande(commande).subscribe(
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

  updateCommandeById(commande: any) {

    commande.id = this.commande.id;

    this.commandeService.updateConactById(commande.id!, commande).subscribe(
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
