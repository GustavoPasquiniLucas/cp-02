function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        return "Erro: Divisão por zero";
    } else {
        return num1 / num2;
    }
}

function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;

    let resultado;

    switch (operacao) {
        case "+":
            resultado = somar(num1, num2);
            break;
        case "-":
            resultado = subtrair(num1, num2);
            break;
        case "*":
            resultado = multiplicar(num1, num2);
            break;
        case "/":
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;

    let continuar;
    do {
        continuar = prompt("Deseja realizar outro cálculo? (Sim/Não)").toLowerCase();
        if (continuar !== "sim" && continuar !== "não") {
            alert("Resposta inválida. Digite 'Sim' ou 'Não'.");
        }
    } while (continuar !== "sim" && continuar !== "não");

    if (continuar === "não") {
        // Redirecionar para outro site se o usuário responder "Não"
        window.location.href = "https://google.com/"; // Substitua por URL desejada
    }
}
