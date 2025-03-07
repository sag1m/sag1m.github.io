



//ELEMENTOS
var topLeft = document.getElementById('topLeft');
var bottomLeft = document.getElementById('categorias');
var topRight = document.getElementById('topRight');
var bottomRight = document.getElementById('bottomRight');


var botaoVideo = document.getElementById('botaoVideo');
var botaoImagem = document.getElementById('botaoImagem');
var botaoWeb = document.getElementById('botaoWeb');
var botaoOutros = document.getElementById('botaoOutros');


var listaMais = document.getElementById('listaMais');

var listaVideo = document.getElementById('listaVideo');
var listaImagem = document.getElementById('listaImagem');
var listaWeb = document.getElementById('listaWeb');
var listaOutros = document.getElementById('listaOutros');


setTimeout(function() {
    var span = document.getElementById('O');
    span.innerText = 'O';
    span.style.fontWeight = '400';
    span.style.fontSize = '2rem';
}, 5000);











//BOTOES.........................................
/*





varVideoSwitch = 0;
botaoVideo.onclick = showVideo;
function showVideo() {
  descricao.innerHTML = [];
  if (varVideoSwitch == 0)  {
    varVideoSwitch = 1;
    varWebSwitch = 0;
    varImagemSwitch = 0;
    varOutrosSwitch = 0;
    varMaisSwitch = 0;
    listaVideo.style = "display: inherit";
    listaImagem.style = "display: none";
    listaWeb.style = "display: none";
    listaOutros.style = "display: none";
    listaMais.style = "display: none";

    botaoVideo.style = "font-weight: 300;text-shadow: 0.6px 0px 0px #7ca8ff, -0.6px 0px 0px #ff7c7c";
    botaoImagem.style = "font-weight: 300";
    botaoWeb.style = "font-weight: 300";
    botaoOutros.style = "font-weight: 300";
    botaoMais.style = "font-weight: 300";

  }
  else {
    varWebSwitch = 0;
    varImagemSwitch = 0;
    varVideoSwitch = 0;
    varOutrosSwitch = 0;

    listaVideo.style = "display: none";
    botaoVideo.style = "font-weight: 300";
  }
  }



varImagemSwitch = 0;
botaoImagem.onclick = showImagem;
function showImagem() {
  descricao.innerHTML = [];
  if (varImagemSwitch == 0)  {
    varImagemSwitch = 1;
    varWebSwitch = 0;
    varVideoSwitch = 0;
    varOutrosSwitch = 0;
    varMaisSwitch = 0;
    listaImagem.style = "display: inherit";
    listaVideo.style = "display: none";
    listaWeb.style = "display: none";
    listaOutros.style = "display: none";
    listaMais.style = "display: none";

    botaoImagem.style = "font-weight: 300;text-shadow: 0.6px 0px 0px #7ca8ff, -0.6px 0px 0px #ff7c7c;";
    botaoVideo.style = "font-weight: 300";
    botaoWeb.style = "font-weight: 300";
    botaoOutros.style = "font-weight: 300";
    botaoMais.style = "font-weight: 300";

  }
  else {
    varWebSwitch = 0;
    varImagemSwitch = 0;
    varVideoSwitch = 0;
    varOutrosSwitch = 0;
    listaImagem.style = "display: none";
    botaoImagem.style = "font-weight: 300";
  }
}


varWebSwitch = 0;
botaoWeb.onclick = showWeb;
function showWeb() {
  descricao.innerHTML = [];
  if (varWebSwitch == 0)  {
    varWebSwitch = 1;
    varOutrosSwitch = 0;
    varImagemSwitch = 0;
    varVideoSwitch = 0;
    varMaisSwitch = 0;
    listaWeb.style = "display: inherit";
    listaVideo.style = "display: none";
    listaImagem.style = "display: none";
    listaOutros.style = "display: none";
    listaMais.style = "display: none";

    botaoWeb.style = "font-weight: 300;text-shadow: 0.6px 0px 0px #7ca8ff, -0.6px 0px 0px #ff7c7c";
    botaoImagem.style = "font-weight: 300";
    botaoVideo.style = "font-weight: 300";
    botaoOutros.style = "font-weight: 300";
    botaoMais.style = "font-weight: 300";
  }
  else {
    varWebSwitch = 0;
    listaWeb.style = "display: none";
    botaoWeb.style = "font-weight: 300";
  }
}

varOutrosSwitch = 0;
botaoOutros.onclick = showOutros;
function showOutros() {
  descricao.innerHTML = [];
  if (varOutrosSwitch == 0)  {
    varOutrosSwitch = 1;
    varImagemSwitch = 0;
    varVideoSwitch = 0;
    varWebSwitch = 0;
    varMaisSwitch = 0;
    listaOutros.style = "display: inherit";
    listaVideo.style = "display: none";
    listaImagem.style = "display: none";
    listaWeb.style = "display: none";
    listaMais.style = "display: none";

    botaoOutros.style = "font-weight: 300;text-shadow: 0.6px 0px 0px #7ca8ff, -0.6px 0px 0px #ff7c7c";
    botaoImagem.style = "font-weight: 300";
    botaoWeb.style = "font-weight: 300";
    botaoVideo.style = "font-weight: 300";
    botaoMais.style = "font-weight: 300";
  }
  else {
    varOutrosSwitch = 0;
    listaOutros.style = "display: none";
    botaoOutros.style = "font-weight: 300";
  }
}

varMaisSwitch = 0;
botaoMais.onclick = showMais;
function showMais() {
  descricao.innerHTML = [];
  if (varMaisSwitch == 0)  {
    varImagemSwitch = 0;
    varVideoSwitch = 0;
    varWebSwitch = 0;
    varOutrosSwitch = 0;
    listaVideo.style = "display: none";
    listaImagem.style = "display: none";
    listaWeb.style = "display: none";
    listaOutros.style = "display: none";
    listaMais.style = "display: inherit";
    varMaisSwitch = 1;

    botaoMais.style = "font-weight: 400";
    botaoVideo.style = "font-weight: 300";
    botaoImagem.style = "font-weight: 300";
    botaoWeb.style = "font-weight: 300";
    botaoOutros.style = "font-weight: 300";


  }
  else {
    varMaisSwitch = 0;
    listaMais.style = "display: none";
    botaoMais.style = "font-weight: 300";
  }
}

*/


//LISTAS........................................................


  function showWorkM(value) {
    //descricao.innerHTML = [];
    bottomRight.innerHTML = mais[value];

  /*  botaoVideo.style = "font-weight: 300";
    botaoImagem.style = "font-weight: 300";
    botaoWeb.style = "font-weight: 300";
    botaoOutros.style = "font-weight: 300";*/


 }

 function randomWork(value) {
   descricao.style = "display: auto";
   bottomRight.innerHTML = trabalhosRandom[value];
   descricao.innerHTML = descricoesRandom[value];

  /* botaoVideo.style = "font-weight: 300";
   botaoImagem.style = "font-weight: 300";
   botaoWeb.style = "font-weight: 300";
   botaoOutros.style = "font-weight: 300";*/

}


//TENTATIVA DE PRELOAD APENAS NO PRIMEIRO ITEM

var preloadedContent = {}; // Guarda o conteúdo pré-carregado
function preloadWorkV(value) {
    if (!preloadedContent[value]) {
        let div = document.createElement("div");
        div.innerHTML = trabalhosVideo[value]; // Gera o conteúdo sem mostrar
        preloadedContent[value] = div.innerHTML; // Guarda na memória
    }
}



