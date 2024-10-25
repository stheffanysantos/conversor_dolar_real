let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
    usdInput.value = formatCurrency(usdInput.value);
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
    brlInput.value = formatCurrency(brlInput.value);
    convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value);
    convert("usd-to-brl");
});

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value);
    convert("brl-to-usd");
});

usdInput.value = "1000,00";
convert("usd-to-brl");

//funções
function formatCurrency(value) {
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    };
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".");
    let floatValue = parseFloat(fixedValue);
    if (isNaN(floatValue)) {
        floatValue = 0;
    }
    return floatValue;
}

function convert(type) {
    const dolar = 5.0; // Defina a taxa de câmbio do dólar aqui

    if (type === "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value);
        let result = fixedValue * dolar;
        result = result.toFixed(2);
        brlInput.value = formatCurrency(result);
    }

    if (type === "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value);
        let result = fixedValue / dolar;
        result = result.toFixed(2);
        usdInput.value = formatCurrency(result);
    }
}
