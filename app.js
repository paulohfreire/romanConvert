

function romanConvert(romano) {
  let n = 0;
    var romano = romano.toUpperCase();
  const numeros = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  };

  for (let i = 0; i < romano.length; i++) {
      let atual = romano[i];
      let next = romano[i + 1];

      if (next && numeros[next] > numeros[atual]) {
          n -= numeros[atual];
      } else {
          n += numeros[atual];
      }
      document.getElementById('resultado').innerHTML = n;
  }
}
