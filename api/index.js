const fs = require("fs");
const { parse } = require("csv-parse");
const express = require('express');
var cors = require('cors')

var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const result = [];

const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]

fs.createReadStream("./src/caso.csv")
    .pipe(parse())
    .on("data", (data) => {
        result.push(data);
    })
    .on("end", () => {
        //console.log(result);
        console.log("terminado");
        //console.log(result.find(e => e[1] == "SP"));
        app.listen(4000, function() {
            console.log('App está escutando na porta 4000!');
        });
    });

const app = express();
app.use(cors())

app.get('/', async function (req, res, next) {
    res.status(503).json({"information":"Essa e uam api resoponsavel por pegar dados do covid"})
});

app.get('/DadosCovid/Brasil/:data', async function (req, res) {
    let data = req.params.data
    let information;
    let populacao = 0;
    let casos = 0;
    let obitos = 0;
    let maior = 0;
    let menor = 1;
    let TaxaObitoPorEstado = {}
    let erro = false;
    for(estado of estados){
        if(req.params.data == "none"){
            information = result.find(e => e[1] == estado)
        } else {
            information = result.find(e => e[1] == estado && e[0].indexOf(data) !== -1)
            if(information === undefined){
                erro = true;
                break;
            }
        }
        if(information[12] > maior){maior = parseFloat(information[12])}
        if(information[12] < menor){menor = parseFloat(information[12])}
        TaxaObitoPorEstado[estado] = parseFloat(information[12])
        populacao+= parseInt(information[9])
        casos+= parseInt(information[4])
        obitos+= parseInt(information[5])
    }
    if(erro){
        res.status(500).json({"error" : "data invalida"})
    } else {
        res.status(200).json([populacao, casos, obitos, obitos*100/casos/100, TaxaObitoPorEstado, {maior: maior, menor: menor}])
    }
});

app.get('/DadosCovid/:estado/:data', async function (req, res) {
    let data = req.params.data
    let information;
    if(req.params.data == "none"){
        information = result.find(e => e[1] == req.params.estado)
    } else {
        information = result.find(e => e[1] == req.params.estado && e[0].indexOf(data) !== -1)
    }
    if(information === undefined){
        res.status(500).json({"error" : "data ou estado invalido"})
    } else {
        res.status(200).json(information)
    }
});