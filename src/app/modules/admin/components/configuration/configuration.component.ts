import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationService } from 'src/app/services/configuration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  panelToggle: boolean = false;

  tvaForm!: FormGroup;

  constructor(
    private configurationService: ConfigurationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.tvaForm = this.createTvaForm();
  }

  createTvaForm(): FormGroup {
    return this.fb.group({
      tva: ['', Validators.required]
    });
  }

  onupdateArticleByTva() {
    const tva: number = this.tvaForm.value['tva'];
    this.configurationService.updateAllArticlesByTva(tva).subscribe(
      (response) => {
        Swal.fire({
          position: 'top-end',
          icon: (response.status === 'OK') ? 'success': 'error',
          title: `<small>${response.message}</small>`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

}
