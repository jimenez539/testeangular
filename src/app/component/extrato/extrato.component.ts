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
  }

  deleteTrans(trans: Transacoes) {
    if (confirm('Voce quere eliminar isse elemento?')) {
      this.mainService.deleteItem(trans);
      return false;
    }
  }
  getTotalCost() {
    if ( localStorage.getItem('trans') !== 'undefined' && localStorage.getItem('trans') !== null ) {
      const trans = localStorage.getItem('trans');
      const jsonTrans = JSON.parse(trans);
      let totalTrans = 0;
      jsonTrans.forEach(element => {
        totalTrans = totalTrans + Number(element.valor);
      });

      return totalTrans;
    }
    return 0;

  }
}
