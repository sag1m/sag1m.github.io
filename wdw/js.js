//    2DO
//meter um separador 'segunda feira' e tirar 'segunda-feira' da data.
//faer esperar 2 segundos antes de aparecer os botoes

// Meter botões diferentes em fases específicas
//fazer visual


//ELEMENTOS
var container = document.getElementById('container');
var center = document.getElementById('center');
var pergunta = document.getElementById('pergunta');
var esquerda = document.getElementById('esquerda');
var direita = document.getElementById('direita');
var botoes = document.getElementById('botoes');
var data = document.getElementById('data');
var instrucoes = document.getElementById('instrucoes');

var number = rando(1,100); //isto é para fazer as probablidades



//BARRAS
var barraProgresso = document.getElementById('barraProgresso');
var progresso = 0;
var barraEnergia = document.getElementById('barraEnergia');
var energia = 50;
var barraRelax = document.getElementById('barraRelax');
var relax = 50;

//BARULHOS
//tirei este código e adaptei-o do w3 Schools
var soundJogar = new sound("sounds/jogar.wav");
var soundOk = new sound("sounds/ok.wav");
var soundMal = new sound("sounds/bad.wav");
var soundBem = new sound("sounds/good.wav");
var soundPerder = new sound("sounds/perder.wav");
var soundBonusGood = new sound("sounds/bonusGood.wav");
var soundBonusBad = new sound("sounds/bonusBad.wav");
var soundFinalGanhar1 = new sound("sounds/finalGanha1.wav");
var soundFinalGanhar2 = new sound("sounds/finalGanha2.wav");
var soundFinalPerder1 = new sound("sounds/finalPerde1.wav");
var soundFinalPerder2 = new sound("sounds/finalPerde2.wav");

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause();
  }
}


//PERDER, GAME OVER
function perderEnergia() {
  console.log('GAME OVER - Energia 0');
  energia = 0;
  barraEnergia.style = 'width: 0%';
  pergunta.innerHTML = 'Acordas no Hospital. Estavas completamente sem energia, caíste para o lado e alguém chamou o 112. Tens de ter mais cuidado...';
  okButton.style = "display: none";
  botaoRecomecar.style = "display: inherit";
  soundPerder.play();

  atualizarFrases();
}

function perderRelax() {
  console.log('GAME OVER - Relax 0');
  relax = 0;
  barraRelax.style = 'width: 0%';
  pergunta.innerHTML = 'Acordas no Hospital. Estavas a ter uma ataque de pânico, não te estavas a controlar e alguém chamou o 112. Tens de ter mais cuidado...';
  okButton.style = "display: none";
  botaoRecomecar.style = "display: inherit";
  soundPerder.play();

  atualizarFrases();
}




//ATUALIZAR COISAS e valores máximos e mínimos
function atualizarBarraProgresso() {
  if (progresso < 0) {
    progresso = 0;
  } else
  if (progresso > 100) {
    progresso = 100;
  }

  barraProgresso.style = 'width: ' + progresso + '%';





}

function atualizarBarraEnergia() {
  if (energia > 100) {
    energia = 100;
  }
  barraEnergia.style = 'width: ' + energia + '%';
  barraEnergia.innerHTML = '';

}

function atualizarBarraRelax() {
  if (relax > 100) {
    relax = 100;
  }
  barraRelax.style = 'width: ' + relax + '%';
  barraRelax.innerHTML = '';
}

//RECOMEÇAR RELOAD reset recomeçar tentar outra vez
botaoRecomecar.onclick = recomecar

function recomecar() {
  soundOk.play();
  location.reload();
}



//BOTÕES
var botaoIniciar = document.getElementById('botaoIniciar');
var botaoTrabalhar = document.querySelector('#botaoTrabalhar');
var botaoDormir = document.querySelector('#botaoDormir');
var botaoGinasio = document.querySelector('#botaoGinasio');
var okButton = document.querySelector('#okButton');
var botaoInstrucoes = document.getElementById('botaoInstrucoes');




//ADICIONAR BOTOES E COISAS, chamado estas funções depois
var criarBotao = document.createElement('button');

function adicionarBotao(mensagem) {
  criarBotao.setAttribute("id", mensagem);
  center.prepend(criarBotao);
  criarBotao.innerHTML = mensagem;
}

var check1 = document.createElement('input');

function adicionarCheck(mensagem) {
  botoes.prepend(check1);
  check1.type = "checkbox";
  check1.style = "margin:0; padding:0"
  check1.innerHTML = mensagem;
}

//só funciona com uma variável nova, para criar um botao novo
var criarBotao2 = document.createElement('button');

