import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';
import Swal from 'sweetalert2';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  listTache:any
  Taches:Tache[]=[]
  @ViewChild('dt1 ') dt1: Table | undefined;

  constructor(
    private tacheServices:TacheService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllTaches()
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  getAllTaches(){
    this.tacheServices.getAllTaches().subscribe(
      (response)=>{
        this.listTache= response
        this.Taches= response.payload
      }
    )
  }
  openAddTache(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width= '800px'
    dialogConfig.backdropClass = 'bacdrop-modal'
    dialogConfig.disableClose=true
    dialogConfig.position={top:'10px'}
    const dialogRef = this.dialog.open(AddTacheComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(()=>{
      this.getAllTaches();
    })
  }
  openUpdateTache(tache: Tache){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px'
    dialogConfig.backdropClass='bacdrop-modal'
    dialogConfig.disableClose=true
    dialogConfig.position={top:'5px'}
    dialogConfig.data ={tache: tache}
    const dialogRef = this.dialog.open(UpdateTacheComponent, dialogConfig)
    dialogRef.afterClosed().subscribe(()=>{
      this.getAllTaches()
    })
  }
   deleteTacheById(tache: Tache){
    Swal.fire({
    icon:'question',
    title:`<small>Voulez-vous supprimer la tache</small> ${tache.titre} ${tache.createur}?`,
      showDenyButton: true,
      confirmButtonText:'Confirmer',
      denyButtonText:'Annuler',
  }).then((result)=>{
    if (result.isConfirmed){
      this.tacheServices.deleteTacheById(tache.id!).subscribe(
        (response)=>{
          Swal.fire({
            position:'center',
            icon:(response.status== 'OK') ?'success':'error',
            title:`<small>${response.message}</small>`,
            showConfirmButton: false,
            timer:1500
          }).then((result)=>{
            if(result.dismiss && response.status =='OK'){
              this.getAllTaches()
            }
          })
        }
      )
    }
  })

  } 

}
