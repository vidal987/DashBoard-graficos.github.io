function criarGrafico(idGrafico, dados, cor){
    var ctx = document.getElementById(idGrafico).getContext('2d');
    var mypolarAreaChart = new Chart(ctx, {
      type: 'polarArea',
  
        // The data for our dataset
        data: {
            labels: dados["RótuloX"],
            datasets: [{ 
              data: [10, 20, 30],             
                backgroundColor:  ['rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)', 'rgb(0, 128, 0)', 'rgb(28,28,28)', 'rgb(128,128,128)'], 
                borderColor: cor,
                data: dados["dados"]
            }],
            labels: [
              'Meia hora',
              'Uma hora',
              'Duas horas',
              'Três horas',
              'Quatro horas',
              'Cinco horas'
              ]
        },
  
        // Configuration options go here
        options: {}
    });
  }
  let Dados = [{
    "id": 1,
    "Temperatura": 60,   
  }, {
    "id": 2,
    "Temperatura": 68,    
  }, {
    "id": 3,
    "Temperatura": 72,    
  }, {
    "id": 4,
    "Temperatura": 86,   
  }, {
    "id": 5,
    "Temperatura": 95,    
  }, {
    "id": 6,
    "Temperatura": 100,    
  }]
  
  let TempoLigado = Dados.map(value => {return value.TempoLigado});
  let Temp = Dados.map(value => {return value.Temperatura})
  
  var dadosGrafico1 = {    
    "RótuloX": TempoLigado,
    "dados": Temp
  }
  criarGrafico("grafico-1", dadosGrafico1, 'rgb(228,63,0')
  
  let Dados1 = [{
    "id": 1,
    "Temperatura": 56,   
  }, {
    "id": 2,
    "Temperatura": 65,    
  }, {
    "id": 3,
    "Temperatura": 73,   
  }, {
    "id": 4,
    "Temperatura": 78,    
  }, {
    "id": 5,
    "Temperatura": 84,   
  }, {
    "id": 6,
    "Temperatura": 92,    
  }]
  
  let TempoLigado1 = Dados1.map(value => {return value.TempoLigado});
  let Temp1 = Dados1.map(value => {return value.Temperatura})
  
  var dadosGrafico2 = {    
    "RótuloX": TempoLigado1,
    "dados": Temp1
  }
  criarGrafico("grafico-2", dadosGrafico2, 'rgb(228,63,0')
