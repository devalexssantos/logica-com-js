//DESAFIO DIA 01 - 14/04/2023
/*
QUANTO UMA PESSOA PRECISA DE ÁGUA POR DIA
*Após passar por uma infecção urinária me atentei quanto a reidratação do corpo, e após uma pesquisa
sobre o assunto vi que a uma tabela que ajuda a saber qual a quantidade que uma pessoa precisa de água por dia

-- TABELA -- 
Até os 17 anos - 40ml/kg
18 aos 55 anos - 35ml/kg
56 aos 65 anos - 30ml/ks
66 + - 25ml/kg

OBS: Caso uma pessoa pratique atividade física, é recomendado de 500ml a 1L de água por hora de atividade (considerando a média 75ml)
*/

let idade;
let peso;
let quantidadeIdealPorKg;
let atividadeFisica;
let tempoDeAtividade;

function  calcularQuantidadeIdealDeAguaPorDia(idade, peso, atividadeFisica, tempoDeAtividade) { 
    if(idade <= 0 || peso <= 0){
        return 'Impossível calcular, idade e/ou peso inválidos'
    } else {
        if(idade <= 17) {
            quantidadeIdealPorKg = 0.40;
        } else if(idade > 17 && idade <= 55) {
            quantidadeIdealPorKg = 0.35;
        } else if(idade > 55 && idade <= 65) {
            quantidadeIdealPorKg = 0.30;
        } else {
            quantidadeIdealPorKg = 0.25;
        }

        if(atividadeFisica == true) {
            this.consumoPorHoraDeAtividadeFisica = (tempoDeAtividade * 0.75);
            this.informacaoSeHouverAtividadFisica = `. Sendo ${(peso * quantidadeIdealPorKg / 10).toFixed(3).replace('.', ',')}L devido a sua fisiologia, e ${(this.consumoPorHoraDeAtividadeFisica).toFixed(3).replace('.', ',')}L, devido a atividade física realizada.`;
        } else {
            this.consumoPorHoraDeAtividadeFisica = 0;
            this.informacaoSeHouverAtividadFisica = '.';
        }
        
        let consumoIdealDiarioDeAgua = ((peso * quantidadeIdealPorKg) / 10) + this.consumoPorHoraDeAtividadeFisica;
        return `Você deve beber ${consumoIdealDiarioDeAgua.toFixed(3).replace('.', ',')}L de água por dia${this.informacaoSeHouverAtividadFisica}`;
    }
}

console.log(calcularQuantidadeIdealDeAguaPorDia(0, 0));
console.log(calcularQuantidadeIdealDeAguaPorDia(30, 67.69, false));
console.log(calcularQuantidadeIdealDeAguaPorDia(30, 67.69, true, 0.45));
console.log(calcularQuantidadeIdealDeAguaPorDia(17, 67.69, false));
console.log(calcularQuantidadeIdealDeAguaPorDia(17, 67.69, true, 0.45));
console.log(calcularQuantidadeIdealDeAguaPorDia(66, 80, true, 1));