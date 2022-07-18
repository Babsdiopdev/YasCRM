import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rv } from 'src/app/models/rv.model';
import { RvService } from 'src/app/serices/rv.service';

@Component({
  selector: 'app-add-rv',
  templateUrl: './add-rv.component.html',
  styleUrls: ['./add-rv.component.scss']
})
export class AddRVComponent implements OnInit {

  constructor(private rvService:RvService) { }

  ngOnInit(): void {
  }
  public onAddRv(addForm: NgForm): void{
    document.getElementById('addContact')?.click();
 this.rvService.saveRv(addForm.value).subscribe(
   (response:Rv) =>{
     console.log(response);
 },
   (error:HttpErrorResponse) =>{
     alert(error.message);
   }
 );
 }
}
