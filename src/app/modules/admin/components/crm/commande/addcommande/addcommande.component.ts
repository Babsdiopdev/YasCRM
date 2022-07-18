import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addcommande',
  templateUrl: './addcommande.component.html',
  styleUrls: ['./addcommande.component.scss']
})
export class AddcommandeComponent implements OnInit {
  
  commandeForm!: FormGroup;
  @Input() buttonLabel: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
