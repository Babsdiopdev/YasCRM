
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
// import { HttpErrorResponse } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Rv } from 'src/app/models/rv.model';
// import { RvService } from 'src/app/serices/rv.service';
// interface City {
//   name: string,
//   code: string
// }
// @Component({
//   selector: 'app-add-rv',
//   templateUrl: './add-rv.component.html',
//   styleUrls: ['./add-rv.component.scss']
// })

// export class AddRVComponent implements OnInit {
//   cities: City[];
// rvResponse: any;
//   rvs: Rv[] = [];
//     selectedCity!: City;


//   constructor(private rvService:RvService) {
//    this.cities = [

//       {name: 'New York', code: 'NY'},
//   {name: 'Rome', code: 'RM'},
//        {name: 'London', code: 'LDN'},
//      {name: 'Istanbul', code: 'IST'},
//        {name: 'Paris', code: 'PRS'}
//    ]
//    }

//   ngOnInit(): void {
//   }
//   public onAddRv(addForm: NgForm): void{
//     document.getElementById('addContact')?.click();
//  this.rvService.saveRv(addForm.value).subscribe(
//    (response:Rv) =>{
//      console.log(response);
//  },
//    (error:HttpErrorResponse) =>{
//      alert(error.message);
//    }
//  );
//  }
// }
