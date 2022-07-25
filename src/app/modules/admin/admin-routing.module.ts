import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CommandeComponent } from './components/crm/commande/commande.component';
import { ContactComponent } from './components/crm/contact/contact.component';
import { DevisComponent } from './components/crm/devis/devis.component';
import { ArticleComponent } from './components/stock/article/article.component';

const routes: Routes = [
  { path:'', component: ContactComponent },
  { path:'contact', component: ContactComponent },
  {
    path:'commande', 
  component:CommandeComponent
  },
  { path:'article', component: ArticleComponent },
  { path:'configuration', component: ConfigurationComponent },
  { path:'commande', component: CommandeComponent },
  { path:'devis', component: DevisComponent }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
