import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullComponent } from './full/full.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterielModule } from '../ui/materiel.module';
import { PrimengModule } from '../ui/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimengModule,
    MaterielModule,
  ],
  exports: [
    PrimengModule,
    MaterielModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
