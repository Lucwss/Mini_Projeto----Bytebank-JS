export class Funcionario {
  constructor(nome, salario, cpf) {
    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1;
    this._senha;
  }

  get senha() {
    throw new Error('Você não pode acessar a senha por este método');
  }

  autenticar(senha) {
    return senha == this._senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }
}