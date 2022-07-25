import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import Swal from 'sweetalert2';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  @ViewChild('dt1 ') dt1: Table | undefined;

  fournisseurResponse: any;
  fournisseurs: Fournisseur[] = [];

  constructor(
    private fournisseurService: FournisseurService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllFournisseurs();
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getAllFournisseurs() {
    this.fournisseurService.getAllFournisseurs().subscribe(
      (response) => {
        this.fournisseurResponse = response;
        this.fournisseurs = response.payload;
      }
    ); 
  }

  onopenAddFournisseur() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '10px'};
    const dialogRef = this.dialog.open(AddFournisseurComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllFournisseurs();
    });
  }

  openupdateFournisseur(fournisseur: Fournisseur) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '5px' };
    dialogConfig.data = { fournisseur: fournisseur}
    const dialogRef = this.dialog.open(UpdateFournisseurComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllFournisseurs();
    });
  }

  ondeleteFournisseurById(fournisseur: Fournisseur) {
    Swal.fire({
      icon: 'question',
      title: `<small>Voulez-vous supprimer le fournisseur</small><br /> ${fournisseur.prenom} ${fournisseur.nom} ?`,
      showDenyButton: true,
      confirmButtonText: 'Confirmer',
      denyButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.fournisseurService.deleFournisseurById(fournisseur.id!).subscribe(
          (response) => {
            Swal.fire({
              position: 'top-end',
              icon: (response.status === 'OK') ? 'success': 'error',
              title: `<small>${response.message}</small>`,
              showConfirmButton: false,
              timer: 1500
            }).then((result) => {
              if(result.dismiss && response.status === 'OK') {
                this.getAllFournisseurs();
              }
            });
          }
        );
      }
    })
  }

}
