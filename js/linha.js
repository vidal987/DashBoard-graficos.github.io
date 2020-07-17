function criarGrafico(idGrafico, dados, cor){
    var ctx = document.getElementById(idGrafico).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: dados["RótuloX"],
            datasets: [{
                label: dados["indicador"],
                backgroundColor: cor,
                borderColor: cor,
                data: dados["dados"]
            }]
        },

        // Configuration options go here
        options: {}
    });
}
let Dados = [{
    "id": 1,
    "Temperatura": 85.0,
    "Marca": "1 hora"
  }, {
    "id": 2,
    "Temperatura": 95.0,
    "Marca": "3 horas"
  }, {
    "id": 3,
    "Temperatura": 102.0,
    "Marca": "6 horas"
  }, {
    "id": 4,
    "Temperatura": 109.0,
    "Marca": "9 horas"
  }, {
    "id": 5,
    "Temperatura": 114.0,
    "Marca": "12 horas"
  }, {
    "id": 6,
    "Temperatura": 125.0,
    "Marca": "15 horas"
  }]

  let Dados2 = [{
    "id": 7,
    "Temperatura2": 75.0,
    "Marca2": "1 hora"
  }, {
    "id": 8,
    "Temperatura2": 80.0,
    "Marca2": "3 horas"
  }, {
    "id": 9,
    "Temperatura2": 87.0,
    "Marca2": "6 horas"
  }, {
    "id": 10,
    "Temperatura2": 92.0,
    "Marca2": "9 horas"
  }, {
    "id": 11,
    "Temperatura2": 98.0,
    "Marca2": "12 horas"
  }, {
    "id": 12,
    "Temperatura2": 103.0,
    "Marca2": "15 horas"
  }]

let Marc = Dados.map(value => {return value.Marca});
let Temp = Dados.map(value => {return value.Temperatura})

let Marc2 = Dados2.map(value => {return value.Marca2});
let Temp2 = Dados2.map(value => {return value.Temperatura2})

var dadosGrafico1 = {
    "indicador": "Temperatura do Motor do Monza em Cº",
    "RótuloX": Marc,
    "dados": Temp
}

var dadosGrafico2 = {
  "indicador": "Temperatura do Motor do Mustang em Cº",
  "RótuloX": Marc2,
  "dados": Temp2
}

criarGrafico("grafico-1", dadosGrafico1, 'rgb(228,63,90')
criarGrafico("grafico-2", dadosGrafico2, 'rgb(228,63,90')