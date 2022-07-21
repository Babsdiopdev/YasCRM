import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AgendaComponent } from './components/crm/agenda/agenda.component';

import { CommandeComponent } from './components/crm/commande/commande.component';

import { ContactComponent } from './components/crm/contact/contact.component';

const routes: Routes = [
  { path:'', component: ContactComponent },
  { path:'contact', component: ContactComponent },
  {
    path:'commande', 
  component:CommandeComponent
  },
  {
    path:'agenda',
    component:AgendaComponent
  }
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
