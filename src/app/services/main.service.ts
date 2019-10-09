import { Injectable } from '@angular/core';
import { Transacoes } from '../models/Transacoes';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  transacoes: Transacoes[];

  constructor() {
    this.transacoes = [];
   }

   getList() {
    if (localStorage.getItem('trans') === null) {
      return this.transacoes;
    } else {
      this.transacoes = JSON.parse(localStorage.getItem('trans'));
      return this.transacoes;
    }
   }

   addList(transacoes: Transacoes) {
    this.transacoes.push(transacoes);
    let trans: Transacoes[] = [];
    if (localStorage.getItem('trans') === null) {
      trans.push(transacoes);
      localStorage.setItem('trans', JSON.stringify(trans));
    } else {
      trans = JSON.parse(localStorage.getItem('trans'));
      trans.push(transacoes);
      localStorage.setItem('trans', JSON.stringify(trans));
    }

   }

   deleteItem(transacoes: Transacoes) {
    for (let i = 0; i < this.transacoes.length; i++) {
      if (transacoes == this.transacoes[i]) {
        this.transacoes.splice(i, 1);
        localStorage.setItem('trans', JSON.stringify(this.transacoes));
      }
    }
   }
}
