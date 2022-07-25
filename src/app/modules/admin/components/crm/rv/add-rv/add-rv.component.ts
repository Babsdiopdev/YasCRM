import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { Employe } from 'src/app/models/employe.model';
import { Rv } from 'src/app/models/rv.model';
import { ContactService } from 'src/app/services/contact.service';
import { EmployeService } from 'src/app/services/employe.service';

import { RvService } from 'src/app/services/rv.service';
@Component({
  selector: 'app-add-rv',
  templateUrl: './add-rv.component.html',
  styleUrls: ['./add-rv.component.scss']
})

export class AddRVComponent implements OnInit {
  contactForm!: FormGroup;

  rvResponse: any;
contacts: Contact[] = [];

  rvs: Rv[] = [];
employes:Employe[] =[];



  constructor(private rvService:RvService, private contactService: ContactService,
    private employeService:EmployeService) { }

  ngOnInit(): void {
    this.getAllContacts();
   this.getAllEmploye()
  }
  public onAddRv(addForm: NgForm): void{
    document.getElementById('addContact')?.click();
    addForm.controls['contactId'].setValue(addForm.value.contactId.id)
    addForm.controls['employeId'].setValue(addForm.value.employeId.id)

 this.rvService.saveRv(addForm.value).subscribe(
   (response:Rv) =>{
     console.log(response);
 },
   (error:HttpErrorResponse) =>{
     alert(error.message);
   }
 );
 }
 getAllContacts() {
  this.contactService.getAllContacts().subscribe(
    (response) => this.contacts = response.payload
  );
}
  getAllEmploye() {
  this.employeService.getAllEmploye().subscribe(
    (response) => this.employes = response.payload
  );
}
}
