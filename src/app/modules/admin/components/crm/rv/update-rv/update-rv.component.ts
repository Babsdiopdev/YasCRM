import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';
import { Employe } from 'src/app/models/employe.model';
import { Rv } from 'src/app/models/rv.model';
import { ContactService } from 'src/app/services/contact.service';
import { EmployeService } from 'src/app/services/employe.service';
import { RvService } from 'src/app/services/rv.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-rv',
  templateUrl: './update-rv.component.html',
  styleUrls: ['./update-rv.component.scss']
})
export class UpdateRvComponent implements OnInit {

  contactForm!: FormGroup;
  // rv!: Rv;
   id!: number;

  rvResponse: any;
  contacts: Contact[] = [];

rv: any = {};
  rvs: Rv[] = [];
  employes:Employe[] =[];



  constructor(private rvService:RvService, private contactService: ContactService,
    private employeService:EmployeService, private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getAllContacts();
   this.getAllEmploye()
   this.rv= this.data.rv;

  }
   public onModifierRv(rv:Rv,addForm: NgForm): void{

    document.getElementById('addContact')?.click();
      addForm.controls['contactId'].setValue(addForm.value.contactId.id)
      addForm.controls['employeId'].setValue(addForm.value.employeId.id)

      //alert(JSON.stringify(addForm.value))

      this.rvService.updateRvById(this.data.rv.id,addForm.value).subscribe(
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
  //   (response:Rv) =>{
  //     this.dialog.closeAll
  //     console.log(response);
  // },
  //   (error:HttpErrorResponse) =>{
  //     alert(error.message);
  //   }
  );
  }

 //public onModifRv(rv:Rv,addForm:NgForm): void{
//  // document.getElementById('addContact')?.click();
//   addForm.controls['contactId'].setValue(addForm.value.contactId.id)
//    addForm.controls['employeId'].setValue(addForm.value.employeId.id)

// this.rvService.updateRvById(this.id,this.rv).subscribe(
//  (response:Rv) =>{
//    console.log(response);
// },
//  (error:HttpErrorResponse) =>{
//    alert(error.message);
//    //contact.reset();
//  }
// );
// }
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
