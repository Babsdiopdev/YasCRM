import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/serices/contact.service';

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
    private contactService: ContactService
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
      (response: any) => {
        this.contactResponse = response;
        this.contacts = response.payload;
      }
    );
  }

  getStatistiqueOfContact() {
    this.contactService.getStatistiquesofContact().subscribe(
      (response: any) => this.stats = response.payload
    )
  }

  ondeleteContactById(id: number) {
    this.contactService.deleContactById(id).subscribe(
      (response: any) => {
        alert(response.message);
        this.getAllContacts();
      }
    )
  }

}
