
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Rv } from 'src/app/models/rv.model';
import { RvService } from 'src/app/services/rv.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddRVComponent } from './add-rv/add-rv.component';
import { UpdateRvComponent } from './update-rv/update-rv.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rv',
  templateUrl: './rv.component.html',
  styleUrls: ['./rv.component.scss']
})
export class RvComponent implements OnInit {

  @ViewChild('dt1 ') dt1: Table | undefined;
  rvResponse: any;
  rvs: Rv[] = [];
  stats: any;

  constructor(private rvService: RvService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllRvs();

  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  getAllRvs() {
    this.rvService.getAllRv().subscribe(
      (response: any) => {
        this.rvResponse = response;
        this.rvs = response.payload;
      }
    );
  }
   openAddRv() {
     const dialogConfig = new MatDialogConfig();
     dialogConfig.width = '730px';
     dialogConfig.height = '530px';
     dialogConfig.backdropClass = 'bacdrop-modal';
     dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(AddRVComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => { 
      this.getAllRvs(); 
    })
  }

UpdateRv(rv:Rv){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '730px';
  dialogConfig.height = '500';
  dialogConfig.backdropClass = 'bacdrop-modal';
  dialogConfig.disableClose = true;
  dialogConfig.data = {'rv':rv};
  const dialogRef = this.dialog.open(UpdateRvComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(result => {
    this.getAllRvs();
  })
}


ondeleteRvtById(rv: Rv) {
  Swal.fire({
    icon: 'question',
    title: `<small>Voulez-vous supprimer le rv</small><br /> ${rv.titre} du ${rv.date_debut}?`,
    showDenyButton: true,
    confirmButtonText: 'Confirmer',
    denyButtonText: 'Annuler',
  }).then((result) => {
    if (result.isConfirmed) {
      this.rvService.deleRvById(rv.id!).subscribe(
        (response) => {
          Swal.fire({
            position: 'top-end',
            icon: (response.status === 'OK') ? 'success': 'error',
            title: `<small>${response.message}</small>`,
            showConfirmButton: false,
            timer: 1500
          }).then((result) => {
            if(result.dismiss && response.status === 'OK') {
              this.getAllRvs();
              //this.getStatistiqueOfContact();
            }
          });
        }
      );
    }
  })
}



// function AddRvComponent(AddRvComponent: any, dialogConfig: MatDialogConfig<any>) {
//   throw new Error('Function not implemented.');
 }

