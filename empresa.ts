import Telefone from "./telefone";
import Endereco from "./endereco";
import Funcionario from "./funcionario";

export default class Empresa{
    public razaoSocial: string;
    public nomeFantasia: string;
    private cnpj: string;
    public endereco: Endereco;
    public funcionario: Funcionario[];
    public telefone: Telefone[];

    constructor(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, funcionario: Funcionario[], telefone: Telefone[]){
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.funcionario = funcionario;
        this.telefone = telefone;
    }
}