function showWorkV(value) {
//isto é para ter preload:
  let container = document.getElementById("bottomRight");
      container.innerHTML = preloadedContent[value] || trabalhosVideo[value]; // Mostra o conteúdo já carregado

  //Isto é o funcional antes de tentar pre load:
    //bottomRight.innerHTML = trabalhosVideo[value];


    //Isto é muito antigo:
    //descricao.innerHTML = [];
    //descricao.innerHTML = descricoesVideo[value];
}
function showWorkVMais(value) {
    bottomRight.innerHTML = trabalhosVideoMais[value];
    //descricao.innerHTML = [];
    descricao.style = "display: display";
    descricao.innerHTML = descricoesVideoMais[value];
}
function showWorkI(value) {
    bottomRight.innerHTML = trabalhosImagem[value];
    //descricao.innerHTML = [];
    //descricao.innerHTML = descricoesImagem[value];
}
function showWorkIMais(value) {
    bottomRight.innerHTML = trabalhosImagemMais[value];
    //descricao.innerHTML = [];
    descricao.style = "display: display";
    descricao.innerHTML = descricoesImagemMais[value];
}
function showWorkW(value) {
    bottomRight.innerHTML = trabalhosWeb[value];
    //descricao.innerHTML = [];
    //descricao.innerHTML = descricoesWeb[value];
}
function showWorkWMais(value) {
    bottomRight.innerHTML = trabalhosWebMais[value];
    //descricao.innerHTML = [];
    descricao.style = "display: display";
    descricao.innerHTML = descricoesWebMais[value];
}
function showWorkO(value) {
    bottomRight.innerHTML = trabalhosOutros[value];
    //descricao.innerHTML = [];
    //descricao.innerHTML = descricoesOutros[value];
}
function showWorkOMais(value) {
    bottomRight.innerHTML = trabalhosOutrosMais[value];
    //descricao.innerHTML = [];
    descricao.style = "display: display";
    descricao.innerHTML = descricoesOutrosMais[value];
}














//DESCRICOES

function showDescV(value){
  descricao.innerHTML = descricoesVideo[value];
  descricao.style = "display: display";
}
function showDescI(value){
  descricao.innerHTML = descricoesImagem[value];
  descricao.style = "display: display";
}
function showDescW(value){
  descricao.innerHTML = descricoesWeb[value];
  descricao.style = "display: display";
}
function showDescO(value){
  descricao.innerHTML = descricoesOutros[value];
  descricao.style = "display: display";
}

function hideDesc(){
  descricao.style = "display: none";
}










//INTRO E VER MAIS------------
var mais = [
  //'<div class="">      <p id="intro">Aqui estão alguns trabalhos que fiz.</p>    <p></p>     <p>Carregando em Migas podes ver mais informação e mais trabalhos de forma aleatória</p></div>',

  ' <div id="typing-text"></div> ',

  //CÓPIA DO HTML:
  '<div style="border-left:0.5px solid var(--cor-borda); padding-left:10px"><p style="line-height:3rem;font-size:2rem"><span lang="und" translate="no" id="O" style="font-weight:600;font-size:2rem;font-family:SUSE" >&#9786</span><span lang="und" translate="no" >lá</span><br>Sou o Miguel Sousa,<br>designer de comunicação multimédia. </p><p style="margin:10px 0 0 0;">Tenho aqui vários trabalhos que guardei.<br>(Ainda estou a atualizar os trabalhos e resolver problemas do site.)</p><br><span onclick="toggleCaixa()" style="cursor: pointer;" id="sobre"> <span class="simbolo">&#8595;</span> Ler mais </span> <span id="darkButton"> <span style="margin-left:20px;" class="simbolo" >&#9788</span> modo-escuro</span>                  <a href="https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=https://sag1m.github.io/" target="_blank" style="margin-left:20px; cursor:pointer; text-decoration:none;" href="mailto:ola@miguelsousa.online"onmouseover="document.getElementById(&quot;exterior&quot;).innerHTML=&quot;&#8614;&quot;" onmouseout="document.getElementById(&quot;exterior&quot;).innerHTML=&quot;&#x2690;&quot;"><span class="simbolo" id="exterior">&#x2690;</span> <span style="font-weight:400; font-style: italic;">english</span></a>                            <div style="padding-top:6px;  display:none " id="caixaTexto" class="caixa-texto"><div class="polaroide"><img src="zigaz.png" alt="Imagem Polaroide"><div class="filtro"></div></div>                                                                                               <svg fill="var(--cor-borda) " version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px" viewBox="0 0 500.834 500.834" xml:space="preserve"><g><g><path d="M25.974,197.999c0.02,9.59,0.17,19.172,0.285,28.757h-9.562C7.592,226.755,0,234.352,0,243.452c0,9.097,7.592,16.694,16.697,16.694h9.889c0.132,10.516,0.292,21.022,0.312,31.539c0.048,21.53,33.441,21.535,33.395,0c-0.068-31.229-0.858-62.454-0.926-93.691C59.321,176.468,25.926,176.468,25.974,197.999z"/><path d="M393.3,162.75c0.681,21.226,1.274,42.457,2.041,63.672c-97.41-2.173-194.57,10.991-291.953,5.637c-0.566-21.559-1.272-43.117-2.288-64.67c-1.008-21.439-34.406-21.539-33.393,0c2.679,56.861,3.651,113.754,3.712,170.678c0.021,21.53,33.416,21.536,33.396,0c-0.028-24.196-0.267-48.388-0.683-72.574c97.601,5.271,194.981-7.968,292.61-5.642c1.138,23.933,2.641,47.845,4.905,71.721c2.017,21.247,35.425,21.439,33.394,0c-5.322-56.142-6.551-112.487-8.349-168.822C426.012,141.275,392.614,141.207,393.3,162.75z"/><path d="M479.768,224.572c4.428-0.683,0.122-0.048-0.696,0.025c-1.274,0.114-2.563,0.16-3.854,0.218c-0.96,0.041-1.92,0.02-2.885,0.036c-0.741-11.397-1.238-22.811-1.111-34.267c0.243-21.543-33.149-21.522-33.394,0c-0.411,36.336,5.185,72.272,6.495,108.529c0.771,21.47,34.175,21.546,33.393,0c-0.497-13.721-1.604-27.391-2.772-41.061c4.565-0.213,9.104-0.568,13.7-1.274c9.014-1.392,13.863-12.543,11.664-20.541C497.688,226.707,488.761,223.188,479.768,224.572z"/></g></g></svg>  Gosto de me cansar no ginásio. <br><svg fill="var(--cor-borda)" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300.25 300.25" xml:space="preserve"><path d="M238.703,127.946c-5.119,0-10.089,0.487-14.847,1.67l-18.955-50.955h6.176c9.72,0,18.913-3.577,25.887-10.345l6.541-6.273c2.973-2.885,3.043-7.595,0.158-10.568s-7.633-3.024-10.605-0.139l-6.541,6.206c-4.159,4.037-9.643,6.118-15.439,6.118h-16.979c-2.458,0-4.76,1.356-6.161,3.375c-1.401,2.02-1.725,4.673-0.865,6.975l7.214,19.372c-0.046-0.001-0.093,0.141-0.139,0.141c-0.016,0-0.032,0.137-0.049,0.137H98.126L85.165,71.823l14.078-4.895c3.467-1.191,5.564-4.55,4.961-8.166c-0.604-3.615-3.731-6.101-7.397-6.101H55.597c-5.775,0-10.475,4.506-10.475,10.281c0,8.941,7.266,16.12,16.196,16.12c1.79,0,3.565-0.347,5.277-0.934l4.103-1.433l13.146,21.996l-10.097,30.285c-3.312-0.669-6.714-1.09-10.193-1.201c-17.589-0.563-34.055,6.138-46.219,18.697c-11.694,12.074-17.84,27.992-17.303,44.822c1.032,32.337,27.172,58.476,59.509,59.508c0.673,0.021,1.34,0.032,2.008,0.032c16.811,0,32.513-6.716,44.212-18.794c9.464-9.773,15.291-22.38,16.885-35.38h12.051c2.598,2,5.961,3.634,9.639,3.634c8.196,0,14.864-6.636,14.864-14.833c0-2.661-0.712-5.139-1.942-7.303l42.042-71.305l10.553,28.289c-19.435,10.359-32.698,30.831-32.698,54.348c0,33.938,27.61,61.549,61.548,61.549s61.547-27.61,61.547-61.547S272.641,127.946,238.703,127.946z M180.979,108.661l-36.606,62.091c-0.013,0-0.025-0.062-0.037-0.062c-0.043,0-0.084,0.096-0.127,0.097l-37.131-62.125H180.979z M93.992,115.669l37.378,62.514c-0.618,1.101-1.089,2.478-1.412,3.478h-7.326c-2.591-21-16.064-39.121-34.658-48.001L93.992,115.669z M74.447,181.661c-0.503-1-1.081-1.526-1.728-2.233l8.865-26.626c10.72,5.925,18.562,16.859,20.834,28.859H74.447z M91.395,218.126c-8.215,8.481-19.311,13.04-31.215,12.655c-21.822-0.696-39.461-18.319-40.157-40.141c-0.363-11.369,3.784-22.112,11.679-30.262c7.898-8.154,18.497-12.642,29.845-12.642c0.455,0,0.91,0.01,1.369,0.024c1.502,0.048,2.981,0.185,4.439,0.389l-8.966,26.9c-6.569,1.537-11.481,7.43-11.481,14.461c0,8.196,6.668,14.801,14.863,14.801c5.552,0,10.395-2.65,12.947-7.65h27.699C100.966,204.661,97.197,212.135,91.395,218.126z M238.703,231.042c-22.909,0-41.548-18.639-41.548-41.548c0-14.932,7.921-28.044,19.779-35.369l14.098,37.785c1.125,3.017,3.986,4.88,7.027,4.88c0.871,0,1.757-0.152,2.621-0.476c3.881-1.447,5.853-5.768,4.404-9.648l-14.169-37.977c2.524-0.481,5.125-0.743,7.788-0.743c22.909,0,41.547,18.639,41.547,41.548S261.613,231.042,238.703,231.042z"/></svg>   Prefiro usar a bicicleta como meio de transporte.<br><svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15V7M7.5 7.5V10.5M7.5 7.5C7.5 5.29086 5.70914 3.5 3.5 3.5H0.5V6.5C0.5 8.70914 2.29086 10.5 4.5 10.5H7.5M7.5 7.5H10.5C12.7091 7.5 14.5 5.70914 14.5 3.5V0.5H11.5C9.29086 0.5 7.5 2.29086 7.5 4.5V7.5ZM7.5 7.5L11.5 3.5M7.5 10.5L3.5 6.5" stroke="var(--cor-borda) "/></svg>  Quando não chove cultivo catnip para os meus gatos.<br><svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill="var(--cor-borda)"/></svg>   Talvez passe demasiado tempo no computador.</p>                                                                                                        </div><br><br><p style="font-weight:700">Disponível para colaborar</p><a style="text-decoration:;" href="mailto:ola@miguelsousa.online" onmouseover="document.getElementById(&quot;coracao&quot;).innerHTML=&quot;❤&quot;" onmouseout="document.getElementById(&quot;coracao&quot;).innerHTML=&quot;✉&quot;"><span id="coracao">&#9993;</span> ola@miguelsousa.online</a>                                                             </div>',



  //esta decsrição é uam página externa que permitirá mais lberdade de merda e parágrafos e coisas. mas afinal não funcionou bem, que trabalheira  pra fazer isto bem.:
  //'<iframe alt="Sobre" class="youtube" frameBorder="0" src="sobre.html"></iframe>',


  // este é o código para o CV quando ele é um PDF:
  //'<iframe alt="CV" class="youtube" frameBorder="0" src="cv.pdf"></iframe>',

  //Este é o código do CV quando ele é uma imagem:
  '<a alt="Carrega para ver o currículo" target="_blank" href="https://sag1m.github.io/cv.pdf"><img alt="Carrega para ver o currículo" class="imagem" style="maximum-height:100%;" src="cv.png"></img></a>',



]



