// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Table } from 'primeng/table';
// import { Rv } from 'src/app/models/rv.model';
// import { RvService } from 'src/app/serices/rv.service';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { AddRVComponent } from './add-rv/add-rv.component';

// @Component({
//   selector: 'app-rv',
//   templateUrl: './rv.component.html',
//   styleUrls: ['./rv.component.scss']
// })
// export class RvComponent implements OnInit {

//   @ViewChild('dt1 ') dt1: Table | undefined;
//   rvResponse: any;
//   rvs: Rv[] = [];
//   //stats: any;

//   constructor(private rvService: RvService, private dialog: MatDialog) { }

//   ngOnInit(): void {
//     this.getAllRvs();

//   }
//   applyFilterGlobal($event: any, stringVal: any) {
//     this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
//   }
//   getAllRvs() {
//     this.rvService.getAllRv().subscribe(
//       (response: any) => {
//         this.rvResponse = response;
//         this.rvs = response.payload;
//       }
//     );
//   }
//   // openAddRv() {
//   //   const dialogConfig = new MatDialogConfig();
//   //   dialogConfig.width = '720px';
//   //   dialogConfig.height = '500px';
//   //   dialogConfig.backdropClass = 'bacdrop-modal';
//   //   dialogConfig.disableClose = true;
//   // const dialogRef = this.dialog.open(AddRVComponent, dialogConfig);
//   //   dialogRef.afterClosed().subscribe(result => {
//   //     console.log(`Dialog result: ${result}`);
//   //   });
//   //  }

//    openRv(){
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.width = '720px';
//     dialogConfig.height = '600';
//     dialogConfig.backdropClass = 'bacdrop-modal';
//     dialogConfig.disableClose = true;
//     this.dialog.open(AddRVComponent, dialogConfig)
//     .afterClosed().subscribe(
//       result => {
//         this.getAllRvs();}
//     )

//   }

//   }



// function AddRvComponent(AddRvComponent: any, dialogConfig: MatDialogConfig<any>) {
//   throw new Error('Function not implemented.');
// }

