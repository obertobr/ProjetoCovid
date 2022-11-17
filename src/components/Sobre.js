import imageVirus from "../icons/virus.svg"
import imageGlobo from "../icons/globo.png"
import "../styles/Sobre.css"
export function Sobre () {


    return (
        <>
            <div id="contentSobre">
                <header>
                    <h2>Sobre</h2>
                    <img src={imageVirus} alt="virus"></img>
                </header>

                <div id="contentText">
                    <p> Esse projeto tem o intuito de mostrar informações e dados a respeito da pandemia do covid-19, exibindo as situações através de gráficos dinâmicos para facilitar o estudo e análise sobre a doença nos últimos anos.</p>

                    <img id="imageGlobo" src={imageGlobo} alt="globo"></img>
                </div>

                <div id="contentGrupo">
                    <h3>Equipe</h3>

                    <div id="equipe">

                        <ol>
                           <li>Helen Giovana De Faria Marques</li>   
                           <li>Lucas Do Prado Ribeiro</li> 
                           <li>Rafael Eduardo Azzi Lopes </li>  
                        </ol>

                        <ol>
                           <li>Vinicius Alexandrino De Moraes</li>  
                           <li>Heloisa Arfelli Donato</li> 
                           <li>Matheus Garcia De Araujo</li>  
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )


}