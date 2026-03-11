/*Desenvolva o código fonte, das classes, a partir do diagrama UML*/
import Empresa from "./empresa";
import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";
import Descritor from "./descritor";

let endereco= new Endereco(321,"Av. dos Falamansas", "Jardim Dom Quixote", "Minas Gerais")
let telefone = new Telefone("012", "966330012")
let funcionario = new Funcionario ("Bruce Wayyyyne", "010", "598.693.654-00", endereco, telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empresa = new Empresa("Servicos e tals LTDA", "Mercado Preso", "569.125.369-77", endereco, funcionarios, telefones)
let descritor = new Descritor()
descritor.descrever(empresa)

