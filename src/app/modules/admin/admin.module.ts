import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PrimengModule } from 'src/app/ui/primeng.module';
import { MaterielModule } from 'src/app/ui/materiel.module';
import { ContactComponent } from './components/crm/contact/contact.component';
import { CommandeComponent } from './components/crm/commande/commande.component';
import { DevisComponent } from './components/crm/devis/devis.component';

import { AgendaComponent } from './components/crm/agenda/agenda.component';
import { RvComponent } from './components/crm/rv/rv.component';
import { AddRVComponent } from './components/crm/rv/add-rv/add-rv.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ContactComponent,
    CommandeComponent,
    DevisComponent,
     AgendaComponent,
      RvComponent,
      AddRVComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    MaterielModule,
    FormsModule,
  ]
})
export class AdminModule { }