//esperar 2 segundos anets de aparecer os menus
//setTimeout(function() {
//bottomLeft.style.opacity = "1";
//}, 2000);






//TEXTO A SER ESCRITO!!!!!!!!!!!! o de cima e também o menu bottomLeft a aparecer

/*
  var delay = 20; // em milisegundos

 var typing = "";
  let i = 0;
  function typeText() {
    if (i < typing.length) {
      document.getElementById("typing-text").innerHTML += typing.charAt(i);
      i++;
      setTimeout(typeText, delay);
    }
  }
  typeText();

   var typing2 = "Aqui podes encontrar vários trabalhos que fiz e o meu CV.";
   let i2 = 0;
   function typeText2() {
     if (i2 < typing2.length) {
       document.getElementById("typing-text2").innerHTML += typing2.charAt(i2);
       i2++;
       setTimeout(typeText2, delay);
     }
   }
   typeText2();

   var typing3 = "";
   let i3 = 0;
   function typeText3() {
     if (i3 < typing3.length) {
       document.getElementById("typing-text3").innerHTML += typing3.charAt(i3);
       i3++;
       setTimeout(typeText3, delay);
     }
   }
   typeText3();

   var typing4 = "Miguel Sousa";//yes it is. yes, lots of copy paste. but also lots of fun and misery
   let i4 = 0;
   function typeText4() {
     if (i4 < typing4.length) {
       document.getElementById("typing-text4").innerHTML += typing4.charAt(i4);
       i4++;
       setTimeout(typeText4, delay);
     }
   }
   typeText4();
*/





//AVISO AVISO BARRA BARRA CABEÇALHO HEADER cabecalho pub publicidade
//var cabecalho = document.getElementById('cabecalho');
//setTimeout(() => {  cabecalho.style = "display:none"; }, 8000);

//function showGame(){
  //  cabecalho.style = "display:none";

  //bottomRight.innerHTML = '<iframe alt="Jogo em construção" class="youtube" frameBorder="0" src="game/index.html"></iframe>';
//}


//imagem do uber a fazer zoom
function uber2(){document.getElementById("uber").src = 'uber2.jpg';}
function uber1(){document.getElementById("uber").src = 'UberHugo.jpg';}




//INICIO BOAS VINDAS DESCRIÇÃO--------------------------------------------------------------------------------
bottomRight.innerHTML = mais[1];

  botaoMais.addEventListener('click', function() {
    bottomRight.innerHTML = mais[1];
  });








