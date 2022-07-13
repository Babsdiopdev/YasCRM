import { Component, OnInit } from '@angular/core';
import { commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  commandeResponse:any;
  commandes:commande[]=[]
  dt1: any;

  constructor(
    commandeService:CommandeService
  ) { }

  ngOnInit(): void {
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
