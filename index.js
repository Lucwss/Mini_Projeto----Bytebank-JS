import { Funcionario } from "./Funcionarios/Funcionario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";


const diretor = new Diretor('Cleiton', 10000, 43839126215);
const gerente = new Gerente('Mauro', 6000, 34463425489);
const cliente = new Cliente('Josue', 12345678900, '456');

gerente.cadastrarSenha('123');
diretor.cadastrarSenha('321');

const autenticaGerente = SistemaAutenticacao.login(gerente, '123');
const autenticaDiretor = SistemaAutenticacao.login(diretor, '321')

console.log(autenticaGerente, autenticaDiretor);

const autenticaCliente = SistemaAutenticacao.login(cliente, '456');

console.log(autenticaCliente);