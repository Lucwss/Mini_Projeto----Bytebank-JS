import { Conta } from "../Conta/Conta.js"

export class ContaPoupanca extends Conta{
  constructor(agencia, cliente, saldoInicial = 0) {
    super(agencia, cliente, saldoInicial)
  }


  sacar(valor) {

    let taxa = 1.02;
    return super._sacar(taxa, valor);
  }
}