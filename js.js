//ELEMENTOS
var topLeft = document.getElementById('topLeft');
var bottomLeft = document.getElementById('bottomLeft');
var topRight = document.getElementById('topRight');
var bottomRight = document.getElementById('bottomRight');


var botaoMigas = document.getElementById('botaoMigas');

var botaoVideo = document.getElementById('botaoVideo');
var botaoImagem = document.getElementById('botaoImagem');
var botaoWeb = document.getElementById('botaoWeb');
var botaoOutros = document.getElementById('botaoOutros');


var listaMais = document.getElementById('listaMais');

var listaVideo = document.getElementById('listaVideo');
var listaImagem = document.getElementById('listaImagem');
var listaWeb = document.getElementById('listaWeb');
var listaOutros = document.getElementById('listaOutros');








//BOTOES.........................................

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
  }
  else {
    varWebSwitch = 0;
    varImagemSwitch = 0;
    varVideoSwitch = 0;
    varOutrosSwitch = 0;
    listaVideo.style = "display: none";
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

  }
  else {
    varWebSwitch = 0;
    varImagemSwitch = 0;
    varVideoSwitch = 0;
    varOutrosSwitch = 0;
    listaImagem.style = "display: none";
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
  }
  else {
    varWebSwitch = 0;
    listaWeb.style = "display: none";
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
  }
  else {
    varOutrosSwitch = 0;
    listaOutros.style = "display: none";
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
  }
  else {
    varMaisSwitch = 0;
    listaMais.style = "display: none";
  }
}




//LISTAS........................................................


  function showWorkM(value) {
    descricao.innerHTML = [];
    bottomRight.innerHTML = mais[value];
 }

 function randomWork(value) {
   descricao.style = "display: auto";
   bottomRight.innerHTML = trabalhosRandom[value];
   descricao.innerHTML = descricoesRandom[value];
}




function showWorkV(value) {
    bottomRight.innerHTML = trabalhosVideo[value];
    descricao.innerHTML = [];
    //descricao.innerHTML = descricoesVideo[value];
}
function showWorkI(value) {
    bottomRight.innerHTML = trabalhosImagem[value];
    descricao.innerHTML = [];
    //descricao.innerHTML = descricoesImagem[value];
}
function showWorkW(value) {
    bottomRight.innerHTML = trabalhosWeb[value];
    descricao.innerHTML = [];
    //descricao.innerHTML = descricoesWeb[value];
}
function showWorkO(value) {
    bottomRight.innerHTML = trabalhosOutros[value];
    descricao.innerHTML = [];
    //descricao.innerHTML = descricoesOutros[value];
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
  '<div class="">      <p id="intro">Aqui estão alguns trabalhos que fiz.</p>     <p>À esquerda tem algumas categorias.</p>     <p>Em cima podes saber mais e ver mais trabalhos de forma aleatória.</p></div>',


  '<p>Gosto de passar tempo no computador, andar de bicicleta e cultivar suculentas, no Porto.</p> </a><img id="introImg" src="web2.png" alt="Pixel Art"><p>migas@outlook.pt</p> ',


  '<p>estágio Santa Casa da Misericórdia do Porto</p> <p>estágio ISCAP</p>  <p>estágio Perto Design</p>

  '
]






//MOSTRAR TEXTO DE BOAS VINDAS LOGO QUANDO SE ABRE O WEBSITE
bottomRight.innerHTML = mais[0];



//imagem do uber a fazer zoom
function uber2(){document.getElementById("uber").src = 'uber2.jpg';}
function uber1(){document.getElementById("uber").src = 'UberHugo.jpg';}





