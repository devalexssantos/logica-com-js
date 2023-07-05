//DESAFIO DIA 02 - 15/04/2023
/*
COMO SABER SE COMPENSA MAIS ABASTECER COM ETANOL OU GASOLINA
*Com o aumento no preço da gasolina devido a volta da cobrança dos impostos, uma alternativa mais economica
é o abastecimento com etanol. Ao parar para abastecer em um posto vi que havia uma plaquinha na bomba informando 
uma porcentagem, e informações se compensa mais abastecer com etanol que com gasolina. Pensei em fazer algo mais
intuitivo com JS para usar de forma simples e prática no dia-a-dia.

-- DADOS --
Caso o preço do etanol seja até 70% o valor da gasolina, compensa abastecer mais com etanol
*/

let precoDoEtanol;
let precoDaGasolina;

function calcularSeCompensaAbastecerComEtanol(PrecoEtanol, precoGasolina) {
    let compensaOuNao;
    let calculoDoEtanol = (PrecoEtanol * 100) / precoGasolina;
    if(calculoDoEtanol > 70) {
        compensaOuNao = ' NÃO ';
    } else {
        compensaOuNao = ' ';
    }

    return `O preço do etanol está: ${calculoDoEtanol.toFixed(1)}% do preço da gasolina, isso indica que${compensaOuNao}compensa abastecer com ETANOL.`;
};

console.log(calcularSeCompensaAbastecerComEtanol(7, 10));
console.log(calcularSeCompensaAbastecerComEtanol(3.27, 4.79)); //Preço atual na minha cidade hoje, Campina Grande
console.log(calcularSeCompensaAbastecerComEtanol(7.10, 10));