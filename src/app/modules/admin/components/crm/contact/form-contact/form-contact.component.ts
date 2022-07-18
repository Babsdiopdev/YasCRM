import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  @Input() title: string = '';
  @Input() buttonLabel: string = '';
  @Input() typeOperation: string = '';
  @Input() contact: any;

  typeOptions = [ {value: 'CLIENT'}, {value: 'PROSPECT'} ];
  civiliteOptions = [ {value: 'MR'}, {value: 'MME'}, {value: 'MLLE'} ];

  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createContactForm();
  }

  createContactForm() {
    if(this.typeOperation === 'save') {
      this.contactForm = this.contactService.createContactForm({
        nom: [Validators.required],
        prenom: [Validators.required],
        telephone: [Validators.required],
        email: [Validators.required],
        civilite: [Validators.required],
        pays: [Validators.required],
        fonction: [Validators.required],
        typeContact: [Validators.required],
      });
    } else if(this.typeOperation === 'update') {
      this.contactForm = this.contactService.createContactForm();
      //this.contactForm.setValue(this.contact);
      this.contactForm.get('nom')?.setValue(this.contact.nom);
      this.contactForm.get('prenom')?.setValue(this.contact.prenom);
      this.contactForm.get('telephone')?.setValue(this.contact.telephone);
      this.contactForm.get('email')?.setValue(this.contact.email);
      //this.contactForm.get('civilite')?.setValue(this.contact.civilite);
      this.contactForm.get('pays')?.setValue(this.contact.pays);
      this.contactForm.get('fonction')?.setValue(this.contact.fonction);
      //this.contactForm.get('typeContact')?.setValue(this.contact.typeContact);
    }
    
  }

  onsaveContact() {
    const contact: Contact = {
      nom: this.contactForm.value['nom'],
      prenom:  this.contactForm.value['prenom'],
      telephone: this.contactForm.value['telephone'],
      email: this.contactForm.value['email'],
      civilite: this.contactForm.value['civilite'].value,
      pays: this.contactForm.value['pays'],
      fonction: this.contactForm.value['fonction'],
      typeContact: this.contactForm.value['typeContact'].value
    };

    if(this.typeOperation === 'save') {
      this.saveContact(contact);
    } else if(this.typeOperation === 'update') {
      this.updateContactById(contact)
    }
  }

  saveContact(contact: Contact) {
    this.contactService.saveContact(contact).subscribe(
      (response) => {
        Swal.fire({
          position: 'top-end',
          icon: (response.status === 'OK') ? 'success': 'error',
          title: `<small>${response.message}</small>`,
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
            if(result.dismiss) {
              this.dialog.closeAll();
            }
          }
        );
      }
    );
  }

  updateContactById(contact: Contact) {

    contact.id = this.contact.id;

    this.contactService.updateConactById(contact.id!, contact).subscribe(
      (response) => {
        Swal.fire({
          position: 'top-end',
          icon: (response.status === 'OK') ? 'success': 'error',
          title: `<small>${response.message}</small>`,
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
            if(result.dismiss) {
              this.dialog.closeAll();
            }
          }
        );
      }
    );
  }
}
