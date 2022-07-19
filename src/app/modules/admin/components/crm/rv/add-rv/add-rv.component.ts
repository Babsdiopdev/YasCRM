import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rv } from 'src/app/models/rv.model';
import { RvService } from 'src/app/serices/rv.service';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-add-rv',
  templateUrl: './add-rv.component.html',
  styleUrls: ['./add-rv.component.scss']
})

export class AddRVComponent implements OnInit {
  cities: City[];
rvResponse: any;
  rvs: Rv[] = [];
    selectedCity!: City;


  constructor(private rvService:RvService) {
   this.cities = [

      {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
       {name: 'London', code: 'LDN'},
     {name: 'Istanbul', code: 'IST'},
       {name: 'Paris', code: 'PRS'}
   ]
   }

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
