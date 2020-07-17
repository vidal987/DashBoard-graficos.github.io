function criarGrafico(idGrafico, dados, cor){
  var ctx = document.getElementById(idGrafico).getContext('2d');
  var chart = new Chart(ctx, {
  
  type: 'bar',

  data: {
  labels: dados["RótuloX"] ,
  datasets: [{
      label: dados["indicador"],
      backgroundColor: cor,
      borderColor: cor,
      data: dados["dados"]
  }]
  },
  
  options: {}
  });
}


let Dados = [{
  "id": 1,
  "Temperatura": 109.0,
  "Mes": "Janeiro"
}, {
  "id": 2,
  "Temperatura": 105.0,
  "Mes": "Fevereiro"
}, {
  "id": 3,
  "Temperatura": 101.5,
  "Mes": "Março"
}, {
  "id": 4,
  "Temperatura": 106.5,
  "Mes": "Abril"
}, {
  "id": 5,
  "Temperatura": 111.0,
  "Mes": "Maio"
}, {
  "id": 6,
  "Temperatura": 100.5,
  "Mes": "Junho"
}]

var Dados2 = [{
  "Temperatura": 100.5,
  "Mes": "Janeiro"
}, {
  "Temperatura": 110.0,
  "Mes": "Fevereiro"
}, {
  "Temperatura": 90.5,
  "Mes": "Março"
}, {
  "Temperatura": 102.5,
  "Mes": "Abril"
}, {
  "Temperatura": 119.0,
  "Mes": "Maio"
}, {
  "Temperatura": 120.5,
  "Mes": "Junho"
}]
let Marc = Dados.map( value => {return value.Mes} );
let Temp = Dados.map(value => {return value.Temperatura})

var Mes = Dados2.map(value => {return value.Mes})
var celcius = Dados2.map(value => {return value.Temperatura})

var dadosGrafico1 = {
  "indicador": "Temperatura °C Por 6 Meses de um Fusca",
  "RótuloX": Marc,
  "dados": Temp

}

var dadosGrafico2 = {
  "indicador": "Temperatura °C Por 6 Meses de um Chevette",
  "RótuloX": Mes,
  "dados": celcius

}

criarGrafico("grafico-1", dadosGrafico1, 'rgb(228, 63, 90')
criarGrafico("grafico-2", dadosGrafico2, 'rgb(228, 63, 90')
