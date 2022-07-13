import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './components/crm/commande/commande.component';

import { ContactComponent } from './components/crm/contact/contact.component';

const routes: Routes = [
  { path:'', component: ContactComponent },
  { path:'contact', component: ContactComponent },
  {
    path:'commande', 
  component:CommandeComponent
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
