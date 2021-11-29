//PERGUNTAS, POR ORDER.
var perguntas = {
  //DIA 1 - 1 SEGUNDA------------------------------------
  "1": ["<p>Acordas meio cansado e ansioso... Dormiste mal, pois passaste o domingo inteiro na cama a ver vídeos.</p><p> O tempo aperta, já só tens 1 semana para acabar o website. Tens de o entregar sem falta segunda-feira de manhã, de hoje a oito...</p> <p>O que será melhor fazer agora?</p> "],
  //DIA 1 - 2
  "2": ["<p>Enquanto almoçavas ficou um tempo brutal. É uma boa oportunidade para ir dar uma caminhada até ao ginásio! Meter as ideias em ordem.</p><p>Ou será que estás só a adiar o inevitável?</p>"],
  //DIA 1 - 3
  "3": ['A "famosa" segunda-feira está quase a terminar, para o bem ou para o mal.'],
  //DIA 2 - 1 TERÇA----------------------------------
  "4": ["Por alguma razão o despertador não tocou. Ou talvez tenha tocado mas desligaste-o, é impossível lembrar. Ainda tens algumas horas antes de ires almoçar com uns amigos."],
  //DIA 2 - 2
  "5": ["Aquela pessoa que adoras mas que pouco te liga pediu-te ajuda num trabalho. Conseguiste ajudar facilmente, a pessoa agradeceu muito! Isso fez-te sentir mais relaxado, pode ser que as coisas corram melhor com o teu trabalho."],
  //DIA 2 - 3
  "6": ["Prometeste-te que ias trabalhar, mas a internet está lenta e não vai melhorar. Será que consegues trabalhar assim ou só te vais irritar?"],
  //DIA 3 - 1 QUARTA----------------------------------
  "7": ["Tens uma consulta ao final da manhã, mas ainda há tempo antes que pode ser aproveitado. Será que deves cansar-te demasiado antes da consulta?"],
  //DIA 3 - 2
  "8": ["Tanto te queixas que não consegues fazer tudo o que tens para fazer que te receitaram Ritalina. Ela vai melhorar a tua performance mas causar ansiedade. Para a usares para trabalhar, marca a check-box antes do botão Trabalhar."],
  //DIA 3 - 3
  "9": ["<p>O tempo passa tão rápido, parece que a semana está a acabar não tarda nada... Tens de fazer este website para o bem do teu futuro! (e do teu presente)</p>"],
  //DIA 4 - 1 QUINTA------------------------------
  "10": ["<p>Houve um problema elétrico durante a noite, na zona toda. O disco externo estava ligado à fixa e parece que deixou de funcionar...</p> <p>Sim, queimou mesmo, não há nada a fazer... Nem acreditas que perdeste aqueles ajustes que já tinhas feito!</p>"],
  //DIA 4 - 2
  "11": ["", ""],//está em js.js
  //DIA 4 - 3
  "12": ["Que semana... Convinha o website estar quase pronto, mas está dificil... Estás a começar a ver o teu fim de semana a ir por água abaixo!"],
  //DIA 5 - 1 SEXTA-----------------------------------
  "13": ["<p>Estás na cama, ainda a dormir. Mas estás a pensar, a sonhar: tentas perceber se a soma de lados opostos num dado é sempre 7...</p> <p>Parece-te que sim, mas isso não faz sentido...</p> <p>Acordas com esse pensamento.</p>"],
  //DIA 5 - 2
  "14": ["Acordaste cedo, mas não te sentes muuuiito cansado. Hoje é a última oportunidade antes do fim de semana, seja para o que for."],
  //DIA 5 - 3
  "15": ["<p>Esqueceste-te que hoje à noite é o aniversário da tua amiga de infância! Prometeste que ias.</p> <p>Provavelmente seria melhor trabalhar, mas não lhe podes fazer isso... Tens de ir sair e tentar curtir!</p>"],
  //DIA 6 - 1 SÁBADO--------------------------
  "16": ["Nem acordas muito cansado, tendo em conta a noite que tiveste. Está na hora de passar ao achas que é importante!"],
  //DIA 6 - 2
  "17": ["<p>O teu amigo de Londres está na cidade e enviou-te mensagem. Ele faz stand-up e tem sempre piadas muito engraçadas para contar, aposto que me vai contar umas quantas novas.</p> <p>Não tens a certeza se devias ir, tinhas outros planos... Ir ter com ele vai-te cansar, mas vais relaxar e curtir de certeza.</p>"],
  //DIA 6 - 3
  "18": ["Sábado à noite é sempre especial. Ou devia ser. Devias compensar a tarde..."],
  //DIA 7 - 1 DOMINGO-----------------------------
  "19": ["<p>Acordas um pouco enjoado. Será que é a Ritalina que te anda a fazer mal? Ou pode ser de não a tomares... Talvez seja um efeito placebo.</p> <p>Passando à frente...</p> "],
  //DIA 7 - 2
  "20": ["Último dia antes de ter de enviar o website. Nem queres pensar se consegues ou não, estás a ficar ansioso... Tens de trabalhar mas odeias domingos, ainda por cima chuvosos, começar a sentir a ansiedade..."],
  //DIA 7 - 3
  "21": ["Última noite antes da ter de enviar o website! O tempo passou a correr.",
          "O website está completo e já foi revisto várias vezes. Devia aproveitar para tentar terminar a semana o melhor possível!"],


  //FIM-------------------------------------------------
  "22": [
    "<p>Conseguiste entregar o website 100% completo e nem estás muito cansado e ansioso! Fantástico!!<p/> <p>PARABÉNS<p/>",
    "<p>Conseguiste entregar o website 100% completo! Não te sentes muito bem e custou muito, mas valeu a pena!</p> <p>Parabéns!</p>",
    "<p>É difícil...<p/> <p>Não conseguiste acabar o website e desiludiste muita gente.<p/> <p>Mas olha - tentaste, aprendeste muito e continuas motivado!<p/>",
    "<p>É difícil...<p/> <p>Tentaste, deste tudo mas não conseguiste e estás acabado.<p/> <p>Pensas que devias mudar de profissão... Ou será o cansaço e ansiedade a falar?<p/>"],
}

