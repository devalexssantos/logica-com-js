//DESAFIO DIA 03 - 24/04/2023
/*
CALCULO DE QUANTO UMA PESSOA RECEBERÁ POR HORA EXTRA
*Esses dias ao receber o meu conta-cheque (holerite), verifiquei que algumas horas-extras não haviam sido pagasa,
após verificar que o saldo de X em horas seriam pagas, decidi buscar informações de como fazer o cálculo de quanto 
seria pago em dinheiro. Então decidi fazer um algoritmo que calcule qual o valor a receber mediante a quantidade de horas

-- DADOS -- 
-O valor da hora é calculado dividindo o valor do salário pela quantidade de horas trabalhadas
-A hora-extra pode ser de 50% ou 100%
Calculo:
Valor da hora x 1,5 para 50%
Valor da hora x 2 para 100%
*/

let salarioBase;
let quantidadeHorasPorMes;
let horasExtrasMes;
let tipoDeHorasExtras;

function calcularValorAdasHorasExtras(salario, horas, horasExtras, tipo) {
    let valorDaHoraTrabalhada = salario / horas;
    
    if(horasExtras <= 0) {
        return 'Calculo de horas-extras impossível.'
    } else{
       let valorASerPagoPelasHorasExtras = tipo == '50%' ? (horasExtras * valorDaHoraTrabalhada) * 1.5 : (horasExtras * valorDaHoraTrabalhada) * 2;
       return `Salário base: ${salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} | Horas Normais: ${horas}h | Horas-extras trabalhadas: ${horasExtras}h | Tipo de horas: ${tipo} | Valor a ser pago: ${valorASerPagoPelasHorasExtras.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}.`;
    }

    
};

console.log(calcularValorAdasHorasExtras(1320, 220, 0, '50%'));
console.log(calcularValorAdasHorasExtras(1320, 220, 1, '100%'));
console.log(calcularValorAdasHorasExtras(1365, 220, 11.35, '50%'));
console.log(calcularValorAdasHorasExtras(1365, 220, 11.35, '100%'));
console.log(calcularValorAdasHorasExtras(1365, 220, 11, '50%'));