import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from 'src/app/models/Config.model';
import { ConfigurationService } from 'src/app/services/configuration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  configs!: Config;

  tvaForm!: FormGroup;

  constructor(
    private configurationService: ConfigurationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getConfigs();

    this.tvaForm = this.createTvaForm();
  }

  createTvaForm(): FormGroup {
    return this.fb.group({
      tva: [null, Validators.required]
    });
  }

  getConfigs() {
    this.configurationService.getConfigs().subscribe(
      (response) => {
        this.configs = response.payload
      }
    );
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
    );
  }

}
