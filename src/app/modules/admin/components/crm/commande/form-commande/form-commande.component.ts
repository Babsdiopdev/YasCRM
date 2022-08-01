import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommandeHelper } from 'src/app/helpers/commande/commande.helper';
import { Article } from 'src/app/models/article.model';
import { Contact } from 'src/app/models/contact.model';
import { ArticleService } from 'src/app/services/article.service';
import { CommandeService } from 'src/app/services/commande.service';
import { ContactService } from 'src/app/services/contact.service';
import { VenteService } from 'src/app/services/vente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-commande',
  templateUrl: './form-commande.component.html',
  styleUrls: ['./form-commande.component.scss']
})
export class FormCommandeComponent implements OnInit {

  @Input() commandeOrDevis: string = '';
  @Input() title: string = '';
  @Input() buttonLabel: string = '';
  @Input() typeOperation: string = '';
  @Input() commande: any;

  contacts: Contact[] = [];

  articles: any[] = [];

  etatOptions = [
    {label: 'Validée', value: 'VALIDE', disabled: false},
    {label: 'En cours', value: 'EN_COURS', disabled: false},
    {label: 'Annulée', value: 'ANNULE', disabled: false}
  ];

  commandeForm!: FormGroup;

  articlesForm!: FormArray;

  constructor(
    private fb: FormBuilder,
    private commandeService: CommandeService,
    private contactService: ContactService,
    private articleService: ArticleService,
    private venteService: VenteService,
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
        contact: [Validators.required],
        articles: {
          article: [Validators.required],
          qte: [Validators.required]
        }
      });

      this.articlesForm = this.getArticlesForm();

    } else if(this.typeOperation === 'update') {
      this.commandeForm = this.commandeService.createCommandeForm();
      this.commande.contact.fullName= this.commande.contact?.prenom+" "+this.commande.contact?.nom;
      this.commandeForm.get('contact')?.setValue(this.commande.contact);

      let etat = {};

      if(this.commande.etat === 'VALIDE') {
        etat = this.etatOptions[0];
        //desactivation des options 'EN COURS' et 'ANNULER'
        this.etatOptions[1].disabled = true;
        this.etatOptions[2].disabled = true;
      } else if(this.commande.etat === 'EN_COURS') {
        etat = this.etatOptions[1];
        //desactivation de l'options 'EN COURS'
        this.etatOptions[1].disabled = true;
      }
      else if(this.commande.etat === 'ANNULE') {
        etat = this.etatOptions[2];
        //desactivation de toutes les options
        this.etatOptions[0].disabled = true;
        this.etatOptions[1].disabled = true;
        this.etatOptions[2].disabled = true;
      }

      this.commandeForm.get('etat')?.setValue(etat);

      this.articlesForm = this.getArticlesForm();

      for(let i=0; i<this.commande.ventes.length; i++) {
        if(i < this.commande.ventes.length-1) {
          this.articlesForm.push(this.fb.group({
            id: [''],
            article: [''],
            qte: ['']
          }))
        }
      }

      const articles = [];

      for(const vente of this.commande.ventes) {
        articles.push({
          id: vente.id,
          article: vente.article,
          qte: vente.qte,
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

  removeArticleFormCommande(index: number) {
    const venteId = this.commandeForm.value['articles'][index].id;
    this.deleteArticleFromCommande(venteId, index);
  }

  getAllContacts() {
    this.contactService.getAllContacts().subscribe(
      (response) => {
        this.contacts = response.payload;
        this.setFullName(this.contacts);
      }
    );
  }

  getAllArticlesDisponible() {
    this.articleService.getAllArticlesDisponible().subscribe(
      (response) => this.articles = response.payload
    )
  }

  onsaveCommande() {
    if(this.typeOperation === 'save') {
      const articles = [];

      for(let value of this.commandeForm.value['articles']) {
        articles.push({
          id: value.id,
          qte: value.qte,
          articleId: value.article.id
        });
      }

      const commande = {
        etape: this.commandeOrDevis,
        etatCommande: (this.commandeOrDevis === 'COMMANDE')? this.etatOptions[1].value: null,
        etatDevis: (this.commandeOrDevis === 'DEVIS')? this.etatOptions[1].value : null,
        contactId: this.commandeForm.value['contact'].id,
        ventes: articles
      };

      this.saveCommande(commande);

    } else if(this.typeOperation === 'update') {
      const commandeHelper: CommandeHelper = new CommandeHelper(this.commandeService);
      commandeHelper.updateCommande(this, this.commande.id, undefined, this.commandeForm, undefined, undefined);
    }
  }

  saveCommande(commande: any) {
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

  oncloseDialog() {
    this.dialog.closeAll();
  }

  deleteArticleFromCommande(venteId: number, index: number) {
    Swal.fire({
      icon: 'question',
      title: `<small>Voulez-vous supprimer l'article</small><br /> ?`,
      showDenyButton: true,
      confirmButtonText: 'Confirmer',
      denyButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        //Suppression du control au niveau du formulaire
        this.getArticlesForm().removeAt(index);

        if(this.typeOperation === 'update' && venteId > 0) {
          this.venteService.deleteArticleFromCommande(venteId).subscribe(
            (response) => {
              Swal.fire({
                position: 'top-end',
                icon: (response.status === 'OK') ? 'success': 'error',
                title: `<small>${response.message}</small>`,
                showConfirmButton: false,
                timer: 1500
              }).then((result) => {
                if(result.dismiss && response.status === 'OK') {
                  //this.getOnlyCommande();
                }
              });
            }
          );
        }
      }
    })
  }

  setFullName(contacts:Contact[]){
    contacts.forEach(contact=>{
      contact.fullName=contact.prenom+" "+contact.nom;
    })
  }

}