function adicionarBotao2(mensagem) {
  botoes.append(criarBotao2);
  criarBotao2.setAttribute("id", mensagem);
  criarBotao2.innerHTML = mensagem;
}

var paragrafoProgresso = document.getElementById("fraseProgresso");
var paragrafoEnergia = document.getElementById("fraseEnergia");
var paragrafoRelax = document.getElementById("fraseRelax");






//ATUALIZAR AS FRASES DAS BARRAS
var fraseProgresso = 0;
var fraseEnergia = 5;
var fraseRelax = 5;
function atualizarFrases() {


    fraseProgresso = progresso / 10;
  fraseProgresso = Math.round(fraseProgresso);
  //parseInt(fraseProgresso);
  paragrafoProgresso.innerHTML = textoBarras["textoProgresso"][fraseProgresso];
  //barraProgresso.style.backgroundColor = cores[fraseProgresso]; //Tive de meter o código assim porque se meter 'style = ' ele substitui o estilo, não acrescenta


    fraseEnergia = energia / 10;
  fraseEnergia = Math.round(fraseEnergia);
  //parseInt(fraseEnergia);
  paragrafoEnergia.innerHTML = textoBarras["textoEnergia"][fraseEnergia];
  barraEnergia.style.backgroundColor = cores[fraseEnergia]; //Tive de meter o código assim porque se meter 'style = ' ele substitui o estilo, não acrescenta





    fraseRelax = relax / 10;
  fraseRelax = Math.round(fraseRelax);
  //parseInt(fraseEnergia);
  paragrafoRelax.innerHTML = textoBarras["textoRelax"][fraseRelax];
  barraRelax.style.backgroundColor = cores[fraseRelax]; //Tive de meter o código assim porque se meter 'style = ' ele substitui o estilo, não acrescenta







  if (progresso == 100) {
    paragrafoProgresso.innerHTML = textoBarras["textoProgresso"][11];
   }
  if (energia == 100) {
   paragrafoEnergia.innerHTML = textoBarras["textoEnergia"][11];
  }
  if (relax == 100) {
    paragrafoRelax.innerHTML = textoBarras["textoRelax"][11];
   }


   if (progresso == 0) {
     paragrafoProgresso.innerHTML = 'Falta começar';
    }
   if (energia == 0) {
    paragrafoEnergia.innerHTML = "Morto?";
   }
   if (relax == 0) {
     paragrafoRelax.innerHTML = 'Morto?';
    }

}


//TEXTO APARECE COM RATO
//Não percebo como tenho de meter as variaveis na função de cima mas nao tenho de as meter a função de baixo. Deve ser porque nada acontece entre as funções

function ratoP1() {
  var pProgresso = document.getElementById("pProgresso");
  var cProgresso = document.getElementById("contentorProgresso");
  pProgresso.style = "display: inherit"
}
function ratoP2() {
  pProgresso.style = "display: none;"
}

function ratoE1() {
  var pEnergia = document.getElementById("pEnergia");
  var cEnergia = document.getElementById("contentorEnergia");
  pEnergia.style = "display: inherit"
}
function ratoE2() {
  pEnergia.style = "display: none;"
}

function ratoR1() {
  var pRelax = document.getElementById("pRelax");
  var cRelax = document.getElementById("contentorRelax");
  pRelax.style = "display: inherit"
}
function ratoR2() {
  pRelax.style = "display: none; transition: display 1s;"
}









//AÇÕES DOS BOTÕES

//BOTÃO TRABALHAR
botaoTrabalhar.onclick = trabalhar;
function trabalhar() {
  number = rando(1,100); //tiro o VAR antes para ele atualizar sempre que faz o trabalhar
  botaoTrabalhar.innerHTML = listaBotoes["trabalhar"][rando(0, 6)];
  data.style = 'display: none';
  botoes.style = 'display: none';

  if (number < ( (energia + relax) / 2 )) { //CORRER BEM
    soundBem.play();
    pergunta.innerHTML = resposta["trabalharBem"][rando(0, 7)];
    progresso = progresso + rando(8, 12);
    atualizarBarraProgresso();
    energia = energia - rando(9, 13);
    atualizarBarraEnergia();
    relax = relax - rando(9, 13);
    atualizarBarraRelax();
    okButton.style = "display: inherit"
    okButton.innerHTML = ok["bem"][rando(0, 14)];
    console.log('+P -E -R trabalhaste bem');
  } else { //CORRER MAL
    soundMal.play();
    pergunta.innerHTML = resposta["trabalharMal"][rando(0, 7)];
    progresso = progresso + rando(6, 8);
    atualizarBarraProgresso();
    energia = energia - rando(13, 18);
    atualizarBarraEnergia();
    relax = relax - rando(13, 18);
    atualizarBarraRelax();
    okButton.style = "display: inherit"
    okButton.innerHTML = ok["mal"][rando(0, 10)];
    console.log('+P -E -R trabalhaste mal');
  }

  if (check1.checked == true) { //RITALINA
    progresso = progresso + rando(7, 12);
    atualizarBarraProgresso();
    relax = relax - rando(9, 11);
    atualizarBarraRelax();
    energia = energia + rando(4, 6);
    atualizarBarraEnergia();
    console.log('+P +E -R ritalin');
    adicionarParagrafoAntes("Tomas Ritalina.");

  }
    console.log('P:' + progresso + '  E:' + energia + '  R:' + relax);
  //TEXTOS DAS BARRAS
  atualizarFrases();

  //GAME OVER
  if (energia < 1) {perderEnergia()};
  if (relax < 1) {perderRelax()};
}





