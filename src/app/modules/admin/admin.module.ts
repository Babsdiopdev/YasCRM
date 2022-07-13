import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PrimengModule } from 'src/app/ui/primeng.module';
import { MaterielModule } from 'src/app/ui/materiel.module';
import { ContactComponent } from './components/crm/contact/contact.component';
import { AddcommandeComponent } from './components/crm/commande/addcommande/addcommande.component';
import { CommandeComponent } from './components/crm/commande/commande.component';


@NgModule({
  declarations: [
    ContactComponent,
    CommandeComponent,
    AddcommandeComponent
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    MaterielModule
  ]
})
export class AdminModule { }
