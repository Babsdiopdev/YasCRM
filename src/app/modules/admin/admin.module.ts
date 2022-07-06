import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { ComponentsComponent } from './components/components.component';
import { PrimengModule } from 'src/app/ui/primeng.module';
import { MaterielModule } from 'src/app/ui/materiel.module';


@NgModule({
  declarations: [
    ContactComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
    MaterielModule
  ]
})
export class AdminModule { }
