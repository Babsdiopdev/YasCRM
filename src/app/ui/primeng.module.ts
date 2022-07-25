import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelModule} from 'primeng/panel';
import {MultiSelectModule} from 'primeng/multiselect';
import {DividerModule} from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    InputNumberModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    MultiSelectModule,
    DividerModule,
    AccordionModule
  ]
})
export class PrimengModule { }
