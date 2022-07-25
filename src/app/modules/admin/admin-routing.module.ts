import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './components/achats/fournisseur/fournisseur.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CommandeComponent } from './components/crm/commande/commande.component';
import { ContactComponent } from './components/crm/contact/contact.component';
import { DevisComponent } from './components/crm/devis/devis.component';
import { ArticleComponent } from './components/stock/article/article.component';

const routes: Routes = [
  { path:'', component: ContactComponent },
  { path:'crm/contact', component: ContactComponent },
  { path:'crm/commande', component: CommandeComponent },
  { path:'crm/devis', component: DevisComponent },
  
  { path:'achats/fournisseur', component: FournisseurComponent },
  
  
  { path:'stock/article', component: ArticleComponent },
  { path:'configuration', component: ConfigurationComponent },
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
