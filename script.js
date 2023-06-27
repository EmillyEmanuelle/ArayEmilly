function mostrarImagem() {
    var imgElement = document.getElementById("img");
    imgElement.src = "gatos-no-dia-dos-namorados-26.jpg";
}

function criarObjeto() {
    var nomeObjeto = document.getElementById("nomeInput").value;
    var valor = document.getElementById("valorInput").value;

    // Criar o objeto com base no nome e valor inseridos pelo usuário
    var objeto = {};
    objeto[nomeObjeto] = valor;

    // Exibir o objeto na saída
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = JSON.stringify(objeto);
}


function aplicarMap() {
    // Obtém o valor do input
    var input = document.getElementById("numerosInputMap").value;

    // Converte o valor em uma matriz de números
    var numeros = input.split(",").map(function (item) {
        return parseInt(item.trim());
    });

    // Aplica o map personalizado
    var resultado = numeros.map(function (item) {
        // Implemente sua lógica personalizada aqui
        // Neste exemplo, multiplicamos cada número por 2
        return item * 2;
    });

    // Exibe o resultado no elemento HTML de saída
    document.getElementById("resultadoMap").textContent = resultado.join(", ");
}

function aplicarForEach() {
    // Obtém o valor do input
    var input = document.getElementById("gatinhosInputForEach").value;

    // Converte o valor em uma matriz de nomes de gatinhos
    var nomesGatinhos = input.split(",").map(function (item) {
        return item.trim();
    });

    // Aplica o forEach personalizado
    var resultado = [];
    nomesGatinhos.forEach(function (gatinho) {
        // Adiciona uma frase sobre cada gatinho ao resultado
        resultado.push("O nome do gatinho é " + gatinho);
    });

    // Exibe o resultado no elemento HTML de saída
    document.getElementById("resultadoForEach").textContent = resultado.join(", ");
}











function encontrarMaiorNumero() {
    var numerosInput = document.getElementById('numerosInput').value;
    var numerosArray = numerosInput.split(',').map(Number);

    var primeiroMaior = numerosArray.find(function (numero) {
        return numero > 18;
    });

    document.getElementById('resultado4').innerHTML = "O primeiro número maior que 18 é: " + primeiroMaior;
}
function aplicarFilter() {
    // Obtém o valor do input
    var input = document.getElementById("pesosGatinhosInputFilter").value;

    // Converte o valor em uma matriz de pesos dos gatinhos
    var pesosGatinhos = input.split(",").map(function (item) {
        return parseFloat(item.trim());
    });

    // Aplica o filter personalizado
    var resultado = pesosGatinhos.filter(function (peso) {
        // Filtra apenas os gatinhos com peso maior que 3kg
        return peso > 3;
    });

    // Exibe o resultado no elemento HTML de saída
    document.getElementById("resultadoFilter").textContent = "Gatinhos gordos: " + resultado.join("kg, ");
}

function aplicarReduce() {
    // Obtém o valor do input
    var input = document.getElementById("numerosInputReduce").value;

    // Converte o valor em uma matriz de números
    var numeros = input.split(",").map(Number);

    // Aplica o reduce personalizado para somar todos os números
    var soma = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    });

    // Exibe o resultado no elemento HTML de saída
    document.getElementById("resultadoReduce").textContent = soma;
}