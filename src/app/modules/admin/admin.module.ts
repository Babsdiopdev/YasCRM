import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PrimengModule } from 'src/app/ui/primeng.module';
import { MaterielModule } from 'src/app/ui/materiel.module';
import { ContactComponent } from './components/crm/contact/contact.component';
<<<<<<< HEAD
import { AddContactComponent } from './components/crm/contact/add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormContactComponent } from './components/crm/contact/form-contact/form-contact.component';
import { UpdateContactComponent } from './components/crm/contact/update-contact/update-contact.component';
import { ArticleComponent } from './components/stock/article/article.component';
import { AddArticleComponent } from './components/stock/article/add-article/add-article.component';
import { UpdateArticleComponent } from './components/stock/article/update-article/update-article.component';
import { FormArticleComponent } from './components/stock/article/form-article/form-article.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CommandeComponent } from './components/crm/commande/commande.component';
import { AddCommandeComponent } from './components/crm/commande/add-commande/add-commande.component';
import { UpdateCommandeComponent } from './components/crm/commande/update-commande/update-commande.component';
import { DevisComponent } from './components/crm/devis/devis.component';
import { AppDevisComponent } from './components/crm/devis/app-devis/app-devis.component';
import { UpdateDevisComponent } from './components/crm/devis/update-devis/update-devis.component';
import { FormCommandeComponent } from './components/crm/commande/form-commande/form-commande.component';
=======
import { CommandeComponent } from './components/crm/commande/commande.component';
import { DevisComponent } from './components/crm/devis/devis.component';

import { AgendaComponent } from './components/crm/agenda/agenda.component';
import { RvComponent } from './components/crm/rv/rv.component';
import { AddRVComponent } from './components/crm/rv/add-rv/add-rv.component';
import { FormsModule } from '@angular/forms';




>>>>>>> nogaye

@NgModule({
  declarations: [
    ContactComponent,
<<<<<<< HEAD
    AddContactComponent,
    FormContactComponent,
    UpdateContactComponent,
    ArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    FormArticleComponent,
    ConfigurationComponent,
    CommandeComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
    DevisComponent,
    AppDevisComponent,
    UpdateDevisComponent,
    FormCommandeComponent
=======
    CommandeComponent,
    DevisComponent,
     AgendaComponent,
      RvComponent,
      AddRVComponent,
>>>>>>> nogaye
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    MaterielModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    FormsModule,
>>>>>>> nogaye
  ]
})
export class AdminModule { }