//BOTÃO DORMIR
botaoDormir.onclick = dormir;
function dormir() {
  number = rando(1,100);
  botaoDormir.innerHTML = listaBotoes["dormir"][rando(0, 8)];
  data.style = 'display: none';
  botoes.style = 'display: none';
  if (number < ( (energia + relax) / 2 )) { //CORRER BEM
    soundBem.play();
    pergunta.innerHTML = resposta["dormirBem"][rando(0, 6)];
    energia = energia + rando(12, 20);
    atualizarBarraEnergia();
    relax = relax + rando(5, 12);
    atualizarBarraRelax();
    okButton.style = "display: inherit"
    okButton.innerHTML = ok["bem"][rando(0, 14)];
    console.log('+E +R dormiste bem');
    console.log('P:' + progresso + '  E:' + energia + '  R:' + relax);
  } else { //CORRER MAL
    soundMal.play();
    pergunta.innerHTML = resposta["dormirMal"][rando(0, 6)];
    energia = energia + rando(7, 13);
    atualizarBarraEnergia();
    relax = relax - rando(2, 5);
    atualizarBarraRelax();
    okButton.style = "display: inherit"
    okButton.innerHTML = ok["mal"][rando(0, 10)];
    console.log('+E +R dormiste mal');
    console.log('P:' + progresso + '  E:' + energia + '  R:' + relax);
  }
  //GAME OVER
  if (energia < 1) { perderEnergia()};
  if (relax < 1) {perderRelax()};

  //TEXTO DA BARRA
  atualizarFrases();
}



//BOTÃO GINÁSIO
botaoGinasio.onclick = ginasio;
function ginasio() {
  number = rando(1,100);
  botaoGinasio.innerHTML = listaBotoes["ginasio"][rando(0, 6)];
  data.style = 'display: none';
  botoes.style = 'display: none';
  if (number < ( (energia + relax) / 2 )) { //CORRER BEM
    soundBem.play();
    pergunta.innerHTML = resposta["ginasioBem"][rando(0, 6)];
    console.log('-E +R exercício correu bem');
    console.log('P:' + progresso + '  E:' + energia + '  R:' + relax);
    energia = energia - rando(0, 10);
    atualizarBarraEnergia();
    relax = relax + rando(12, 22);
    atualizarBarraRelax();
    okButton.style = "display: inherit"
    okButton.innerHTML = ok["bem"][rando(0, 14)];
  } else { //CORRER MAL
    soundMal.play();
    pergunta.innerHTML = resposta["ginasioMal"][rando(0, 6)];
    energia = energia - rando(5, 10);
    atualizarBarraEnergia();
    relax = relax + rando(5, 12);
    atualizarBarraRelax();
    okButton.style = "display: inherit"
    okButton.innerHTML = ok["mal"][rando(0, 10)];
    console.log('-E +R exercício correu mal');
    console.log('P:' + progresso + '  E:' + energia + '  R:' + relax);
  }

  //TEXTOS DAS BARRAS
  atualizarFrases();

  //GAME OVER
  if (energia < 1) {perderEnergia()};
  if (relax < 1) {perderRelax()};
}









//esperar

//function esperar() {


  //  setTimeout(esperar() {
    //  center.style = 'display: inherit';
      //console.log('damn');

//}, 1000);

//}












//INSTRUÇÕES - botao de mostrar
botaoInstrucoes.onclick = showHide;

