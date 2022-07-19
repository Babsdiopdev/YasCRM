<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';

=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { Commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';
import Swal from 'sweetalert2';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
>>>>>>> a648466a0ca77188e2c440b3aef4c83d33e28874

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
<<<<<<< HEAD
  commandeResponse:any;
  commandes:commande[]=[]
  dt1: any;

  constructor(
    commandeService:CommandeService
  ) { }

  ngOnInit(): void {
  }
=======

  @ViewChild('dt1 ') dt1: Table | undefined;

  commandeResponse: any;
  commandes: Commande[] = [];

  constructor(
    private commandeService: CommandeService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getOnlyCommande();
    
  }

>>>>>>> a648466a0ca77188e2c440b3aef4c83d33e28874
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

<<<<<<< HEAD
}
=======
  getOnlyCommande() {
    this.commandeService.getOnlyCommandes().subscribe(
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
      this.getOnlyCommande();
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
      this.getOnlyCommande();
    });
  }

  ondeleteCommandeById(commande: Commande) {}
}
>>>>>>> a648466a0ca77188e2c440b3aef4c83d33e28874
