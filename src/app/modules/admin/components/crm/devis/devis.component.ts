import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { CommandeHelper } from 'src/app/helpers/commande/commande.helper';
import { Commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';
import Swal from 'sweetalert2';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { UpdateDevisComponent } from './update-devis/update-devis.component';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {

  @ViewChild('dt1 ') dt1: Table | undefined;

  devisResponse: any;
  devis: Commande[] = [];

  constructor(
    private commandeService: CommandeService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllCommandes();
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getAllCommandes() {
    this.commandeService.getAllCommandes('devis').subscribe(
      (response) => {
        this.devisResponse = response;
        this.devis = response.payload;
      }
    );
  }

  onopenAddDevis() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '10px'};
    const dialogRef = this.dialog.open(AddDevisComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllCommandes();
    });
  }

  openupdateDevis(devis: Commande) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '5px' };
    dialogConfig.data = { devis: devis }
    const dialogRef = this.dialog.open(UpdateDevisComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllCommandes();
    });
  }

  ondeleteDevisById(devis: Commande) {
    Swal.fire({
      icon: 'question',
      title: `<small>Voulez-vous supprimer le devis</small><br /> ${devis.reference} ?`,
      showDenyButton: true,
      confirmButtonText: 'Confirmer',
      denyButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.commandeService.deleteCommandeById(devis.id!).subscribe(
          (response) => {
            Swal.fire({
              position: 'top-end',
              icon: (response.status === 'OK') ? 'success': 'error',
              title: `<small>${response.message}</small>`,
              showConfirmButton: false,
              timer: 1500
            }).then((result) => {
              if(result.dismiss && response.status === 'OK') {
                this.getAllCommandes();
              }
            });
          }
        );
      }
    })
  }

  onvalidateDevis(devis: Commande) {
    const commandeHelper: CommandeHelper = new CommandeHelper(this.commandeService);
    commandeHelper.updateCommande(this, undefined, devis, undefined, 'VALIDE', 'EN_COURS', 'COMMANDE');
  }

  onCancelDevis(devis: Commande) {
    const commandeHelper: CommandeHelper = new CommandeHelper(this.commandeService);
    commandeHelper.updateCommande(this, undefined, devis, undefined, 'ANNULE', devis.etatCommande, devis.etape);
  }

  getColor(etatDevis: any): string{
    if(etatDevis === 'VALIDE') 
      return 'success';
    else if(etatDevis === 'EN_COURS') 
      return 'info'
    else if(etatDevis === 'ANNULE') 
      return 'error'
    else return '';
  }

}
