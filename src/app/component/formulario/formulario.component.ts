import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Transacoes } from 'src/app/models/Transacoes';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  selector: Transacoes[] = [
    {tipo_trans: 'Venta'},
    {tipo_trans: 'Compra'}
  ];

  constructor(public mainService: MainService) {
  }

  ngOnInit() {
  }
  saveData(newNome: HTMLInputElement, newValor: HTMLInputElement, newSelect: HTMLSelectElement) {
      newSelect = JSON.parse(JSON.stringify(this.selector));
      console.log(newNome.value, newValor.value, newSelect.value),
      this.mainService.addList ({
        tipo_trans: JSON.stringify(newSelect.value),
        nome_producto: JSON.stringify(newNome.value),
        valor: JSON.parse(newValor.value),
      });
      newNome.value = '';
      newValor.value = '';
      newNome.focus();
      return false;
    }
  }

