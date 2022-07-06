import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './shared/full/full.component';

const routes: Routes = [
  { 
    path: '',
    component: FullComponent,
    children: [
      { path : '', redirectTo: 'admin', pathMatch: 'prefix' },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
    ] 
  },
  { path: 'client', loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
