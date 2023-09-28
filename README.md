* [Título](#Título) <h1 align="center">Aplicação - uClimate (Back-End)</h1>

* [Status do Projeto](#Status-do-Projeto)

<p align="center">
<img src="https://img.shields.io/badge/Status-Concluído-green">
</p>
<br>

* [Como executar em Linux](#Como-executar-em-Linux)

Essa aplicação, tanto o back-end quanto o front-end, foi testada em Linux utilizando o programa Oracle VM Virtual Box para criar uma máquina virtual Linux. Nessa máquina virtual criada, foi instalado o Ubuntu e, com ele, a aplicação foi executada utilizando o VSCode do Ubuntu.

Para executar propriamente a aplicação, é necessário iniciar o back-end com o comando "npm start" e, em seguida, iniciar o front-end também com o comando "npm start". Essa executação funciona igualmente no Windows com os mesmos comandos.

* [Principais ferramentas utilizadas](#Ferramentas-utilizadas)

 `Node.js: tecnologia utilizada como a base do back-end.`

 `Express: framework escolhido, em associação com as dependências Nodemon e Cors, para criação e organização do back-end.`

 `API OpenWeather: principal API da aplicação. É consumida no back-end para retornar previsões climáticas de acordo com as cidades que foram escolhidas no front-end.`

  `API OpenWeather: principal API da aplicação. É consumida no back-end para retornar previsões climáticas de acordo com as cidades que foram escolhidas no front-end. Essa API está vinculado à outra API que é consumida no front-end chamada Geoapify. A utilização da Geoapify foi necessária para descobrir a longitude e latitude das cidades escolhidas no front.`
 
* [Introdução](#Introducao)

O presente projeto foi realizado tendo como objetivo o desenvolvimento de uma aplicação que permita ao usuário consultar previsões climáticas especificamente da cidade de Florianópolis e também de qualquer cidade brasileira, em diferentes páginas, retornando ao usuário informações interessantes como temperatura média dos próximos dias, velocidade média do vento, umidade relativa do ar etc.

* [Descrição do projeto](#Descriçao-do-projeto)

<p>A aplicação foi projetada visando simular um site institucional que promova o aplicativo uClimate, como se tivesse sido desenvolvido pela empresa uTech de soluções tecnológicas situada em Florianópolis, a fim de contextualizar as funcionalidades para agregar valor à experiência do usuário. 

Das páginas:

>A página 'Home' foi desenvolvida como sendo uma landing page contendo informações relevantes a respeito do aplicativo uTech.

>A página 'Florianópolis', com endereço /previsao-florianopoli, traz do back-end a previsão climática e algumas estatísticas da cidade de Florianópolis.

>A página 'Dashboard', com endereço /dashboard, foi desenvolvida como se fosse um dashboard climático que fornece ao usuário a previsão do tempo com informações relevantes do clima dos próximos 4 dias da cidade escolhida no formulário.

>A página 'CityAnalytics', com endereço /city-analytics, foi desenvolvida como se fosse um comparador de climas entre duas cidades diferentes, retornando ao usuário a previsão do tempo de ambas, dos próximos quatro dias, com suas respectivas amplitudes térmicas.

</p>

* [Desenvolvedor](#Desenvolvedor)
<h4>Eike Hirsch ✒️ LinkedIn: https://www.linkedin.com/in/eike-hirsch/</h4>