//RESPOSTAS ÀS OPÇÕES, QUE VAO SER RANDOM EM PARTE------------------------------------------------------
var resposta = {
  "trabalharBem" :
  [ "Que cliché, entornaste chá no teclado... O que vale é que foi pouco, não deu problemas e ainda deu para rir com o susto! O teclado ainda escreveu muito código e vai continuar a escrever",
    "Quando o trabalho rende, é difcil não ficar mais bem-disposto! Que bom.",
    "Bebes a bebida energética que o teu amigo te trouxe de Amsterdão. Não fazes ideia dos ingredientes, mas ela funciona bem! Bom trabalho.",
    "Conseguiste dar um grande avanço no trabalho. Ninguém te convence que o cansaço não é um conceito inventado!",
    "Metes mãos à obra, tem de ser. Avanças um bom pedaço!",
    "Estava difícil com tanto barulho das obras... Ainda bem que tens os teus auscultadores anti ruído! Assim trabalha-se bem.",
    "Bebes um café, ligas a música e começas a trabalhar. 2 horas passam a correr e fizeste tanto!",
    "Compras um teclado mecânico, como querias há muito tempo. Demoras a habituar-te, mas agora consegues escrever 3% mais rápido! Nunca pensaste atingir este grau de rapidez e eficiência, boa sessão de trabalho."],

  "trabalharMal" :
  [ "É preciso começar por algum lado e fizeste bem em tentar começar logo. Mas mesmo com esforço, às vezes não vai lá.... Pouco consegues avançar e isso não sabe bem.",
    "Pouco tempo depois de começares a trabalhar, o teu rato fica sem pilhas. Sabes que tens pilhas algures, mas não as consegues encontrar... Quando chegas à loja para comprar mais, não te lembras qual o tipo de pilhas que o rato usa... Que irritante. Talvez esteja na hora de comprar um recarregável para evitar problemas no futuro.",
    "Às vezes compensa descansar ou relaxar para depois trabalhar melhor... Porque se correr sempre assim, mal, isto não vai lá",
    "Perdeste muito tempo a editar o ficheiro errado. Precisas prestar mais atenção!",
    "Tanta coisa a correr mal... Parece que este jogo tem mais destinos negativos do que positivos ou quê?!",
    "Tens tanto para fazer que nem sabes por onde começar, nem te consegues concentrar.",
    "Comeste demasiados doces... Ir comendo um docinho pode ajudar a trabalhar, mas demasiado açúcar causa brain-fog e dores de barriga...",
    "Se gastas a maior parte do tempo no computador a discutir com estranhos no facebook, não avanças grande coisa no trabalho! Não ligues a esses gajos e trabalha mas é..."],

  "dormirBem" :
  [ "Estavas a precisar, que belo sono foi. Sentes-te melhor.",
    "Quem é que está a meter Techno tão alto a esta hora?! O que vale é que estás habituado a dormir em festivais, o som embala-te e dormes bem como um bebé.",
    "Um colega teu deu-te um comprimido para dormir há uns tempos. Tens de lhe dizer que funciona e bem!",
    "Adormeces rapidamente com o ron-ron do teu gato, que bom.",
    "<p>Sacas o áudio de uma máquina de lavar louça dos anos 90 e dormes como dormias em 1990, quando ainda nem sequer eras nascido.</p> <p>Que sono bom.</p>",
    "<p>20 minutos a fazer a cama, a meter cuidadosamente os lençóis debaixo do colchão valeu bem a pena.</p> <p>Dormes bem.</p>",
    "zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz zZz"],

  "dormirMal" :
  [ "Estás na cama, mas tens muito na cabeça. No meio de tantos pensamentos, nem sabes bem se conseguiste dormir a sério ou não...",
    "Tentas dormir, mas não consegues encontrar uma posição confortável... Quanto te levantas reparas que alguém meteu uma ervilha debaixo do teu colchão!",
    "O cão do vizinho não se cala! Apetecia-te tanto descansar, mas assim é impossível.",
    "Outra vez as obras?! Quem se lembra de fazer barulho a esta hora? ...",
    "Quando te vais a deitar reparas que o teu gato vomitou na tua cama. Com a  preguiça vais dormir para o sofá, mas acordas com uma valente dor de costas...",
    "Não consegues dormir... A meia-vida da cafeína é de 4 horas, tens de te lembrar disso antes de começar a beber cafés, não depois!",
    "Esqueceste-te de por o telemóvel em silêncio e acordas com um email a dizer que há divorciadas num raio de 2km interessadas em ti. Nem consegues dormir a pensar no assunto.",
    "Andas a fumar menos erva e isso causa-te pesadelos, dormes mal. Hoje sonhaste que a tua vida é só trabalhar, ir ao ginásio ou dormir... Que horrível!",
    "Acordas com a almofada toda babada e por alguma razão não consegues dormir mais."],

  "ginasioBem" :
  [ "Que belo treino, sentes-te bastante melhor.",
    "A pessoa com o corpo mais bonito do ginásio ajudou-te no treino, nunca levantaste pesos tão pesados! Vir ao gym agora valeu a pena! Provavelmente.",
    "Estão a oferecer RedBull à porta do ginásio! Passas pela entrada duas vezes, vais treinar e parece que tens asas! Que bom treino.",
    '"Queimas-te" toda a adrenalina no ginásio! Estás chill, que bom.',
    "Não estavas a espera, mas apesar de tudo conseguiste um novo recorde pessoal no squat!",
    "Exageraste na quantidade de pré-treino. A ideia dos suplementos é dar um bocado de energia, não é provocar ataques de ansiedade! Tens que reduzir a dose. ",
    "Sais do ginásio e sentes que toda a conversa sobre os benefícios do exercício físico é verdadeira! Sentes-te tão bem.",
    "Em vez de ires ao ginásio decides fazer os exercícios em casa. Descobres um canal no youtube onde explicam muita coisa, fazes um treino excelente!",
    //BOTAO SAIR
    "Fizeste bem em ir! Foi divertido, não te cansaste e estás muito mais relaxado e motivado. Agora o que interessa é outro assunto!",

    "<p>Algumas das piadas que o teu amigo te contou e que decoraste:</p> <p>Encontrei um sapo dentro do meu computador. <br>Agora tenho mais memória-rã...</p> <p>Como é que os peixes viajam? <br>Vão à baleia... </p><p>Porque é que a morcega é tão feia? <br>Porque o mor-é-cego...<br>(esta ele copiou de algum site brasileiro provavelmente).</p> <p>Como é que os alpinistas se cumprimentam? <br>‘Cume é que é!’...</p> <p>Numa entrevista de emprego: <br>–Qual é o salário? <br>–Para já são 600€, mas mais tarde pode chegar aos 1000€. <br>–Ok, então eu venho mais tarde! ...</p> <p>(O teu amigo não se está a sair bem lá fora.)</p>"
  ],

  "ginasioMal" :
  [ "O treino estava a correr bem, até deixar de correr... Não sabes se foi a comida que caiu mal, mas precisaste de pedir ajuda para limpar a porcaria que fizeste.",
    "O ginásio está fechado hoje... Eles enviaram email e SMS! Não tens desculpa por te esqueceres de algo assim. Fica a caminhada que deste até ao gym e de volta...",
    "As sapatilhas novas que compras-te afinal não são nada confortáveis! Nem te consegues concentrar com o incómodo nos pés... Que treta",
    "Ainda te dói demasiado as costas, por teres dormido numa má posição no outro dia. Não foi o melhor treino, de longe...",
    "Sais do ginásio e sentes que toda a conversa sobre os benefícios do exercício físico é mentira! Sentes-te tão mal.",
    "Podia ter corrido melhor, dói-te as costas. Provavelmente uma noite dormida numa má posição?",
    "O ginásio está cheio! A esta hora não costuma estar... Não fazes grande coisa, as máquinas estão ocupadas e não há espaço para colchões."],
}



