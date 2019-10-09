import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Transacoes } from 'src/app/models/Transacoes';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  trans: Transacoes[] = [];
  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.trans = this.mainService.getList();
    console.log(this.trans);
  }

  deleteTrans(trans: Transacoes) {
    if (confirm('Voce quere eliminar isse elemento?')) {
      this.mainService.deleteItem(trans);
      return false;
    }
  }
  getTotalCost() {
    return this.trans.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }
}