//DESCRIÇÕES
var descricoesVideo = ["0",

//1 Supleemntos diários rotina diária
'<p translate="no">Mystery Mammal - Data</p>Vídeo com o tema "Rotina Diária", em específico os suplementos alimentares.<br> Gravado com um telemóvel e uma lente.<br>2018',
//2 frank ocean Kynetic Typography
'<p translate="no">Frank Ocean - Self Control</p>Kynetic Typography<br> Videoclipe só com tipografia cinética.<br>2020',
//3 fé
'<p translate="no">Fé</p>Vídeo artístico que trata a Fé.<br>Põe em igualdade rituais e crenças atuais de todo o mundo. <br> Trabalho de grupo com o Leandro Afonso.<br> 2020',
//4 amanhecer
'<p translate="no">Soft and Furious - Game On</p>Videoclipe com os temas Amanhecer e Solidão. Retrata uma rotina matinal, o despertar forçado e a preparação para sair de casa.<br>. 2021',
//5 VE instalações
'<p>Futuras Instalações VE: Estado Atual e Projeto</p>Vídeo para mostrar o estado atual (antigo cinema) das futuras instalações da Vida Económica. Gravei e editei, mas não fiz o 3D. <br>2024',

'<p>Vigília MUBi Porto</p>Vídeo sobre a Vigília de 21 de novembro de 2021 em memória das centenas de vítimas nas estradas portuguesas (Em 2019 foram 626 mortes e 2168 feridos graves) organizado pela <a href="https://mubi.pt/porto/">MubiPorto</a> <br>2021',

'<p></p>',

'<p></p>',

'<p></p>',

'<p>Futuras Instalações VE: Estado Atual e Projeto</p>Vídeo para mostrar o estado atual (antigo cinema) das futuras instalações da Vida Económica. Gravei e editei, mas não fiz o 3D. <br>2024',







'',
]



var descricoesImagem = ["0",

// 1 keith haring
'<p>Keith Haring animado</p>Animações simples com obras de Keith Haring',

// 2 Spoof ad Lunesta
'<p translate="no">Lunesta Spoof Ad</p>Spoof ad do medicamento Lunesta.<br> À esquerda é o original. Mas no meu, à direita, inverti a hierarquia do texto:<br>O que no original tem mais destaque, no meu tem menos importância.',

// 3 Douro Panoramica fotografia
'<p>Douro</p>Fotografia Panorâmica no Porto à beira rio.',

  // 4 ANAP
  '<p>Associação Nacional de Atlteats de Patinagem</p>Logotipo para a ANAP de Portugal<br>',
  // 5 succulents
  '<p>succulents</p>logotipo para um site para gerar, colecionar e competir com cartas de plantas suculentas<br>',
  // 6 Eventos
'<p>Eventos e Notícias</p>Fotografei e ajudei em eventos como iCARe ALUMNI, QSP Summit, ... Fotografei entrevistas, apresentações, conferências de imprensa...  ',
  // 7 Nucleo Inovação
  '<p>Núcleo de Inovação Vida Económica</p>Logotipo para a equipa do núcleo de inovação do grupo editorial Vida Económica<br>2024',
  // 8 liVE
  '<p>liVE</p>Logotipo a ser usado nas transmissões ao vivo dos eventos Vida Económica<br>2024',
  //9 Bicicleta cartaz
    '<p>Cartaz Segurança Rodoviária</p>Cartaz sobre segurança rodoviária em velocípedes.',



  '<p translate="no">Keith Haring animado</p>Animações simples com obras de Keith Haring',

'<p translate="no">Myprotein Spoof Ad</p>Spoof Ad da empresa MyProtein.',

'<p translate="no">Uber Hugo</p>Pixel Art Game<br> 1 frame de um possível jogo. <br>O jogador seria um estafeta da Uber que teria de entregar encomendas. Ganharia bónus ao arrancar retrovisores de carros.',


''


]


var descricoesWeb = ["0",
    // 1 Wed Designer Week game
'<p translate="no">Designer Week</p>Protótipo para um jogo de escolhas, onde o jogador tem de acabar de programar um website controlando a sua ansiedade e energia.<br> A escolha de ações influencia o humor, que por sua vez influencia o sucesso dessas ações. <br> 2020.',

  // 2 succulents gerador
'<p translate="no">succulents Card Game</p>Gerador de um website para fotografar, documentar e competir com cartas de suculentas. <br>2021',

    // 3 POSTS redes sociais
'<p>Redes Sociais Vida Económica</p>Templates de vários tipos de post. Formações do mês, da semana, anúncios das formações, promoções do Livro da Semana, Citações de livros.<br>Criar posts, agendar posts, escrever e organizar textos e links.',

    // 4 VÍDEOS  redes sociais
'<p>Vídeo semanal do jornal</p>Vídeo semanal que mostra alguns destaques do jornal vida Económica.<br>2024',

    // 5 Site VE
'<p translate="no">Vida Económica</p>Proposta de melhoria do website para a Vida Económica <br>- Um website com notícias de várias revistas e jornal e ainda livraria.<br>2024',

    // 6 Catnip Grower
'<p translate="no">Catnip Grower</p>Demo (demonstração) de um jogo onde temos de controlar o ambiente com várias ferramentas e ações para cultivar a planta catnip.<br>2024',



''

]



var descricoesOutros = ["0",

// 1 Pharmakon
'<p translate="no">Pharmakon fanzine</p>Fanzine Pharmakon com 3 números. <br>O tema são as substancias psicoativas principalmente ilegais. <br>2020',

// 2 Publicação Cafeína
'<p translate="no">Cafeína</p>Publicação artística sobre a Cafeína feita em Projeto de Impressão. <br>2020',

// 3 Medicina Social
'<p translate="no">Medicina Social</p>Paginação de uma edição da revista Medicina Social e captura (no Centro Hospitalar conde Ferreira) e edição de fotografias para vários artigos. ',

// 4 Guias CRN
'<p translate="no">Guias CRN</p>Paginação dos livretes Guia do Utente e Guia do Colaborador do Centro de Reabilitação do Norte.<br>Inclui pesquisa e escolha de imagens stock e edição das fotografias',





'<p></p>',




]