//DESCRIÇÕES
var descricoesVideo = ["0",

'Vídeo experimental sobre Rotina Diária, em específico os suplementos alimentares. Gravado com telemóvel e lente macro de 1euro. 2018',

'Kynetic Typography - Videoclip só com tipografia cinética. 2020',

'Vídeo sobre a Fé. Põe em igualdade rituais e crenças atuais de todo o mundo. Trabalho de grupo com o Leandro Afonso. 2020',

'Vídeo Time Lapse sobre o Trânsito no Porto. 2020',

'Vídeo com os temas Amanhecer e Solidão. 2121',

'',

'',
]
var descricoesImagem = ["0",

'Animações simples com obras de Keith Haring',

'Spoof Ad da empresa MyProtein.',

'Spoof ad do medicamento Lunesta. À esquerda é o original. Eu apenas mudei a ordem do texto - O que no original tem mais destaque, no meu tem menos importância.',

'Pixel Art, frame de um possível jogo inventado. O jogador seria um estafeta da Uber que teria de entregar encomendas. Ganharia bónus ao arrancar retrovisores de carros.',

'Fotografia Panorâmica no Porto à beira rio.',

'',

]
var descricoesWeb = ["0",

'Website desenvolvido para um festival de música inventado, baseado num cartaz construtivista Russo. 2019',

'Protótipo para um jogo de escolhas, onde o jogador tem de acabar de programar um website controlando a sua ansiedade e energia. 2020',

'Gerador de um website para fotografar, documentar e competir com cartas de suculentas. 2021',

'',

'',

'',
'',
]
var descricoesOutros = ["0",
'Pequeno texto de pesquisa para blog sobre o Teletexto. 2020',

'Fanzine Pharmakon com 3 números. O tema são substancias psicoativas principalmente ilegais. A nº2 foi toda escrito por mim. 2020',

'Publicação sobre a Cafeína feita em Projeto de Impressão. 2020',

'',
'',
]


var descricoesRandom = ["0",
// 1
'Pequeno vídeo que mostra uma disputa entre dois amigos por um doce. Trabalho de grupo. 2015',
// 2
'Animação com imagens da série South Park, sem som. 2015',
// 3
'Remake de uma cena do filme Blue Velvvet de 1986. Trabalho de grupo.  2019',
// 4
'Fonte Milano. Tivemos de desenhar uma fonte com base em 3 fontes diferentes.  Trabalho de grupo.',
// 5
'Fonte Feita a partir do logo da Rolls royce. Trabalho de grupo.',
// 6
'Igreja de Cerveira modelala em 3D. A gravação do vídeo ficou com muitas falhas. 2014',
// 7
'Fiz o som para este vídeo da inernet com recurso numa grande biblioteca de sons.',
// 8
'Ilustração de personagem. A Amélia é uma pequena planta de chá que dá dicas sobre como fazer os melhores chás. 2019',
// 9
'Ilustração para a capa da revista sábado. 2019',
// 10
'Ilustração incompleta do Alexander Shulgin com citação dele. 2015 ',
// 11
'Infografia animada (Incompleto). A infografia deveria informar o número de horas no computador, o número de batidos bebidos e as horas a andar de bicicleta, por dia. 2018',
// 12
'Remake do website do IDPC, apenas numa página. Dá para carregar em "About" e em baixo em "Health", como exmeplo do seu funcionamento. 2019',
// 13
'Remake do blog Por Falar Noutra Coisa. É suposto o wbsite ficar com um ar infantil. Website funciona em telemóvel. 2019',
// 14
'Jogo HTML com 3 níveis. O jogador é um extra-terrestre que tem de apanhar moléculas de água para sobreviver e avançar no jogo, disparando e evitando óbstáculos. Trabalho de grupo com André Furtado. 2015?',
// 15
'Pequena narrativa, exercício para Argumento Multimédia. 2017',
// 16
'Vídeo feito a partir de Stock Footage. Ensino a fazer a receita de batido "caseiro" que inventei. 2019',
//17
'Trailer do episódio 02 (Reiki) da série documemental Terapias Alternativas. Trabalho de grupo. 2014',
//18
'Episódio 01 da série documental Terapias Alternativas. Trabalho de grupo. 2014.',
//19
'Fotografia Panorâmica tirada no Porto à beira mar. 2021',
//20
'Trailer para o filme Night of The Living Dead. Trabalho de grupo. 2019',
//21
'Imagem de uma publicação sobre cafeína. Do lado esquerdo é uma fotografia de chá e do lado direito uma fotografia de cafeína pura. 2021',
//22
'Animação simples com obra de Keith Haring. 2019',
//23 POESIA
'Poema  Nota Discordante  de Fernando Namora. 2018',
//24 POESIA
'Fanzine Pharmakon nº3. 2020',
//25
'Fanzine Pharmakon nº1. 2020',
//26
'Imagem digital que fiz no Paint.net antes de 2010. Das primeiras imagens que fiz e que consegui guardar até agora.',
//27
'',
//28
'',
//29
'',
//30
'',
//31
'',


'']