var ok = {
  "bem" :
  [ "Siga",
    "Oupa!",
    "siga",
    "Ok!",
    "Ok!",
    "Boa",
    "Boa!",
    "Boa",
    "Que nice",
    "A'right",
    "Let's go",
    "oh yeah",
    "Oh yeah",
    ":)",
    "Sim!"],
  "mal" :
  [ "Ok...",
    "Hm",
    "Esquece isto",
    "Bolas, ok",
    "Avançar",
    "ok",
    "ok",
    "ok",
    "Tinha de ser...",
    ":(",
    ":(",
  ]
}


var datas = {
  "1" : ['<span id="dataColor">Segunda-feira</span>, 09:' + rando(10,59)],
  "2" : ['Segunda-feira, 14:' + rando(10,59)],
  "3" : ['Segunda-feira, 21:' + rando(10,59)],
  "4" : ['<span id="dataColor">Terça-feira</span>, 09:' + rando(10,59)],
  "5" : ['Terça-feira, 13:' + rando(10,59)],
  "6" : ['Terça-feira, 21:' + rando(10,59)],
  "7" : ['<span id="dataColor">Quarta-feira</span>, 07:' + rando(10,59)],
  "8" : ['Quarta-feira, 14:' + rando(10,59)],
  "9" : ['Quarta-feira, 22:04'],
  "10" : ['<span id="dataColor">Quinta-feira</span>, 9:' + rando(10,59)],
  "11" : ['Quinta-feira, 12:' + rando(10,59)],
  "12" : ['Quinta-feira, 21:' + rando(10,59)],
  "13" : ['<span id="dataColor">Sexta-feira</span>, 07:' + rando(10,59)],
  "14" : ['Sexta-feira, 13:' + rando(10,59)],
  "15" : ['Sexta-feira, 22:' + rando(10,59)],
  "16" : ['<span id="dataColor">Sábado</span>, 10:' + rando(10,59)],
  "17" : ['Sábado, 14:00'],
  "18" : ['Sábado, 22:' + rando(10,59)],
  "19" : ['<span id="dataColor">Domingo</span>, 08:' + rando(10,59)],
  "20" : ['Domingo, 13:' + rando(10,59)],
  "21" : ['Domingo, 21:' + rando(10,59)],
  "22" : ['']
}

