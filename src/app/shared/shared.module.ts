import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FullComponent } from './full/full.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterielModule } from '../ui/materiel.module';


   
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterielModule
  ],
  exports: []
})
export class SharedModule { }