//TRABALHOS------------------------------------

var trabalhosRandom = ["0",
//1 BITTER SWEET
'<iframe  class="youtube" src="https://drive.google.com/file/d/0BzyZCFqeaprXX0ZEQm41ZWp3YWc/preview" frameBorder="0"></iframe>',
//2 SOUTH PARK
'<iframe  class="youtube" src="https://www.youtube.com/embed/JbPIYozSnec?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//3 BLUE VELVET
'<iframe  class="youtube" src="https://www.youtube.com/embed/nW8fLNO9OIA?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//4 MILANO
'<input id="fontest2" type="text" name="teste" value="fonte milano. escreve aqui">',
//5 ROLLS ROYCE
'<input id="fontest" type="text" name="teste" value="fonte rolls royce. escreve aqui.">',
//6 IGREJA CERVEIRA
'<iframe  class="youtube" src="https://www.youtube.com/embed/zzcbMYLfSfw?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//7 GARY'S MOD
'<iframe class="youtube" src="https://www.youtube.com/embed/YWswYVRZWjs?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//8 AMÉLIA
'<img class="imagem" src="ilustracao1.jpg" alt="AMÉLIA">',
//9 SÁBADO
'<img class="imagem" src="ilustracao2.png" alt="SÁBADO">',
//10 SHULGIN
'<img class="imagem" src="2015.jpg" alt="SHULGIN">',
//11 INFOMEDIA
'<iframe class="youtube" frameBorder="0" src="infomedia/FILE2404.html"></iframe>',
//12 IDPC WEBSITE
'<iframe class="youtube" frameBorder="0" src="DesignSocial/index.html"></iframe>',
//13 POR FALAR NOUTRA COISA INFANTIL
'<iframe class="youtube" frameBorder="0" src="Blog/index.html"></iframe>',
//14 SPACE DIMENSION
'<iframe class="youtube" frameBorder="0" src="SpaceDimension/index.html"></iframe>',
//15 NARRATIVA FOTOGRAFIAS
'<iframe class="youtube" src="https://www.youtube.com/embed/KzEpSZU8hM4?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//16 MIGAS POWER POWDER
'<iframe class="youtube" src="https://www.youtube.com/embed/k5pGgvFjRG4?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//17 MEDICINAS ALTERANATIAS TRAILER
'<iframe class="youtube" src="https://www.youtube.com/embed/baXdytNv-Sw?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//18 MEDICINAS ALTERANATIAS EP01
'<iframe class="youtube" src="https://www.youtube.com/embed/cyWPNYX1Gqg?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//19 PANORAMICA
'<div id="pan"><img class="height" src="PanWeb.jpg" alt="Fotografia Panorâmica tirada no Porto à beira mar. 2021"></div>',
//20 TRAILER NIGHT OF THE LIVING DEAD
'<iframe class="youtube" src="https://www.youtube.com/embed/ovsZWblt9L4?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//21 CAFFEINE
'<img class="imagem" src="caffeineSmall.jpg" alt="Cafeína">',
//22 KEITH HARING
'<img class="imagem" src="arte3.gif" alt="Animação simples com obra de Keith Haring. 2019">',
//23 POESIA
'<img class="imagem" src="poesia.jpg" alt="Poema  Nota Discordante  de Fernando Namora. 2018">',
//24 PHARMAKON 3
'<iframe alt="Fanzine Pharmakon nº3. 2020" src="https://online.fliphtml5.com/dnvha/yolq/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="youtube" ></iframe>',
//25 PHARMAKON 1
'<iframe alt="Fanzine Pharmakon nº1. 2020" src="https://online.fliphtml5.com/dnvha/smhq/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="youtube" ></iframe>',
//26
'<img class="imagem" src="flor.tif" alt="Imagem digital que fiz no Paint.net antes de 2010. Das primeiras imagens que fiz e que consegui guardar até agora.">',
//27
'',
//28
'',
//29
'',
//30
'',
//31
'',
//
'',
//
'',
//
'',
//
'',
//
'',
//
'',
//
'',
//
'']


