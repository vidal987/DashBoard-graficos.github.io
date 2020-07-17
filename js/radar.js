function criarGrafico(idGrafico, dados, cor){
    var ctx = document.getElementById(idGrafico).getContext('2d');
    var myRadarChart = new Chart(ctx, {
      type: 'radar',
  
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
    "Temperatura": 80,
    "Tempo ligado": "1h"
  }, {
    "id": 2,
    "Temperatura": 90,
    "Tempo ligado": "2hs"
  }, {
    "id": 3,
    "Temperatura": 95,
    "Tempo ligado": "3hs"
  }, {
    "id": 4,
    "Temperatura": 101.5,
    "Tempo ligado": "4hs"
  }, {
    "id": 5,
    "Temperatura": 110,
    "Tempo ligado": "5hs"
  }, {
    "id": 6,
    "Temperatura": 112.2,
    "Tempo ligado": "6hs"
  }]
  
  let TempoLigado = Dados.map(value => {return value.TempoLigado});
  let Temp = Dados.map(value => {return value.Temperatura})
  
  var dadosGrafico1 = {
    "indicador": "Temperatura °C por hora ligado - Mercedez-Bens",
    "RótuloX": TempoLigado,
    "dados": Temp
  }
  criarGrafico("grafico-1", dadosGrafico1, 'rgb(228,63,0')
  
  let Dados1 = [{
    "id": 1,
    "Temperatura": 80,
    "Tempo ligado": "1h"
  }, {
    "id": 2,
    "Temperatura": 85,
    "Tempo ligado": "2hs"
  }, {
    "id": 3,
    "Temperatura": 91,
    "Tempo ligado": "3hs"
  }, {
    "id": 4,
    "Temperatura": 96.5,
    "Tempo ligado": "4hs"
  }, {
    "id": 5,
    "Temperatura": 102.2,
    "Tempo ligado": "5hs"
  }, {
    "id": 6,
    "Temperatura": 109.9,
    "Tempo ligado": "6hs"
  }]
  
  let TempoLigado1 = Dados1.map(value => {return value.TempoLigado});
  let Temp1 = Dados1.map(value => {return value.Temperatura})
  
  var dadosGrafico2 = {
    "indicador": "Temperatura °C por hora ligado - BMW I8",
    "RótuloX": TempoLigado1,
    "dados": Temp1
  }
  criarGrafico("grafico-2", dadosGrafico2, 'rgb(228,63,0')