var descricoesVideoMais = ["0",

// 1 BITTER SWEET
'<p lang="eng" translate="no">Bitter Sweet<span id="n">1/10</span></p>Pequeno vídeo que mostra uma disputa entre dois amigos por um doce.<br> Trabalho de grupo.<br>2015',
// 2 SOUTH PARK
'<p lang="eng" translate="no">South Park<span id="n">2/10</span></p>Exercício de Animação com imagens da série South Park (sem som.)<br>2015',
// 3 BLUE VELVET
'<p lang="eng">Blue Velvet remake<span id="n">3/10</span></p>Remake de uma cena do filme Blue Velvet de 1986.<br> Trabalho de grupo. 2019',
// 4 NARRATIVA FOTOGRAFIAS
'<p>Onde meti a chave?<span id="n">4/10</span></p>Pequena narrativa com fotografias, exercício para Argumento Multimédia. <br>2017',
// 5 MIGAS POWER POWDER
'<p lang="eng">Migas Power Powder<span id="n">5/10</span></p>Vídeo feito a partir de Stock Footage. Ensino a fazer a receita de batido "caseiro" que inventei.<br> 2019',
// 6 MEDICINAS ALTERANATIAS TRAILER
'<p><span  lang="pt" translate="no">Terapias Alternativas</span> | trailer<span id="n">6/10</span></p>Trailer do episódio 02 (Reiki) da série documemental <span  lang="und" translate="no">Terapias Alternativas</span>.<br> Trabalho de grupo.<br> 2014',
// 7 MEDICINAS ALTERANATIAS EP01
'<p><span  lang="pt" translate="no">Terapias Alternativas</span> | Episódio 01<span id="n">7/10</span></p>Episódio 01 da série documental <span  lang="und" translate="no">Terapias Alternativas</span>.<br> Trabalho de grupo. <br>2014.',
// 8 TRAILER NIGHT OF THE LIVING DEAD
'<p lang="eng" translate="no">Night of the Living Dead<span id="n">8/10</span></p>Trailer para o filme <span lang="eng">Night of The Living Dead</span> com cenas do filme.<br> Trabalho de grupo.<br>2019',
// 9 TRAFFIC
'<p lang="eng">Traffic<span id="n">9/10</span></p>Exercício de Time-Lapse sobre o Trânsito no Porto<br>Como uma pequena ação individual dificulta a vida de dezenas/centenas de pessoas. <br>2020',
// 10 GARY'S MOD
'<p lang="und" translate="no">GARYS MOD<span id="n">10/10</span></p>Fiz o som para este vídeo da inernet com recurso numa grande biblioteca de sons.',








]
var descricoesImagemMais = ["0",

// 1Uber Hugo
'<p lang="und">Uber Hugo</p>Frame de um possível jogo de pixel art. <br>O jogador seria um estafeta da Uber que teria de entregar encomendas.<br> Ganharia bónus ao arrancar retrovisores de carros.',
  // 2 Spoof Ad myprotein
  '<p translate="no">Myprotein Spoof Ad</p>Spoof Ad da empresa MyProtein.',
  // 3Shulgin ilustração
'<p>Alexander Shulgin</p>Ilustração do Alexander Shulgin com citação dele. 2015 ',
  // 4CAFFEINE imagem
'<p lang="eng">Caffeine</p>Imagem de uma publicação sobre cafeína.<br>Do lado esquerdo é uma fotografia de chá e do lado direito uma fotografia de cafeína pura.<br>2021',
//5 imagem digital antiga
'<p>Flor</p>Imagem digital que fiz no Paint.net antes de 2010.<br>Das primeiras imagens que fiz e que consegui guardar até agora.',
//6 PANORAMICA praia matosas
'<p>Panorâmica Matosinhos</p>Fotografia Panorâmica tirada no Porto à beira-mar<br>2021',
//7 KEITH HARING
'<p>animação Keith Haring</p>Animação simples com obra de Keith Haring.<br>2019',
//8 POESIA
'<p>Nota Discordante</p>Poema "Nota Discordante" de Fernando Namora.<br> 2018',
//9 AMÉLIA
'<p>Amélia</p>Ilustração de personagem.<br> A Amélia é uma pequena planta de chá que dá dicas sobre como fazer os melhores chás.<br> 2019',
//10 sÁBADO
'<p>Sábado</p>Ilustração para a capa da revista Sábado.<br> 2019',

//11
'<p>Fotografias Medicina Social</p>Fotografias tiradas no Hospital Conde Ferreira para a revista Medicina Social da SCMP.',
//12
'<p>Postal de Natal</p>Tentei fotografar um postal de Natal alusivo às Bicicletas.<br>2022',


]










var descricoesWebMais = ["0",
// 1 INFOMEDIA
'<p>Infomedia</p>Infografia animada (Incompleto).<br>A infografia deveria informar o número de horas no computador, o número de batidos bebidos e as horas a andar de bicicleta, por dia.<br> 2018',

  // 2 IDPC WEBSITE
'<p>IDPC</p>Remake do website do IDPC, apenas da home page.<br>Dá para carregar em "About" e em baixo em "Health", como exemplo do seu funcionamento.<br>2019',
      // 3  POR FALAR NOUTRA COISA INFANTIL
'<p translate="no" lang="pt">Por Falar Noutra Coisa</p>Remake do blog <span translate="no" lang="pt">Por Falar Noutra Coisa</span>.<br>É suposto o wbsite ficar com um ar infantil.<br>Website funciona em telemóvel.<br>2019',
      // 4  SPACE DIMENSION
'<p lang="eng" translate="no">Space Dimension</p>Jogo web com 3 níveis.<br>O jogador é um extra-terrestre que tem de apanhar moléculas de água para sobreviver e avançar no jogo, disparando e evitando obstáculos. Trabalho de grupo com André Furtado.<br>2015?',
      // 5  CrossFest Festival
'<p translate="no">CrossFest Festival</p>Website desenvolvido para um festival de música inventado<br> Baseado num cartaz construtivista Russo.<br> 2019',

// 6 Pharmakons
'<p>Pharmakons</p>Coleção de NFTs na WAX Blockchain, onde as pessoas compraram e trocam NFTs de vários fármacos.  ',



]
var descricoesOutrosMais = ["0",
//1 teletexto
'<p>Teletexto</p>Texto para post de blog sobre o teletexto.<br>Escrito por mim.<br> 2020',
  // 2 MILANO
'<p translate="no">Milano</p>Fonte Milano.<br>Exercício onde tivemos de desenhar uma fonte com base em 3 fontes diferentes.<br>Trabalho de grupo.',
  // 3 ROLLS ROYCE
'<p translate="no">Rolls Royce</p>Fonte Feita a partir do logo da Rolls Royce.<br>Trabalho de grupo.',
// 4 PHARMAKON 3
'<p translate="no">Pharmakon 3</p>Fanzine Pharmakon nº3. 2020',
// 5 PHARMAKON 1
'<p translate="no">Pharmakon 1</p>Fanzine Pharmakon nº1. 2020',
  // 6 IGREJA CERVEIRA
'<p>Igreja de Cerveira 3D</p>Igreja de Cerveira modelada em 3D.<br>(A gravação do vídeo ficou com muitas falhas)<br> 2014',

'',

]












var descricoesRandom = ["0",]






//TRABALHOS------------------------------------

var trabalhosRandom = ["0",'']


