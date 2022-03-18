//Classe Abstrata

export class Conta {

  constructor(agencia, cliente, saldoInicial = 0) {
    if(this.constructor == Conta) {
      throw new Error('Você não deveria instanciar um objeto do tipo Conta diretamente, pois ela é uma classe abstrata');
    }
    this._agencia = agencia;
    this._cliente = cliente;
    this._saldo = saldoInicial;

  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }
  //Método Abstrado
  sacar(valor) {
    throw new Error('O método Sacar da conta é abstrato');
  }

  _sacar(taxa, valor) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {

    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);

  }
}