function showHide() {
  soundOk.play();
  instrucoes.style = "display: inherit";
  botaoInstrucoes.style = "display: none";
  console.log('O objetivo é fazer o Progresso chegar a 100.');
  console.log('Tens 7 dias para o fazer, cada um com 3 fases/3 perguntas (21 fases ao todo).');
  console.log('Tens de controlar 3 fatores - Progresso, Energia e Relax.');
  console.log('As opções a cada fase são Trabalhar, Dormir e Ginásio.');
  console.log('Trabalhar dá Progresso mas tira Energia e Relax. ');
  console.log('Dormir dá Energia e Relax.');
  console.log('Ginásio tira Energia mas dá Relax.');
  console.log('As opções podem correr Bem ou Mal, dependendo do nível de Energia ou Relax.');
  console.log('Quanto maior o nível de Energia e Relax, maior a probablidade de Correr Bem.');
  console.log('O número de pontos que se ganha/perde por cada resposta é aleatório, até certo ponto.');
  console.log('Se Energia ou Relax chegarem a 0, Game Over.');
  console.log('Podes seguir o jogo em mais detalhe na consola do browser.');


}






//ADICIONAR PARÁGRAFOS ÁS PERGUNTAS
function adicionarParagrafo(text) {
  //criar um elemento <p>
  var newParagraph = document.createElement('p');
  //meter texto no elemento <p>
  newParagraph.innerHTML = text;
  //adicionar ao final da newsBox
  pergunta.append(newParagraph);
}

function adicionarParagrafoAntes(text) {
  //criar um elemento <p>
  var newParagraph2 = document.createElement('p');
  //meter texto no elemento <p>
  newParagraph2.innerHTML = text;
  //adicionar ao final da newsBox
  pergunta.prepend(newParagraph2);
}





//INICIO---------------------------------------------------------------------------------------------------
var fase = 0;
console.log('Na consola podes seguir e perceber o jogo com muito mais detalhe.');
console.log('Fase ' + fase + '/21');
data.style = 'display: none;'
okButton.style = 'display: none;'
var fase = 1;

botaoIniciar.onclick = comecar;

function comecar() {
  soundJogar.play();
  var h1 = document.querySelector('h1');
  //h1.style = 'display: none';
  instrucoes.style = 'display: none';
  botaoInstrucoes.style = "display: none";
  var fase = 1;
  console.log('Fase ' + fase + '/21');
  //METER TUDO À MOSTRA
  container.style = 'display: grid;'
  esquerda.style = 'display: inherit;'
  botaoIniciar.style = 'display: none;'
  //Criar as barras e o texto das barras
  atualizarBarraProgresso();
  atualizarBarraEnergia();
  atualizarBarraRelax();



  //meter coisas iniciais
  data.style = 'display: inline;'
  data.innerHTML = datas[fase][0];
  pergunta.innerHTML = perguntas[fase][0];
  botoes.style = 'display: inherit;';

  atualizarFrases();
}






//AVANÇAR DE FASE-----------------------------------
okButton.onclick = nextLevel;

