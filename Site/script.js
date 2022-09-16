function ConverterDolar() {
    // pega o valor númerico do input html
    let valor = document.getElementById("valor");
    // converte num número
    valor = Number(valor.value);
    let valorDolar = valor / 5.19;
          // fixa esse valor em duas casas decimais
         valorDolar =  valorDolar.toFixed(2);
    // pega o id da tag HTML e insere o resultado
    let convertido = document.getElementById("valorConvertido");
    convertido.innerHTML = `O valor convertido em <br> Dólar é U$ ${valorDolar}`;
  }
  function ConverterEuro() {
    let valor = document.getElementById("valor");
    valor = Number(valor.value);
    let valorEuro = valor / 5.23;
    valorEuro =  valorEuro.toFixed(2);
    let convertido = document.getElementById("valorConvertido");
    convertido.innerHTML = `O valor convertido em <br> Euro é € ${valorEuro}`;
  }
  function ConverterBitcoin() {
    let valor = document.getElementById("valor");
    valor = Number(valor.value);
    let valorBitcoin = valor / 0,00014;
    valorBitcoin =  valorBitcoin.toFixed(2);
    let convertido = document.getElementById("valorConvertido");
    convertido.innerHTML = `O valor convertido em <br> Bitcoin é ₿ ${valorBitcoin}`;
  }