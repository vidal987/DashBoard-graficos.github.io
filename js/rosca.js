function criarGrafico(idGrafico, dados, cor){
    var ctx = document.getElementById(idGrafico).getContext('2d');
    var chart = new Chart(ctx, {
    
    type: 'doughnut',
  
    data: {
    labels: dados["RótuloX"] ,
    datasets: [{
        label: dados["indicador"],
        backgroundColor: ['rgb(255, 102, 0)', 'rgb(255, 51, 51)', 'rgb(0, 171, 255)', 'rgb(55, 37, 0)'],
        borderColor: ['rgb(255, 102, 0)', 'rgb(255, 51, 51)', 'rgb(0, 171, 255)', 'rgb(55, 37, 0)'],
        data: dados["dados"]
    }]
    },
    
    options: {}
    });
  }
  //Início do Gráfico 1
  //JSON Gráfico 1
  let Dados = [{
    "id": 1,
    "Temperatura": 120,
    "Marca": "Verão"
  }, 
  {
    "id": 2,
    "Temperatura": 90,
    "Marca": "Primavera"
  }, 
  {
    "id": 3,
    "Temperatura": 70,
    "Marca": "Inverno"
  },
  {
    "id": 4,
    "Temperatura": 85,
    "Marca": "Outono"
  }]  
  
  let Marc = Dados.map( value => {return value.Marca} );
  let Temp = Dados.map(value => {return value.Temperatura})
  
  var dadosGrafico1 = {
    "indicador": "Temperatura °C",
    "RótuloX": Marc,
    "dados": Temp
  
  }
  //Fim do Gráfico 2

  //Início do Gráfico 1
  //JSON Gráfico 1
  let Dados2 = [{
    "id": 1,
    "Temperatura": 135,
    "Marca": "Verão"
  }, 
  {
    "id": 2,
    "Temperatura": 105,
    "Marca": "Primavera"
  }, 
  {
    "id": 3,
    "Temperatura": 85,
    "Marca": "Inverno"
  },
  {
    "id": 4,
    "Temperatura": 100,
    "Marca": "Outono"
  }]
  
  let Marc2 = Dados2.map( value => {return value.Marca} );
  let Temp2 = Dados2.map(value => {return value.Temperatura})

  var dadosGrafico2 = {
    "indicador": "Temperatura °C",
    "RótuloX": Marc2,
    "dados": Temp  
  }
  //Fim do Gráfico 2

  //Cria a quantidade de graficos pedido
  criarGrafico("grafico-1", dadosGrafico1)
  criarGrafico("grafico-2", dadosGrafico2)
