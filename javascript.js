function ConverterParaFahrenheit() {
  var valorElementoTemperatura = document.getElementById("temperatura");
  var temperatura = valorElementoTemperatura.value;
  var valorTemperaturaCelsius = parseFloat(temperatura);
  
  var temperaturaEmFareheint = valorTemperaturaCelsius * 1.8 + 32;

  // ----------Empurrar valores----------

  var elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "A temperatura de " + valorTemperaturaCelsius +"ºC para Fareheint é: <span>" + temperaturaEmFareheint +"ºF</span>";
  elementoValorConvertido.innerHTML = valorConvertido;

}


function ConverterParaKelvin() {
  var valorElementoTemperatura = document.getElementById("temperatura");
  var temperatura = valorElementoTemperatura.value;
  var valorTemperaturaCelsius = parseFloat(temperatura);
  
  var temperaturaEmKelvin = valorTemperaturaCelsius + 273.15;

  // ----------Empurrar valores----------

  var elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "A temperatura de " + valorTemperaturaCelsius +"ºC para Kelvin é: <span>" + temperaturaEmKelvin +"K</span>";
  elementoValorConvertido.innerHTML = valorConvertido;

}

