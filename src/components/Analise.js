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
  

  const estados = ["Brasil","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]

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

    let [data,setData] = useState(
        {
            labels,
            datasets: [
              {
                label: 'População',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
                backgroundColor: '#A732DE',
              },
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
   
    let [dadosGraficoAnual,setDadosGraficoAnual] = useState(["Brasil","2021"])
    
   let [mes,setMes] = useState("Geral")

    let atualizarGrafico = async() => {

        let dados = {
            populacao : [],
            casos : [],
            obitos : [],
        }
        
        for (let index = 0; index < 12; index++) {
            dados.populacao[index] = Math.round(Math.random() * 100 )
            dados.casos[index] = Math.round(Math.random() * 80 + 20)
            dados.obitos[index] = Math.round(Math.random() * 40 + 10)
        }

        setData(
            {
                labels,
                datasets: [
                  {
                    label: 'População',
                    data: dados.populacao,
                    backgroundColor: '#A732DE',
                  },
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

    useEffect(() => {
        atualizarGrafico()

    },[dadosGraficoAnual])

    let [graficoPizza,setGraficoPizza] = useState(false)

    let atualizarGraficoPizza = () => {

        let dados = {
            populacao : Math.round(Math.random() * 100 + 40 ),
            casos : Math.round(Math.random() * 100 + 20 ),
            obitos : Math.round(Math.random() * 100 ),
        }

        if(mes !== "Geral") {
            setGraficoPizza(true)
            setDataPizza({
                labels: ['População', 'Casos Confirmados', 'Óbitos'],
                datasets: [
                  {
                    data: [dados.populacao, dados.casos, dados.obitos],
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
    },[mes,dadosGraficoAnual])

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
                            <h3>População: {dataPizza.datasets[0].data[0]}</h3>
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
                                    return <option key={i} value={mes}>{mes}</option>
                                })}
                            </select>
                        </div>
                    </div>

           </div>

        </>
    )
}