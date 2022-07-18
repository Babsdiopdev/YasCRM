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
import { CommandeComponent } from './components/crm/commande/commande.component';
import { AgendaComponent } from './components/crm/agenda/agenda.component';

@NgModule({
  declarations: [
    ContactComponent,
    CommandeComponent,
    AddcommandeComponent,
    AddContactComponent,
    FormContactComponent,
    UpdateContactComponent,
    AgendaComponent,
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    MaterielModule,
    ReactiveFormsModule
  ]

})
export class AdminModule { }
