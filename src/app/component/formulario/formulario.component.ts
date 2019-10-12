import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  myForm: FormGroup;
  selector = [];
  constructor(private fb: FormBuilder, public mainService: MainService) {
  }

  ngOnInit() {

    this.myForm = this.fb.group({
      tipo_trans: ['', Validators.required],
      nome_producto: ['', Validators.required],
      valor: ['', Validators.required],
    });
  }
  async saveData() {
    this.mainService.addList(this.myForm.value);
    return false;
    }

  }