var trabalhosVideo = ["0",
  //1 Supleemntos diários rotina diária
    '<iframe alt="Vídeo experimental sobre Rotina Diária, em específico os suplementos alimentares. Gravado com telemóvel e lente macro de 1euro. 2018" class="youtube" src="https://www.youtube.com/embed/ymunZbD32D4?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //2 frank ocean Kynetic Typography
    '<iframe alt="Kynetic Typography - Videoclip só com tipografia cinética. 2020" class="youtube" src="https://www.youtube-nocookie.com/embed/7YSbiIX-woQ?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  //3 fé
    '<iframe alt="Vídeo sobre a Fé. Põe em igualdade rituais e crenças atuais de todo o mundo. Trabalho de grupo com o Leandro Afonso. 2020" class="youtube" src="https://www.youtube.com/embed/H1G1e5VOeXI?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" rel="0" allowfullscreen></iframe>',
  //4 amanhecer
    '<iframe alt="Amanhecer 2021" class="youtube" src="https://www.youtube.com/embed/uD2AljAy5q0?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" rel="0" allowfullscreen></iframe>',
  //5 VE instalações
    '<iframe  class="youtube" src="https://drive.google.com/file/d/1h7ufBJQZJVgWu7P2_joWXU8YIMiUmx_-/preview" frameBorder="0"></iframe>',

  //6 mubi porto
      '<iframe class="youtube" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmubi.porto%2Fvideos%2F313795297147345%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',


      ''


  ];

  var trabalhosVideoMais = ["0",
  // 1 BITTER SWEET
  '<iframe  class="youtube" src="https://drive.google.com/file/d/0BzyZCFqeaprXX0ZEQm41ZWp3YWc/preview" frameBorder="0"></iframe>',
  // 2 SOUTH PARK
  '<iframe  class="youtube" src="https://www.youtube.com/embed/JbPIYozSnec?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // 3 BLUE VELVET
  '<iframe  class="youtube" src="https://www.youtube.com/embed/nW8fLNO9OIA?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // 4 NARRATIVA FOTOGRAFIAS
  '<iframe class="youtube" src="https://www.youtube.com/embed/KzEpSZU8hM4?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // 5 MIGAS POWER POWDER
  '<iframe class="youtube" src="https://www.youtube.com/embed/k5pGgvFjRG4?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // 6 MEDICINAS ALTERANATIAS TRAILER
  '<iframe class="youtube" src="https://www.youtube.com/embed/baXdytNv-Sw?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // 7 MEDICINAS ALTERANATIAS EP01
  '<iframe class="youtube" src="https://www.youtube.com/embed/cyWPNYX1Gqg?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // 8 TRAILER NIGHT OF THE LIVING DEAD
  '<iframe class="youtube" src="https://www.youtube.com/embed/ovsZWblt9L4?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  // 9 TRAFFIC
  '<iframe alt="Vídeo Time Lapse sobre o Trânsito no Porto. 2020" class="youtube" src="https://www.youtube.com/embed/_c9i0oHCScg?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" rel="0" allowfullscreen></iframe>',
  // 10 GARY'S MOD
  '<iframe class="youtube" src="https://www.youtube.com/embed/YWswYVRZWjs?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',



];

  var trabalhosImagem = ["0",
    // 1 keith haring
    '<img class="imagem" src="arte2.gif" alt="Animação de obra de Keith Haring. 2019?">',

    // 2 Spoof ad Lunesta
    '<a href="lunestacompaison.png" target="_blank"><img style="cursor:zoom-in" class="imagem" src="lunestacompaison.png" alt="Spoof Ad do medicamento Lunesta (à esquerda é o original). Eu mudei a ordem do texto - Aquilo que no original tem mais destaque, no meu tem menos importância. 2019"></a>',

    // 3 Douro Panoramica fotografia
    '<div id="pan"><img class="height" src="PanSmall.jpg" alt="Fotografia Panorâmica tirada no Porto à beira rio. 2021"></div>',

    // 4 ANAP
    '<img class="imagem" src="anap.png" alt="ANAP logo">',

    // 5 succulents
        '<img class="imagem" src="succulents.png" alt="succulents logo">',

    // 6 Eventos
    '<div id="embeb" class="insidepage"><p>Ajudei a preparar entrevistas e notícias</p><a target="_blank" href="ve/aluminio.png"><img src="ve/aluminio.png"></img></a><p>Fotografei apresentações de livros e eventos</p><a target="_blank" href="ve/vepic02.jpg"><img src="ve/vepic02.jpg"></img></a><p>Fiz vídeos para apresentação e fotografei no evento ICAReALUMNI</p><a target="_blank" href="icare.jpg"><img src="icare.jpg"></img></a></div>',
    // 7 Nucleo Inovação
    '<img class="imagem" src="ni.png" alt="Nucleo Inovação logo">',

    // 8 liVE

    '<iframe alt="liVE" class="youtube" frameBorder="0" src=""></iframe> ',


    //9 Bicicleta cartaz
    '<a style="cursor:zoom-in; target="blank" href="bikeC.pdf"><img class="imagem" src="poster.png" alt="Poster sobre Sugurança Rodoviária em Velocípedes"></a>',




      ]

      var trabalhosImagemMais = ["0",
          // 1Uber Hugo
          '<img class="imagem" id="uber" onmouseover="uber2()" onmouseout="uber1()" src="UberHugo.jpg" alt="Pixel Art. Frame de um possível jogo. O jogador seria um estafeta da Uber que teria de entregar encomendas. Ganharia bónus ao arrancar retrovisores de carros. 2019">',
          // 2Spoof Ad myprotein
          '<div class="insidepage"><img class="imagem" src="spoof1.gif" alt="Spoof Ad 1 da empresa MyProtein. 2019"><img class="imagem" src="spoof2.gif" alt="Spoof Ad 2 da empresa MyProtein. 2019"><img class="imagem" src="spoof3.gif" alt="Spoof Ad 3 da empresa MyProtein. 2019"></div><script>document.addEventListener("DOMContentLoaded", function () {const insidepage2 = document.querySelector(".insidepage");const images2 = insidepage2.querySelectorAll("img");insidepage2.addEventListener("mouseover", function (event) {if (event.target.tagName === "IMG") {images.forEach(img => {if (img !== event.target){img.classList.add("blurred");}});}});insidepage2.addEventListener("mouseout", function (event) {if (event.target.tagName === "IMG") {images.forEach(img => img.classList.remove("blurred"));}});});</script>',
          // 3Shulgin ilustração
          '<img class="imagem" alt="Ilustração do Alexander Shulgin. 2015" src="shulgin.png"> ',
          // 4CAFFEINE imagem
          '<img class="imagem" src="caffeineSmall.jpg" alt="Cafeína">',
          //5 imagem digital antiga
          '<img class="imagem" src="flor.png" alt="Imagem digital que fiz no Paint.net antes de 2010. Das primeiras imagens que fiz e que consegui guardar até agora.">',
          // 6 PANORAMICA praia matosas
          '<div id="pan"><img class="height" src="PanWeb.jpg" alt="Fotografia Panorâmica tirada no Porto à beira mar. 2021"></div>',
          // 7 KEITH HARING
          '<img class="imagem" src="arte3.gif" alt="Animação simples com obra de Keith Haring. 2019">',
          // 8 POESIA
          '<img class="imagem" src="poesia.jpg" alt="Poema Nota Discordante de Fernando Namora. 2018">',
          // 9 8AMÉLIA
          '<img class="imagem" src="ilustracao1.jpg" alt="AMÉLIA">',
          // 10 ÁBADO
          '<img class="imagem" src="ilustracao2.png" alt="SÁBADO">',
          // 11 SCMP
          '<img class="imagem" src="medsoc.png" alt="Fotografias tiradas no Hospital Conde Ferreira para a revista Medicina Social da SCMP."><br><a onclick="showWorkO(3)" style="cursor:pointer" >Ver revista Medicina Social</p></a>',
          //12 Natal Bicicleta
          '<img class="imagem" src="natal.png" alt="Postal de Natal alusivo às bicicletas.">',

      '',
      '',
     ];








    var trabalhosWeb = ["0",

    // 1 Wed Designer Week game
    '<iframe alt="Protótipo para um jogo de escolhas, onde o jogador tem de acabar de programar um website controlando a sua ansiedade e energia. 2020" class="cemporcento" frameBorder="0" src="wdw/index.html"></iframe>',

    // 2 succulents gerador
    '<iframe alt="Gerador de um website para fotografar, documentar e competir com cartas de suculentas. 2021" class="youtube" frameBorder="0" src="gerador/index.html"></iframe>',

    // 3 POSTS redes sociais
    '<iframe alt="Redes sociais Vida Económica" class="youtube" frameBorder="0" src="redes.html"></iframe>',

    // 4 VÍDEOS  redes sociais
    '<iframe alt="Vídeo VE jornal semanal" class="youtube" frameBorder="0" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fvidaeconomica.pt%2Fvideos%2F652814070381021%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',

    // 5 Site VE
    '<iframe alt="Porposta VE" class="youtube" frameBorder="0" src="ve/VEweb1.png"></iframe>',

    // 6 Catnip Grower
    '<iframe alt="Catnnip Grower" class="youtube" frameBorder="0" src="catnip/index.html"></iframe>',



        ''

      ];

      var trabalhosWebMais = ["0",

      // 1 INFOMEDIA
      '<iframe class="youtube" frameBorder="0" src="infomedia/FILE2404.html"></iframe>',
      // 2 IDPC WEBSITE
      '<iframe class="youtube" frameBorder="0" src="DesignSocial/index.html"></iframe>',
      // 3  POR FALAR NOUTRA COISA INFANTIL
      '<iframe class="youtube" frameBorder="0" src="Blog/index.html"></iframe>',
      // 4  SPACE DIMENSION
      '<iframe class="youtube" frameBorder="0" src="SpaceDimension/index.html"></iframe>',
      // 5  CrossFest Festival
      '<iframe alt="Website desenvolvido para um festival de música inventado, baseado num cartaz construtivista Russo. 2019" class="youtube" frameBorder="0" src="Cross/index.html"></iframe>',
      //6 Pharmakons
      '<p>Logotipo da Coleção</p><img class="imagem" src="ph1.png" alt="imagem da coleção Pharmakons na WAX Blockchain">    <p>Imagem de perfil</p><img class="imagem" src="ph2.png" alt="imagem de perfil da coleção Pharmakons na WAX Blockchain">     ',




    ];


    var trabalhosOutros = ["0",




    // 1 Pharmakon
    '<iframe alt="Fanzine Pharmakon com 3 números. O tema são substancias psicoativas principalmente ilegais. A nº2 foi todo escrito por mim. 2020" src="https://online.fliphtml5.com/dnvha/krhl/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="youtube" ></iframe>',

    // 2 Publicação Cafeína
    '<iframe alt="Publicação sobre a Cafeína feita em Projeto de Impressão. 2020" src="https://online.fliphtml5.com/dnvha/boah"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="youtube" ></iframe>',

    // 3 Medicina Social
    //'<iframe alt="" src="medSoc.html" allowtransparency="true" class="youtube" ></iframe>',


    '<div id="med"><p>Impressões de teste da revista</p><a target="blank" href="print01.png"><img style="height:400px" alt="Impressão para testa da revista Medicina Social" src="print01.png"></a><a target="blank" href="print02.png"><img alt="Impressão para testa da revista Medicina Social" src="print02.png"></a><br><p>Spreads da revista</p><a target="blank" href="scmp/med01.png"><img alt="Spread da revista Medicina Social" src="scmp/med01.png"></a><br><a target="blank" href="scmp/med02.png"><img alt="Spread da revista Medicina Social" src="scmp/med02.png"></a><br><a target="blank" href="scmp/med03.png"><img alt="Spread da revista Medicina Social" src="scmp/med03.png"></a><br><a target="blank" href="scmp/med04.png"><img alt="Spread da revista Medicina Social" src="scmp/med04.png"></a><br><br><a onclick="showWorkIMais(11)" style="cursor:pointer" >Ver fotografias tiradas para a  Medicina Social</p></a><br></div><br>',





    // 4 Guias CRN
    '<iframe alt="" src="CRN.html"  allowtransparency="true" class="youtube" ></iframe>',


    ''
  ]

    var trabalhosOutrosMais = ["0",
    //1 teletexto
    '<iframe alt="Pequeno texto de pesquisa sobre o Teletexto. 2020" class="youtube" frameBorder="0" src="teletexto/index.html"></iframe>',
    // 2 MILANO
    '<input id="fontest2" type="text" name="teste" value="escreve aqui com a fonte milano">',
    // 3 ROLLS ROYCE
    '<input id="fontest" type="text" name="teste" value="escreve aqui com a fonte rolls royce">',
    // 4 PHARMAKON 3
    '<iframe alt="Fanzine Pharmakon nº3. 2020" src="https://online.fliphtml5.com/dnvha/yolq/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="youtube" ></iframe>',
    // 5 PHARMAKON 1
    '<iframe alt="Fanzine Pharmakon nº1. 2020" src="https://online.fliphtml5.com/dnvha/smhq/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="youtube" ></iframe>',
    // 6 IGREJA CERVEIRA
    '<iframe  class="youtube" src="https://www.youtube.com/embed/zzcbMYLfSfw?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    ''
    ];


  var body = document.body;