var listaBotoes = {
  "trabalhar" :[
    "Trabalhar",
    "Trabalhar",
    "Trabalhar",
    "Trabalhar",
    "Trabalhar",
    "Programar",
    "Work'ar",
    "Trabalhar",],
  "dormir" :[
    "Dormir",
    "Dormir",
    "Dormir",
    "Descansar",
    "Sesta",
    "zZz",
    "Sesta",
    "Dormir",
    "Nanar",
    "Dormir",],
  "ginasio" :[
    "Ginásio",
    "Ginásio",
    "Ginásio",
    "Exercício",
    "Puxar ferro",
    "Ginásio",
    "Workout",]
  }


var textoBarras = {
  "textoProgresso" :[
    "Só falta tudo",
    "No início",
    "Algum avanço",
    "Falta um pedaço",
    "Já faltou mais!",
    "Não falta muito",
    "Quase pronto",
    "Quaase pronto",
    "Últimos ajustes",
    "Últimas revisões",
    "Quase feito!",
    "100%!"],
  "textoEnergia" :[
    "Zombie",
    "A cair pró lado",
    "Sonolento",
    "Cansado",
    "Preguiçoso",
    "Normal",
    "Fixe",
    "Energizado",
    "Cheio de pica",
    "Com power",
    "Máquina",
    "FULL-ON"],
  "textoRelax" :[
    "Em pânico",
    "A tremer",
    "Ansioso",
    "Stressado",
    "Desconcentrado",
    "Normal",
    "Relaxado",
    "Bem",
    "Focado",
    "Ótimo",
    "Excelente",
    "NIRVANA"]
  }

var cores = ["red", "red", "#f35336", "#da614e", "#da614e", "#696969", "#696969", "#40916c", "#40916c7", "#40916c", "#18ce7b"];
