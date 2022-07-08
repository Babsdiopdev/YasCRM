import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  contact!: Contact;

  title: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.getContact();

    this.title = `Modification ${this.contact.prenom} ${this.contact.nom}`;
  }

  getContact() {
    this.contact = this.data.contact;
  }
}
