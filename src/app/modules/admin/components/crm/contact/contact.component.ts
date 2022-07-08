import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('dt1 ') dt1: Table | undefined;

  contactResponse: any;
  contacts: Contact[] = [];
  stats: any;

  constructor(
    private contactService: ContactService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllContacts();
    this.getStatistiqueOfContact()
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getAllContacts() {
    this.contactService.getAllContacts().subscribe(
      (response) => {
        this.contactResponse = response;
        this.contacts = response.payload;
      }
    );
  }

  getStatistiqueOfContact() {
    this.contactService.getStatistiquesofContact().subscribe(
      (response) => this.stats = response.payload
    )
  }

  ondeleteContactById(contact: Contact) {
    Swal.fire({
      icon: 'question',
      title: `<small>Voulez-vous supprimer le contact</small><br /> ${contact.prenom} ${contact.nom} ?`,
      showDenyButton: true,
      confirmButtonText: 'Confirmer',
      denyButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactService.deleContactById(contact.id!).subscribe(
          (response) => {
            Swal.fire({
              position: 'top-end',
              icon: (response.status === 'OK') ? 'success': 'error',
              title: `<small>${response.message}</small>`,
              showConfirmButton: false,
              timer: 1500
            }).then((result) => {
              if(result.dismiss && response.status === 'OK') {
                this.getAllContacts();
                this.getStatistiqueOfContact();
              }
            });
          }
        );
      }
    })
  }

  onopenAddContact() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '10px'};
    const dialogRef = this.dialog.open(AddContactComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllContacts();
      this.getStatistiqueOfContact();
    });
  }

  openupdateContact(contact: Contact) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth = '800px';
    dialogConfig.backdropClass = 'bacdrop-modal';
    dialogConfig.disableClose = true;
    dialogConfig.position = { top: '5px' };
    dialogConfig.data = { contact: contact}
    const dialogRef = this.dialog.open(UpdateContactComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getAllContacts();
    });
  }

}
