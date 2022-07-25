import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimengModule } from 'src/app/ui/primeng.module';
import { MaterielModule } from 'src/app/ui/materiel.module';
import { ContactComponent } from './components/crm/contact/contact.component';
import { AddcommandeComponent } from './components/crm/commande/addcommande/addcommande.component';
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
import { AgendaComponent } from './components/crm/agenda/agenda.component';
import { AddCommandeComponent } from './components/crm/commande/add-commande/add-commande.component';
import { UpdateCommandeComponent } from './components/crm/commande/update-commande/update-commande.component';
import { DevisComponent } from './components/crm/devis/devis.component';
import { UpdateDevisComponent } from './components/crm/devis/update-devis/update-devis.component';
import { FormCommandeComponent } from './components/crm/commande/form-commande/form-commande.component';
import { AddDevisComponent } from './components/crm/devis/add-devis/add-devis.component';
import { FormatEnumPipe } from 'src/app/shared/pipe/format-enum.pipe';
import { TacheComponent } from './components/crm/tache/tache.component';
import { AddTacheComponent } from './components/crm/tache/add-tache/add-tache.component';
import { UpdateTacheComponent } from './components/crm/tache/update-tache/update-tache.component';

@NgModule({
  declarations: [
    FormatEnumPipe,
    ContactComponent,
    CommandeComponent,
    AddcommandeComponent,
    AddContactComponent,
    FormContactComponent,
    UpdateContactComponent,
    AgendaComponent,
    ArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    FormArticleComponent,
    ConfigurationComponent,
    CommandeComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
    DevisComponent,
    UpdateDevisComponent,
    FormCommandeComponent,
    AddDevisComponent,
    TacheComponent,
    AddTacheComponent,
    UpdateTacheComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    MaterielModule,
    ReactiveFormsModule,
  ]

})
export class AdminModule { }