var title = document.querySelector('#botaoMais');


//G a girar, chatGPT thanks

var g = title.textContent;
title.innerHTML = g.replace(
  'g',
  '<span class="letter-g">g</span>'
);

//DARK MODE EXP. obrigado chatgpt

darkButton.addEventListener("click", function() {
  body.classList.toggle("bodyDark");
  botaoMais.classList.toggle("botaoMaisDark");
  descricao.classList.toggle("descricaoDark");
  body.classList.toggle("backgroundDark");
  bottomRight.classList.toggle("bottomRightDark");
  gradientContainer.classList.toggle("gradientContainerDark");


});



//Abrir e fechar caixa do Ler Mais Sobre Mim
function toggleCaixa() {
    var caixa = document.getElementById("caixaTexto");
    if (caixa.style.display === "none" || caixa.style.display   === "") {
        caixa.style.display = "block";
      } else {
        caixa.style.display = "none";
      }
    }



//SlideShow das Fotos do Ler Mais Sobre Mim
document.addEventListener("DOMContentLoaded", function () {
const imagens = ["pool.gif", "ciia.jpg", "natal25.gif","QSP.jpg", "patins25.gif", "dourobike.jpg","bike25.gif",];
let index = 0;
const imgElement = document.querySelector(".polaroide img");

function trocarImagem() {
index = (index + 1) % imagens.length;
imgElement.src = imagens[index];
}
setInterval(trocarImagem, 5000);
});













  //MUDAR FONTE COM JAVASCRUPTUNXO. e mexer mais rápido, que ainda nao funciona com,o queria. obrigado chatgpt
/*var hoverLetter = title.querySelector('.letter-g');
  title.addEventListener('mouseenter', () => {
    hoverLetter.style.fontFamily = 'M';
    hoverLetter.classList.toggle("letter-g2");
  });
  title.addEventListener('mouseleave', () => {
    hoverLetter.style.fontFamily = 'Inconsolata';
    hoverLetter.classList.toggle("letter-g2");
  });*/

  //LINK FICAR ATIVO QUANDO É CLICKADO.
/*  var navLinks = document.querySelectorAll("#topRight a");
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      link.classList.add('active');
    });
  });*/





  //Gradiente à volta do rato, GPT
  var gradientContainer = document.getElementById('gradientContainer');
  document.addEventListener('mousemove', (event) => {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var halfSize = 1000; // Half of the container size (500/2)
    // Calculate the position of the gradient container to follow the mouse:
    var left = mouseX - halfSize;
    var top = mouseY - halfSize;
    // Update the position of the gradient container:
    gradientContainer.style.left = `${left}px`;
    gradientContainer.style.top = `${top}px`;
  });


descricao.style = "display: none";


descricao.onmouseover = function() {
  descricao.style.display = "none";
};


