import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import Swal from 'sweetalert2';
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  title: string = 'Ajout de contact';

  constructor() {}

  ngOnInit(): void {    
  }
}
