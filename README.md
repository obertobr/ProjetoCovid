<p align=center>
  <img src="https://user-images.githubusercontent.com/64040357/202628686-b5044b38-d1fa-4e4b-9eb6-420d35ab63fc.png" alt="banner" width="100%"> 
</p>

Projeto de um site que mostra dados por estado sobre o avanço do Covid-19 no Brasil

# Conteudo

- 💾 [Como Baixar](#como-baixar)
    - [NODE.JS](#nodejs)
    - [GIT](#git)
    - [Instalando as Bibliotecas](#instalando-as-bibliotecas)
    - [Baixando o Dataset](#baixando-o-dataset)
- 🖥 [Como Executar](#como-executar)
- 🖼 [Imagens](#imagens)
    - [Home](#home)
    - [Graficos](#graficos)
    - [Sobre](#sobre)
- 🧾 [Creditos](#creditos)


## Como Baixar
Como você pode rodar o projeto no seu próprio computador.
### NODE.JS
Caso ainda não tenho o node instalado, você pode instalar por esse [link](https://nodejs.org/en/).

Certifique se de baixar a versão recomendada como pode ver na imagem abaixo.

<img src="https://user-images.githubusercontent.com/64040357/202615002-e31040d5-be60-4c01-a495-64a475250193.png" alt="site do node.js" width="75%">

### GIT
Caso não tenha o git instalado, baixe por esse [link](https://git-scm.com/)

Agora clone o repositório em alguma pasta com esse comando:

`git clone https://github.com/obertobr/ProjetoCovid.git`

Depois de executar o comando você terá uma pasta com esses arquivos:

<img src="https://user-images.githubusercontent.com/64040357/202615959-ae558ade-b005-497c-89d4-a1ad8000ab35.png" alt="pasta com arquivos clonados do repositório" width="500">

### Instalando as Bibliotecas
Para instalar as bibliotecas nos usaremos o comando `npm`. Então certifique se que está na pasta `/ProjetoCovid` pelo terminal e excuta o seguinte comando:

`npm install`

Você vera uma tela mais o menos assim das bibliotecas sendo instaladas:
<img src="https://user-images.githubusercontent.com/64040357/202617824-37eca5a2-765a-4514-a049-0a196b43b51c.png" alt="terminal exibindo bibliotecas sendo instaladas">

Depois de terminar a instalação, vamos instalar agora as bibliotecas da API, para isso você terá que entrar na pasta '/ProjetoCovid/api' e executar de novo:

`npm install`

E pronto instalamos todas terá que precisávamos.

### Baixando o Dataset
Por último vamos baixar o dataset com os casos de Covid, para isso basta entrar no site [brasil.io](https://brasil.io/dataset/covid19/files/) e baixar o `caso.csv.gz`.

Depois de baixado vamos descompactar esse arquivo e criamos uma pasta chamada `src` na pasta `/ProjetoCovid/api` e colocamos o `caso.csv` dentro pasta que acabamos de criar, então ficara assim `/ProjetoCovid/api/src/caso.csv`.

# Como Executar
Precisamos executar a api e o site, então pra isso vamos, primeiro executar a api.

Para executar api, você abrira o terminal na pasta `/ProjetoCovid/api` e executara esse comando:
`node index.js`

Agora espere até que a API carregue(Isso pode levar algum tempo, pois ira carregar o dataset inteiro), quando terminado você verá isso:

<img src="https://user-images.githubusercontent.com/64040357/202620037-2750f152-f4ac-43c7-872f-f3d3390f5b9f.png" alt="terminal escrito App está escutando na porta 4000!">

Agora você pode excutar o site, pra isso você abrira **outro** terminal na pasta `/ProjetoCovid` e executara o comando:
`npm start`

Espere um pouco que ele irá abrir o site automaticamente no seu navegador.

## Imagens

### Home
Tela inicial do site mostra um mapa do Brasil onde quanto mais escuro o estado está mais óbitos por casos de covid houveram, além disso você pode clicar em cada estada para saber mais sobre ele:

<img src="https://user-images.githubusercontent.com/64040357/202622578-1912daa4-4aa9-483c-9d67-2db172a66120.png" alt="tela incial do site" width="100%">

### Graficos
Na tela de Gráficos, primeiro temos a comparação de casos e mortes de todos os meses do ano e estado selecionado:

<img src="https://user-images.githubusercontent.com/64040357/202623903-7fc22e54-cd7c-4033-a1b1-1ae8144c2267.png" alt="Grafico de casos e mortes por covid" width="100%">

Mas caso selecionemos um mês, teremos um gráfico de pizza comparando a população, casos e óbitos do estado selecionado:

<img src="https://user-images.githubusercontent.com/64040357/202624288-0fbadfca-77f8-4b91-8d33-8afc652f03e7.png" alt="Grafico de pizza sobre população, casos e obitos de covid" width="100%">

### Sobre
E por fim temos a tela sobre onde explicamos um pouco do projeto e listamos os participantes que ajudaram:

<img src="https://user-images.githubusercontent.com/64040357/202624442-7146c2c1-bb83-40f2-abcf-20a46a49c033.png" alt="tela sobre" width="100%">

# Creditos
Por fim agradecemos a [brasil.io](http://brasil.io) pelo dataset de casos de covid, que foi de extrema importância para nosso projeto.


:)