var trabalhosVideo = ["0",
    '<iframe alt="Vídeo experimental sobre Rotina Diária, em específico os suplementos alimentares. Gravado com telemóvel e lente macro de 1euro. 2018" class="youtube" src="https://www.youtube.com/embed/ymunZbD32D4?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    '<iframe alt="Kynetic Typography - Videoclip só com tipografia cinética. 2020" class="youtube" src="https://www.youtube-nocookie.com/embed/7YSbiIX-woQ?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    '<iframe alt="Vídeo sobre a Fé. Põe em igualdade rituais e crenças atuais de todo o mundo. Trabalho de grupo com o Leandro Afonso. 2020" class="youtube" src="https://www.youtube.com/embed/H1G1e5VOeXI?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" rel="0" allowfullscreen></iframe>',

    '<iframe alt="Vídeo Time Lapse sobre o Trânsito no Porto. 2020" class="youtube" src="https://www.youtube.com/embed/_c9i0oHCScg?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" rel="0" allowfullscreen></iframe>',

    '<iframe alt="Amanhecer 2021" class="youtube" src="https://www.youtube.com/embed/uD2AljAy5q0?autoplay=1&enablejsapi=1&modestbranding=1&color=white&rel=0&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" rel="0" allowfullscreen></iframe>',

    ''

  ];

  var trabalhosImagem = ["0",
    '<img class="imagem" src="arte2.gif" alt="Animação de obra de Keith Haring. 2019?">',

    '<img class="imagem" src="arte1.gif" alt="Spoof Ad da empresa MyProtein. 2019">',

    '<a href="lunestacompaison.png" target="_blank"><img class="imagem" src="lunestacompaison.png" alt="Spoof Ad do medicamento Lunesta (à esquerda é o original). Eu mudei a ordem do texto - Aquilo que no original tem mais destaque, no meu tem menos importância. 2019"></a>',

    '<img class="imagem" id="uber" onmouseover="uber2()" onmouseout="uber1()" src="UberHugo.jpg" alt="Pixel Art. Frame de um possível jogo. O jogador seria um estafeta da Uber que teria de entregar encomendas. Ganharia bónus ao arrancar retrovisores de carros. 2019">',

    '<div id="pan"><img class="height" src="PanSmall.jpg" alt="Fotografia Panorâmica tirada no Porto à beira rio. 2021"></div>',


        '']


    var trabalhosWeb = ["0",
    '<iframe alt="Website desenvolvido para um festival de música inventado, baseado num cartaz construtivista Russo. 2019" class="youtube" frameBorder="0" src="Cross/index.html"></iframe>',

    '<iframe alt="Protótipo para um jogo de escolhas, onde o jogador tem de acabar de programar um website controlando a sua ansiedade e energia. 2020" class="youtube" frameBorder="0" src="wdw/index.html"></iframe>',

    '<iframe alt="Gerador de um website para fotografar, documentar e competir com cartas de suculentas. 2021" class="youtube" frameBorder="0" src="gerador/index.html"></iframe>',


      ]


    var trabalhosOutros = ["0",
    '<iframe alt="Pequeno texto de pesquisa sobre o Teletexto. 2020" class="youtube" frameBorder="0" src="teletexto/index.html"></iframe>',

    '<iframe alt="Fanzine Pharmakon com 3 números. O tema são substancias psicoativas principalmente ilegais. A nº2 foi todo escrito por mim. 2020" src="https://online.fliphtml5.com/dnvha/krhl/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="youtube" ></iframe>',

    '<iframe alt="Publicação sobre a Cafeína feita em Projeto de Impressão. 2020" src="https://online.fliphtml5.com/dnvha/boah"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="youtube" ></iframe>',


        '',

        '']
