console.log('JS started');

//A DATA DE HOJE, TIRADO DE https://css-tricks.com/prefilling-date-input/
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date1").value = today;



//ELEMENTOS
var card = document.getElementById('card');

//ELEMENTOS DA CARTA
var title2 = document.getElementById('title2');
//var photo2 = document.getElementById('photo2');
var local2 = document.getElementById('local2');
var date2 = document.getElementById('date2');
var username2 = document.getElementById('username2');
var estacao2 = document.getElementById('estacao2');
var natureza2 = document.getElementById('natureza2');
var cultivo2 = document.getElementById('cultivo2');
var floracao2 = document.getElementById('floracao2');
var idade2 = document.getElementById('idade2');
var userText2 = document.getElementById('userText2');
var family2 = document.getElementById('family2');
var parents2 = document.getElementById('parents2');
var width2 = document.getElementById('width2');
var height2 = document.getElementById('height2');

var botaoCriar = document.getElementById('botaoCriar');

//nature show Hide, para esconder e mostrar Ôutdoor/Indoor
var natureSH = document.getElementById("natureSH");



//VARIÁVEIS QUE GUARTDAM OS VALORES (tem que ficar em baixo, dentro da função, nao sei porquê)
//var username = document.getElementById("username1").value;



//MOSTRAR E OCULTAR OPÇÕES DE CRIAR ACRTA

function showNature() {
  natureSH.style = "display: inherit";
}
function hideNature() {
  natureSH.style = "display: none";
}




//IMAGEM NA CVARTA, CÓDIGO DO STACK OVERFLOW, THANKS XD
const photo2 = document.getElementById('photo2');
const file = document.getElementById('file');
const reader = new FileReader();
reader.addEventListener("load", function () {
  photo2.style.backgroundImage = `url(${ reader.result })`;
}, false);
file.addEventListener('change',function() {
  const image = this.files[0];
  if(image) reader.readAsDataURL(image);
}, false);





//PARA JÁ, OS ESTILOS DAS CARTAS

function estilizar(estilo) {
  // Get HTML head element
  var head = document.getElementsByTagName('HEAD')[0];
  // Create new link Element
  var link = document.createElement('link');
  // set the attributes for link element
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/'+ estilo + '.css';
  // Append link element to HTML head
  head.appendChild(link);


}










//CARREGAR NO BOTAO CRIAR CARTA__________________________________________
botaoCriar.onclick = gerarCarta;
function gerarCarta() {

    //  1) valores têm de ficar guardados em variáveis.
      var userName = document.getElementById("userName1").value;
      var userText = document.getElementById("userText1").value;
      var date = document.getElementById("date1").value;
      var local = document.getElementById("local1").value;

      var genus = document.getElementById("genus1").value;



    //  2) os elementos da carta têm que copiar os valores das variáveis.
    userName2.innerHTML = userName;
    userText2.innerHTML = userText;
    date2.innerHTML = date;
    local2.innerHTML = local;
    genus2.innerHTML = genus;











    //  3) MOSTRAR E OCULTAR ÍCONES
    //guardar os valores 1 e 2
    var wild1 = document.getElementById("wild1");
    var wild2 = document.getElementById("wild2");
    var cultivated1 = document.getElementById("cultivated1");
    var cultivated2 = document.getElementById("cultivated2");
    var outdoor1 = document.getElementById("outdoor1");
    var outdoor2 = document.getElementById("outdoor2");
    var indoor1 = document.getElementById("indoor1");
    var indoor2 = document.getElementById("indoor2");
    var flowering1 = document.getElementById("flowering1");
    var flowering2 = document.getElementById("flowering2");
    var mother1 = document.getElementById("mother1");
    var mother2 = document.getElementById("mother2");
    var variegate1 = document.getElementById("variegate1");
    var variegate2 = document.getElementById("variegate2");
    var cristate1 = document.getElementById("cristate1");
    var cristate2 = document.getElementById("cristate2");
    //se o 1 está checkado, mostrar,. se não estiver checkado, ocultar
    if (wild1.checked == true) {wild2.style = "display: inherit;";} else {wild2.style = "display: none;";}
    if (cultivated1.checked == true) {cultivated2.style = "display: inherit;";} else {cultivated2.style = "display: none;";}
    if (outdoor1.checked == true) {outdoor2.style = "display: inherit;";} else {outdoor2.style = "display: none;";}
    if (indoor1.checked == true) {indoor2.style = "display: inherit;";} else {indoor2.style = "display: none;";}
    if (flowering1.checked == true) {flowering2.style = "display: inherit;";} else {flowering2.style = "display: none;";}
    if (mother1.checked == true) {mother2.style = "display: inherit;";} else {mother2.style = "display: none;";}
    if (variegate1.checked == true) {variegate2.style = "display: inherit;";} else {variegate2.style = "display: none;";}
    if (cristate1.checked == true) {cristate2.style = "display: inherit;";} else {cristate2.style = "display: none;";}





    //  3) A carta fica à mostra, para toda a gente ver!!!!!!
        //TENHO DE ACRESCENTAR ANTES: se tudo estiver preenchido, então mostrar a carta
  //      if (userName == ""||
  //          userText == ""||
  //          genus == ""
  //          ){
  //        alert("Falta preencher algo")
  //      }else{
              card.style = "display: inherit";
  //      }




}













console.log("JS ended, just feel the dopamine!");
