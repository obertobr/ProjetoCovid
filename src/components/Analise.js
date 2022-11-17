import { useEffect, useState } from "react";
import "../styles/Analise.css"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  import { Bar,Pie } from 'react-chartjs-2';
  

  const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  
  export const options = {
    responsive: true,
    borderRadius : "100",
    plugins: {
      legend: {
        position: 'top',
      },
    }
  };

  
  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',"Agosto","Setembro","Outubro","Novembro","Dezembro"];
  
  const opcoesData = ["Geral",...labels]

 

export function Analise (props) {

  let formatarNumero = (numero) => {

            
    let tamanho = numero.length 
    let resto = tamanho % 3 
    let separacoes = (tamanho - resto) / 3 
    let numeroFormatado = ""

    numeroFormatado += numero.substring(0, resto)

    for (let index = 0; index < separacoes; index++) {
        
       let aux =  index * 3 + resto

       if (resto === 0 && index === 0 ) {
        numeroFormatado += numero.substring(aux,aux + 3)
       } else {
        numeroFormatado += "." + numero.substring(aux,aux + 3)
       }

    }
   
    return numeroFormatado

}

    let [data,setData] = useState(
        {
            labels,
            datasets: [
              
              {
                label: 'Casos Confirmados',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
                backgroundColor: '#FDCC56',
              },
              {
                label: 'Óbitos',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
                backgroundColor: '#FD5E58',
              },
            ],
          }
    )

    let [dataPizza,setDataPizza] = useState({
        labels: ['População', 'Casos Confirmados', 'Óbitos'],
        datasets: [
          {
            data: [1200, 600, 300],
            backgroundColor: [
              '#5A6A8A',
              '#8AA2D2',
              '#D28A8A',
            ],
            borderColor: [
            'rgba(0,0,0,0.3)',
              'rgba(0,0,0,0.3)',
              'rgba(0,0,0,0.3)',

            ],
            borderWidth: 1,
          },
        ],
      })
   
    let [dadosGraficoAnual,setDadosGraficoAnual] = useState(["SP","2021"])
    
   let [mes,setMes] = useState("Geral")

    let atualizarGrafico = async() => {

        let dados = {
            casos : [0,0,0,0,0,0,0,0,0,0,0,0],
            obitos : [10,0,0,0,0,0,0,0,0,0,0,0],
        }
        
        for (let index = 0; index < 12; index++) {

          let mes = (index + 1) >= 10 ? (index + 1) : "0" + (index + 1)
   

          try {

            var dado = await props.pegarDadosPorEstado(dadosGraficoAnual[0],dadosGraficoAnual[1] + "-" + mes)
          } catch(e){
            dados.data = 0
            console.log(e)
          }

          console.log(dado)

          if(dado) {
            dados.casos[index] = dado.data[4]
            dados.obitos[index] = dado.data[5]
          } else {
            dados.casos[index] = 0
            dados.obitos[index] = 0
          }

            setData(
              {
                  labels,
                  datasets: [
                    
                    {
                      label: 'Casos Confirmados',
                      data: dados.casos,
                      backgroundColor: '#FDCC56',
                    },
                    {
                      label: 'Óbitos',
                      data: dados.obitos,
                      backgroundColor: '#FD5E58',
                    },
                  ],
                }
          )
        }

    }

    useEffect(() => {
        atualizarGrafico()

    },[ dadosGraficoAnual])

    let [graficoPizza,setGraficoPizza] = useState(false)

    let atualizarGraficoPizza = async () => {

      try {
        let Mes = mes < 10 ? "0"+mes : mes
        var dado = await props.pegarDadosPorEstado(dadosGraficoAnual[0],dadosGraficoAnual[1] + "-" + Mes)
      } catch(e){
        dado= 0
        console.log(e)
      }
    
      let dados

      if(dado) {
        dados = {
          populacao : dado.data[9]? dado.data[9] : 0,
          casos : dado.data[4]? dado.data[4] : 0,
          obitos : dado.data[5]? dado.data[5] : 0,
      }
      
    } else {

        dados = {
          populacao : 0,
          casos :  0,
          obitos :  0,
      }
      

      }
       

        if(mes !== "Geral") {
            setGraficoPizza(true)
           
            setDataPizza({
                labels: ['População', 'Casos Confirmados', 'Óbitos'],
                datasets: [
                  {
                    data: [dados.populacao,
                      dados.casos, 
                      dados.obitos
                       ],
                    backgroundColor: [
                      '#5A6A8A',
                      '#8AA2D2',
                      '#D28A8A',
                    ],
                    borderColor: [
                    'rgba(0,0,0,0.3)',
                      'rgba(0,0,0,0.3)',
                      'rgba(0,0,0,0.3)',
        
                    ],
                    borderWidth: 1,
                  },
                ],
              })
        } else {
            
            setGraficoPizza(false)
            
        }


    }

    useEffect(() => {
        atualizarGraficoPizza()
    },[mes])

    return (
        <>
          
           <div id="contentAnalise">
           <h2>Evolução da Covid-19</h2>
        { !graficoPizza ? 
                (<>
                   

                    <div id="graphAnual">
                    <Bar options={options} data={data} />
                    </div>

                    
                </>
                ) : (
                    <>
                        <div id="graphMes">
                            <Pie width={100}
                                height={50}
                                options={{ maintainAspectRatio: false }}  
                                data={dataPizza} />

                                
                        </div>
                        
                        <div id="dados">
                            <h3>População: {formatarNumero(dataPizza.datasets[0].data[0] + "")}</h3>
                            <h3>Taxa de Casos: {(dataPizza.datasets[0].data[1]/dataPizza.datasets[0].data[0] * 100).toFixed(3) + "%"}</h3>
                            <h3>Taxa de Óbitos: {(dataPizza.datasets[0].data[2]/dataPizza.datasets[0].data[1] * 100).toFixed(3) + "%"}</h3>
                        </div>
                        
                
                    </>
                )}

                        <div id="parameters">

                        <div class="titleSelect">
                        <h3>Região</h3>
                            <select value={dadosGraficoAnual[0]} onChange={(e) => {
                                let copia = [...dadosGraficoAnual]
                                copia[0] = e.target.value
                                setDadosGraficoAnual(copia)
                            }}>
                                {estados.map((estado,i) => {
                                    return <option key={i} value={estado}>{estado}</option>
                                })}
                            </select>
                        </div>

                        <div class="titleSelect">
                            <h3>Ano</h3>
                            <select value={dadosGraficoAnual[1]} onChange={(e) => {
                                let copia = [...dadosGraficoAnual]
                                copia[1] = e.target.value
                                setDadosGraficoAnual(copia)
                            }}>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                
                            </select>
                        </div>

                        <div class="titleSelect">
                            <h3>Mês</h3>
                            <select value={mes} onChange={(e) => {
                                setMes(e.target.value)

                            }}>
                                {opcoesData.map((mes,i) => {
                                    return <option key={i} value={i+1}>{mes}</option>
                                })}
                            </select>
                        </div>
                    </div>

           </div>

        </>
    )
}