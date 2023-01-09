var precoGasolina = parseFloat(prompt("Insira o preço da gasolina: "));
var precoEtanol = parseFloat(prompt("Insira o preço do etanol: "));
var calculo = (precoGasolina * 0.7);
    if (calculo < precoEtanol) {
    console.log("Vale a pena abastecer com gasolina!");
        }
    if (calculo == precoEtanol || calculo > precoEtanol) {
    console.log("Vale a pena abastecer com Etanol!");
        }

