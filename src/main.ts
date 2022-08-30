import { Passageiro } from "./Passageiro";
import { Aeroporto } from "./Aeroporto";
import { Aviao } from "./Aviao";
import { Bagagem } from "./Bagagem";
import { Bilhete } from "./Bilhete";
import { CiaAerea } from "./CiaAerea";
import { Economica } from "./Economica";
import { Endereco } from "./Endereco";
import { Executiva } from "./Executiva";
import { Funcionario } from "./Funcionario";
import { Horario } from "./Horario";
import { Papel } from "./Papel";
import { Pessoa } from "./Pessoa";
import { Primeira } from "./Primeira";
import { Rota } from "./Rota";
import { SituacaoBilheteEnum } from "./SituacaoBilheteEnum";
import { TipoBagagemEnum } from "./TipoBagagemEnum";
import { TipoBilheteEnum } from "./TipoBilheteEnum";

// aeroportos destindo e partida
const AeroportoPartida = new Aeroporto ('Airlines Aeroporto', '9991');
    const aeroportoP = new Endereco ('Jose Rampanelli', 0 , 'Cemiterio', 'Sol Nascente', 'Palma Sola', 'SC', 'BR');
const AeroportoDestino = new Aeroporto ('Aeroporto Interlagos', '3221');
    const aeroportoD = new Endereco ('Sao Joaquim', 10, 'Bar do Ze', 'Azaleia', 'Sao Paulo', 'SP', 'BR');

// informacoes do aviao
const aviao = new Aviao ('1324', 200, 60, 100, 300);
const CompanhiaAerea = new CiaAerea ("TAM");
const infoPiloto = new Papel ('Cleberson','Piloto do Aviao');

//funcionario
const funcionario = new Funcionario('Joao', 'joaozin@gmail.com', '92445566', 'Jao', '12322', new Date(20,7,1999), '1234', 'AK2');

//info para viagem
const PesoBagagem = new Bagagem (32);
const BilheteEconomico = new Economica();
    BilheteEconomico.tipoBilhete(10);
    BilheteEconomico.getAssento(10);
    BilheteEconomico.getNumero(10);

const BilheteExecutiva = new Executiva();
    BilheteEconomico.tipoBilhete(20);
    BilheteEconomico.getAssento(20);
    BilheteEconomico.getNumero(20);

const BilhetePrimeira= new Primeira();
    BilheteEconomico.tipoBilhete(30);
    BilheteEconomico.getAssento(30);
    BilheteEconomico.getNumero(30);

//passageiro
const passageiro = new Passageiro('Leonardo Hartmann','leonardohartmann03@gmail.com', '991510062', 'Leonardo', '1234',new Date(6,9,2003), '1234', '1234');
    const endereco = new Endereco('Jose Rampanelli', 5 , 'Cemiterio', 'Sol Nascente', 'Palma Sola', 'SC', 'BR');

//viagem em andamento
const rota = new Rota ('Voo28','Sao Paulo - Curitiba');
const horario = new Horario(222, new Date(3,12,2022), new Date (4,12,2022), 30, 20, 10);

console.log('   Info da Viagem  ');
console.log(aviao);
console.log(AeroportoPartida);
console.log(AeroportoDestino);
console.log(PesoBagagem);
console.log(CompanhiaAerea);
console.log(BilheteExecutiva);
console.log(BilhetePrimeira);
console.log(aeroportoP);
console.log(aeroportoD);
console.log(passageiro);
console.log(endereco);
console.log(infoPiloto);
console.log(funcionario);
console.log(rota);
console.log(horario);