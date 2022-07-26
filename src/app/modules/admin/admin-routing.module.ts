import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AgendaComponent } from './components/crm/agenda/agenda.component';

import { FournisseurComponent } from './components/achats/fournisseur/fournisseur.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CommandeComponent } from './components/crm/commande/commande.component';
import { ContactComponent } from './components/crm/contact/contact.component';
import { DevisComponent } from './components/crm/devis/devis.component';
import { ArticleComponent } from './components/stock/article/article.component';
import { TacheComponent } from './components/crm/tache/tache.component';

const routes: Routes = [
  { path:'', component: ContactComponent },
  { path:'contact', component: ContactComponent },
  { path:'agenda', component:AgendaComponent},
  { path:'article', component: ArticleComponent },
  { path:'crm/contact', component: ContactComponent },
  { path:'crm/commande', component: CommandeComponent },
  { path:'crm/devis', component: DevisComponent },
  {path:'crm/tache', component:TacheComponent},
  { path:'achats/fournisseur', component: FournisseurComponent },
  
  
  { path:'stock/article', component: ArticleComponent },
  { path:'configuration', component: ConfigurationComponent },
];
@NgModule({ 
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    FullCalendarModule
  ]
})
export class AdminRoutingModule { }
