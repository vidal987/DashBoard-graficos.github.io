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
  "Marca": "Pontiac"
}, {
  "id": 2,
  "Temperatura": 105.0,
  "Marca": "Mercedes-Benz"
}, {
  "id": 3,
  "Temperatura": 90.5,
  "Marca": "Jeep"
}, {
  "id": 4,
  "Temperatura": 106.5,
  "Marca": "Toyota"
}, {
  "id": 5,
  "Temperatura": 91.0,
  "Marca": "Volkswagen"
}, {
  "id": 6,
  "Temperatura": 100.5,
  "Marca": "Audi"
}]

let Marc = Dados.map( value => {return value.Marca} );
let Temp = Dados.map(value => {return value.Temperatura})

var dadosGrafico1 = {
  "indicador": "Temperatura °C",
  "RótuloX": Marc,
  "dados": Temp

}

criarGrafico("grafico-1", dadosGrafico1, 'rgb(228, 63, 90')
criarGrafico("grafico-2", dadosGrafico1, 'rgb(228, 63, 90')
criarGrafico("grafico-3", dadosGrafico1, 'rgb(228, 63, 90')
criarGrafico("grafico-4", dadosGrafico1, 'rgb(228, 63, 90')
criarGrafico("grafico-5", dadosGrafico1, 'rgb(228, 63, 90')
criarGrafico("grafico-6", dadosGrafico1, 'rgb(228, 63, 90')