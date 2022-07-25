import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

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

}
