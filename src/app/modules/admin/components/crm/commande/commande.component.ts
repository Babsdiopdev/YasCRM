import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { CommandeHelper } from 'src/app/helpers/commande/commande.helper';
import { Commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';
import Swal from 'sweetalert2';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  @ViewChild('dt1 ') dt1: Table | undefined;

  commandeResponse: any;
  commandes: Commande[] = [];

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
    this.commandeService.getAllCommandes('commande').subscribe(
      (response) => {
        this.commandeResponse = response;
        this.commandes = response.payload;
      }
    );
  }

  onopenAddCommande() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '10px'};
    const dialogRef = this.dialog.open(AddCommandeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllCommandes();
    });
  }

  openupdateCommande(commande: Commande) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '5px' };
    dialogConfig.data = { commande: commande }
    const dialogRef = this.dialog.open(UpdateCommandeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllCommandes();
    });
  }

  ondeleteCommandeById(commande: Commande) {
    Swal.fire({
      icon: 'question',
      title: `<small>Voulez-vous supprimer la commande</small><br /> ${commande.reference} ?`,
      showDenyButton: true,
      confirmButtonText: 'Confirmer',
      denyButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.commandeService.deleteCommandeById(commande.id!).subscribe(
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
  
  onvalidateCommande(commande: Commande) {
    const commandeHelper: CommandeHelper = new CommandeHelper(this.commandeService);
    commandeHelper.updateCommande(this, undefined, commande, undefined, commande.etatDevis, 'VALIDE', commande.etape);
  }

  onCancelCommande(commande: Commande) {
    const commandeHelper: CommandeHelper = new CommandeHelper(this.commandeService);
    commandeHelper.updateCommande(this, undefined, commande, undefined, commande.etatDevis, 'ANNULE', commande.etape);
  }

  ongenerateFacture(commande: Commande) {}

  getColor(etatCommande: any): string{
    if(etatCommande === 'VALIDE') 
      return 'success';
    else if(etatCommande === 'EN_COURS') 
      return 'info'
    else if(etatCommande === 'ANNULE') 
      return 'error'
    else return '';
  }
}