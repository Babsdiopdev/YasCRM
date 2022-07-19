import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CommandeComponent } from './components/crm/commande/commande.component';

=======
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CommandeComponent } from './components/crm/commande/commande.component';
>>>>>>> a648466a0ca77188e2c440b3aef4c83d33e28874
import { ContactComponent } from './components/crm/contact/contact.component';
import { ArticleComponent } from './components/stock/article/article.component';

const routes: Routes = [
  { path:'', component: ContactComponent },
  { path:'contact', component: ContactComponent },
<<<<<<< HEAD
  {
    path:'commande', 
  component:CommandeComponent
  }
=======
  { path:'article', component: ArticleComponent },
  { path:'configuration', component: ConfigurationComponent },
  { path:'commande', component: CommandeComponent }
>>>>>>> a648466a0ca77188e2c440b3aef4c83d33e28874
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