/*
//Cor que Muda___________________________________________________________________
// Variável que controla o progresso da animação (0 a 1)
let progresso = 0;
let direcao = 1; // 1 para ir para frente, -1 para ir para trás

// Função para gerar a cor baseada no progresso (gradiente entre #ff0000, #14ff00, #00ebff, #14ff00)
function gerarCor() {
  // O progresso vai de 0 a 1, mapeando para 4 cores (vermelho, verde, azul, verde)
  const progress = progresso * 3; // 3 transições (4 cores)

  const i = Math.floor(progress); // Encontra o índice da cor
  const f = progress - i; // A fração entre as cores

  // Definir as cores em formato RGB
  const cores = [
    { r: 255, g: 0, b: 0 },       // Vermelho (#ff0000)
    { r: 20, g: 255, b: 0 },      // Verde (#14ff00)
    { r: 0, g: 235, b: 255 },     // Azul claro (#00ebff)
    { r: 20, g: 255, b: 0 }       // Verde novamente (#14ff00)
  ];

  // Interpolação entre as cores
  const c1 = cores[i];
  const c2 = cores[(i + 1) % 4]; // Garante que o índice não ultrapasse o array de cores

  const r = Math.round(c1.r + f * (c2.r - c1.r));
  const g = Math.round(c1.g + f * (c2.g - c1.g));
  const b = Math.round(c1.b + f * (c2.b - c1.b));

  return `rgb(${r}, ${g}, ${b})`;
}

// Função que aplica a cor aos elementos
function aplicarCor() {
  // Gera a cor com base no progresso
  const cor = gerarCor();

  document.documentElement.style.setProperty('--cor-borda', cor);
}

// Função que atualiza o progresso da animação de forma lenta
function atualizarProgresso() {
  progresso += 0.0004167 * direcao; // Incrementa ou decrementa (2 minutos por ciclo)
  if (progresso >= 1 || progresso <= 0) {
    direcao *= -1; // Inverte a direção quando chega a 0 ou 1
  }
  aplicarCor();
}
// Inicia a animação
setInterval(atualizarProgresso, 50); // Atualiza a cor a cada 50ms (20 FPS)*/


//Animação que parece que funicona pingue pongue:
const root = document.documentElement;
const cores = [
  [255, 0, 0],   // Vermelho
  [20, 255, 0],   // Verde
  [20, 235, 255]    // Azul
];

let indiceAtual = 0;
let indiceProximo = 1;
let progresso = 0;
const duracao = 30000; // ms por transição
const intervalo = 20; // ms por frame

function interpolarCor(cor1, cor2, t) {
  const r = Math.round(cor1[0] + (cor2[0] - cor1[0]) * t);
  const g = Math.round(cor1[1] + (cor2[1] - cor1[1]) * t);
  const b = Math.round(cor1[2] + (cor2[2] - cor1[2]) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

function atualizar() {
  progresso += intervalo / duracao;
  if (progresso >= 1) {
    progresso = 0;
    indiceAtual = indiceProximo;
    indiceProximo++;
    if (indiceProximo >= cores.length) {
      cores.reverse();
      indiceAtual = 0;
      indiceProximo = 1;
    }
  }
  const corInterpolada = interpolarCor(cores[indiceAtual], cores[indiceProximo], progresso);
  root.style.setProperty('--cor-borda', corInterpolada);
}

setInterval(atualizar, intervalo);









//Cookies
setTimeout(function() {
    var container = document.getElementById("cookies-zero");
    container.innerHTML = `
    <div id="cookie-consent" style="">
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center;">
            <?xml version="1.0" encoding="utf-8"?><svg width="40px" height="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120.23 122.88" style="enable-background:new 0 0 120.23 122.88" xml:space="preserve"><style type="text/css">.st0{fill: var(--cor-borda);fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M98.18,0c3.3,0,5.98,2.68,5.98,5.98c0,3.3-2.68,5.98-5.98,5.98c-3.3,0-5.98-2.68-5.98-5.98 C92.21,2.68,94.88,0,98.18,0L98.18,0z M99.78,52.08c5.16,7.7,11.69,10.06,20.17,4.85c0.28,2.9,0.35,5.86,0.2,8.86 c-1.67,33.16-29.9,58.69-63.06,57.02C23.94,121.13-1.59,92.9,0.08,59.75C1.74,26.59,30.95,0.78,64.1,2.45 c-2.94,9.2-0.45,17.37,7.03,20.15C64.35,44.38,79.49,58.63,99.78,52.08L99.78,52.08z M30.03,47.79c4.97,0,8.99,4.03,8.99,8.99 s-4.03,8.99-8.99,8.99c-4.97,0-8.99-4.03-8.99-8.99S25.07,47.79,30.03,47.79L30.03,47.79z M58.35,59.25c2.86,0,5.18,2.32,5.18,5.18 c0,2.86-2.32,5.18-5.18,5.18c-2.86,0-5.18-2.32-5.18-5.18C53.16,61.57,55.48,59.25,58.35,59.25L58.35,59.25z M35.87,80.59 c3.49,0,6.32,2.83,6.32,6.32c0,3.49-2.83,6.32-6.32,6.32c-3.49,0-6.32-2.83-6.32-6.32C29.55,83.41,32.38,80.59,35.87,80.59 L35.87,80.59z M49.49,32.23c2.74,0,4.95,2.22,4.95,4.95c0,2.74-2.22,4.95-4.95,4.95c-2.74,0-4.95-2.22-4.95-4.95 C44.54,34.45,46.76,32.23,49.49,32.23L49.49,32.23z M76.39,82.8c4.59,0,8.3,3.72,8.3,8.3c0,4.59-3.72,8.3-8.3,8.3 c-4.59,0-8.3-3.72-8.3-8.3C68.09,86.52,71.81,82.8,76.39,82.8L76.39,82.8z M93.87,23.1c3.08,0,5.58,2.5,5.58,5.58 c0,3.08-2.5,5.58-5.58,5.58s-5.58-2.5-5.58-5.58C88.29,25.6,90.79,23.1,93.87,23.1L93.87,23.1z"/></g></svg>
                <p style="margin: 0 0 0 20px;">Este site <span style="text-decoration:underline 2px var(--cor-borda);" >não</span> utiliza cookies para melhorar a sua experiência. Ao continuar a navegar, aceita que <span style="text-decoration:underline 2px var(--cor-borda);" >aqui não encontrará nenhum snack comestível</span>.</p>
            </div>
            <button id="close-cookie" style="background: none; border: none; color: var(--cor-borda); font-size: 24px; cursor: pointer;">&times;</button>
        </div>
    </div>
    `;
    var consent = document.getElementById("cookie-consent");
    function removeConsent() {
        consent.style.opacity = "0";
        setTimeout(function() {
            consent.remove();
        }, 2000);
    }
    document.getElementById("close-cookie").onclick = removeConsent;
    consent.onmouseover = removeConsent;

    setTimeout(removeConsent, 10000);
}, 10000);//12000








//Desfocar o título Migas h1
document.getElementById('botaoMais').addEventListener('mouseover', function() {
  document.getElementById('screen').style.filter = 'blur(3px)';
  document.getElementById('screen').style.transition = 'filter 1s ease';
});

document.getElementById('botaoMais').addEventListener('mouseout', function() {
  document.getElementById('screen').style.filter = 'none';
});











// Aguardar
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('screen').classList.add('blurred');  // Adiciona o efeito de desfocar o fundo
    }, 1); //100000

    // Fechar o pop-up
    document.getElementById('close-btn').onclick = function() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('screen').classList.remove('blurred');  // Remove o desfoque do fundo
    };