function nextLevel() {
  soundOk.play();
  fase++;

  //COMEÇAR semana




  console.log('Fase: ' + fase + '/21');
  //tirar a ritalina
  check1.checked = false;
  //esconder o okButton
  okButton.style = "display: none";
  //mostrar e atualizar data e botoes
  data.style = 'display: inline;';
  data.innerHTML = datas[fase][0];
  botoes.style = 'display: inherit';
  //meter a pergunta com base na fase em que estamos
  pergunta.innerHTML = perguntas[fase][0];

  //if (fase == )




  //FASE 5 - Pessoa dá-te motivação
  if (fase == 5) {
    soundBonusGood.play();
    energia = energia + 10;
    relax = relax + 5;
    atualizarBarraEnergia();
    atualizarBarraRelax();
    atualizarFrases();
    if (energia + relax < 100) {
    adicionarParagrafo("Veio mesmo a calhar.");
  }
}


  //FASE 8
  if (fase == 8) {
    soundBonusGood.play();
    adicionarCheck('Ritalina');
  }


  if (fase == 9) {
    if (progresso < 25) {
    adicionarParagrafo("Não podes adiar para sempre, não controlas tudo, tudo pode acontecer...");
  }
}


  //FASE 10 problema elétrico
  if (fase == 10) {
    soundBonusBad.play();
    progresso = progresso - 10;
    if (progresso < 1) {
      progresso = 0;
      pergunta.innerHTML = "Houve um problema elétrico durante a noite, na zona toda. O disco externo estava ligado à fixa e parece que deixou de funcionar... Pelo menos ainda não tinha feito nada! Mas épah, tens mesmo de começar a trabalhar."
    }
    atualizarBarraProgresso();
    atualizarFrases();
  }

  //FASE 11 SENTIR BEM OU MAL
  if (fase == 11) {
    if (energia + relax < 100) {
      pergunta.innerHTML = "<p>Não te sentes muito bem, mas nem tudo é culpa tua.</p> <p>O que é certo é que quanto pior te sentes, menos provavel é as coisas correrem bem... Pensas nisso antes de decidir o que fazer hoje.</p>"
    }
    else if (energia + relax > 99) {
      pergunta.innerHTML = "Nem te sentes mal, tendo em conta a situação! Quanto melhor te sentes, melhor parece que as coisas tendem a correr :) Pensas nisso antes de decidir o que fazer hoje. "
    }

  }

  //FASE 14 SE ESTIVER CANSADO
  if (fase == 14) {
    if (energia < 100) {
      pergunta.innerHTML = "Sentes-te cansado, acordaste cedo. Mas hoje é a última oportunidade antes do fim de semana, seja para o que for..."
    }
  }


  //FASE 15 Sexta feira a noite ir sair
  if (fase == 15) {
    soundBonusBad.play();
    botoes.style = 'display: none';
    adicionarBotao('Sair');
    var botaoSair = document.querySelector('#Sair');
    //BOTÃO SAIR
    botaoSair.onclick = sair;

    function sair() {
      soundBonusGood.play();
      data.style = 'display: none';
      botoes.style = 'display: none';
      botaoSair.style = 'display: none';

      pergunta.innerHTML = resposta["ginasioBem"][8];
      console.log('+R');
      console.log('P:' + progresso + '  E:' + energia + '  R:' + relax);
      energia = energia - 0;
      atualizarBarraEnergia();
      relax = relax + rando(8,15);
      atualizarBarraRelax();
      okButton.style = "display: inherit"
      okButton.innerHTML = 'Lets go!';
      atualizarFrases();

      if (energia < 1) {
        perderEnergia()
      };
      if (relax < 1) {
        perderRelax()
      };
    }
  }


  if (fase == 16) {
    if (energia + relax > 120) {
    adicionarParagrafo("Como te sentes bem, o melhor agora será tentar trabalhar o máximo!");
  }
}






  //FASE 17 ANEDOTAS
  if (fase == 17) {
    adicionarBotao2('Rir');
    var botaoRir = document.querySelector('#Rir');
    botaoRir.onclick = rir;

    function rir() {
      soundBonusGood.play();
      data.style = 'display: none';
      botoes.style = 'display: none';
      botaoRir.style = 'display: none';

      pergunta.innerHTML = resposta["ginasioBem"][9];
      console.log('+R');
      console.log('P:' + progresso + '  E:' + energia + '  R:' + relax);
      energia = energia - 10;
      atualizarBarraEnergia();
      relax = relax + 20;
      atualizarBarraRelax();
      okButton.style = "display: inherit"
      okButton.innerHTML = 'Haha!';

      if (energia < 1) {
        perderEnergia()
      };
      if (relax < 1) {
        perderRelax()
      };
    }
  }

  if (fase == 18) {
    var botaoRir = document.querySelector('#Rir'); //chamar outra vez o botao Rir
    botaoRir.style = 'display: none'; //Tirar o botão rir que meti antes nos botoes

  }


  if (fase == 20) {
    if (progresso == 100) {
      pergunta.innerHTML = "O website está feito, não precisas de te preocupar mais com isso!"
    }
  }

  if (fase == 21) {
    if (progresso == 100) {
      pergunta.innerHTML = "O website está completo e já foi revisto várias vezes. Devias aproveitar para tentar terminar a semana o melhor possível!"
    }
  }






  //FINAL DO JOGO
  if (fase == 22) {
    data.style = 'display: none';
    botoes.style = 'display: none';
    pergunta.style = 'font-weight: 900'
    if (progresso == 100) {
      if (energia + relax > 99) {
        soundFinalGanhar1.play();
        pergunta.innerHTML = perguntas[fase][0];
      } else if (energia + relax < 100) {
        soundFinalGanhar2.play();
        pergunta.innerHTML = perguntas[fase][1];
      }
    } else if (progresso < 100) {
      if (energia + relax > 99) {
        soundFinalPerder1.play();
        pergunta.innerHTML = perguntas[fase][2];
      } else if (energia + relax < 100) {
        soundFinalPerder2.play();
        pergunta.innerHTML = perguntas[fase][3];
      }
      botaoRecomecar.style = "display: inherit";
    }
    var pontuacao = (progresso + energia + relax);
    console.log('PONTUAÇÃO: ' + pontuacao);
  }
}
