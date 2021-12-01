console.log('JS started');


//CÓDIGO DO TILT DA CARTA, TIRADO E EEDITADO DE CSS-TRICKS.COM
/*
var containerTilt = document.getElementById('containerTilt');
var card = document.getElementById('card');

var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  card.style = "display: inline";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};
containerTilt.onmouseenter = onMouseEnterHandler;
containerTilt.onmouseleave = onMouseLeaveHandler;
containerTilt.onmousemove = onMouseMoveHandler;

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

// Init
var containerTilt = document.getElementById('containerTilt');
var card = document.getElementById('card');
// Mouse
var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}
// Track the mouse position relative to the center of the container.
mouse.setOrigin(containerTilt);

var update = function(event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / card.offsetHeight/2).toFixed(2),
    (mouse.x / card.offsetWidth/2).toFixed(2)
  );
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  card.style.transform = style;
  card.style.webkitTransform = style;
  card.style.mozTransform = style;
  card.style.msTransform = style;
  card.style.oTransform = style;
};
*/












//A DATA DE HOJE, TIRADO DE https://css-tricks.com/prefilling-date-input/
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date1").value = today;



//ELEMENTOS
var card = document.getElementById('card');

//ELEMENTOS DA CARTA
var title2 = document.getElementById('title2');
//var photo2 = document.getElementById('photo2');
var country2 = document.getElementById('country2');
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




//IMAGEM NA CVARTA, CÓDIGO DO STACK OVERFLOW, THANKS :D
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






//CÓDIGO DO W3 SCHOOLS, DO DROPDOWN
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all espécies - Está no LISTAS.JS*/

/*initiate the autocomplete function on the "genus1" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("genus1"), genusList2);























//ESTILOS DAS CARTAS. O CÓDIGO É CURTO MAS tem o problem a de mudar de um estilo para o outro...
/*
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
*/













//CARREGAR NO BOTAO CRIAR CARTA__________________________________________
botaoCriar.onclick = gerarCarta;
function gerarCarta() {
    //  1) valores têm de ficar guardados em variáveis.
      var userName = document.getElementById("userName1").value;
      var userText = document.getElementById("userText1").value;
      var date = document.getElementById("date1").value;
      var local = document.getElementById("local1").value;
      var country = document.getElementById("country1").value;

      var genus = document.getElementById("genus1").value;
      var species = document.getElementById("species1").value;
      var commonName = document.getElementById("commonName1").value;

    //  2) os elementos da carta têm que copiar os valores das variáveis.
    userName2.innerHTML = userName;
    userText2.innerHTML = userText;
    date2.innerHTML = date;
    country2.innerHTML = country;
    local2.innerHTML = local;

    genus2.innerHTML = genus;
                    //é o espaço, entre os nomes
    species2.innerHTML = "&nbsp" + species;
    commonName2.innerHTML = commonName;

    //  3) MOSTRAR E OCULTAR ÍCONES
    //guardar os valores 1 e 2
    var owned1 = document.getElementById("owned1");
    var owned21 = document.getElementById("owned2");
    var fullSun2 = document.getElementById("fullSun2");
    var fullSun1 = document.getElementById("fullSun1");
    var partialShade1 = document.getElementById("partialShade1");
    var partialShade2 = document.getElementById("partialShade2");
    var shade1 = document.getElementById("shade1");
    var shade2 = document.getElementById("shade2");
    var artificial1 = document.getElementById("artificial1");
    var artificial2 = document.getElementById("artificial2");
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
    var variegate1 = document.getElementById("variegate1");
    var variegate2 = document.getElementById("variegate2");
    //se o 1 está checkado, mostrar,. se não estiver checkado, ocultar
    if (cultivated1.checked == true) {cultivated2.style = "display: inherit;";} else {cultivated2.style = "display: none;";}
    if (owned1.checked == true) {owned2.style = "display: inherit;";} else {owned2.style = "display: none;";}
    if (partialShade1.checked == true) {partialShade2.style = "display: inherit;";} else {partialShade2.style = "display: none;";}
    if (shade1.checked == true) {shade2.style = "display: inherit;";} else {shade2.style = "display: none;";}
    if (artificial1.checked == true) {artificial2.style = "display: inherit;";} else {artificial2.style = "display: none;";}
    if (fullSun1.checked == true) {fullSun2.style = "display: inherit;";} else {fullSun2.style = "display: none;";}
    if (outdoor1.checked == true) {outdoor2.style = "display: inherit;";} else {outdoor2.style = "display: none;";}
    if (indoor1.checked == true) {indoor2.style = "display: inherit;";} else {indoor2.style = "display: none;";}
    if (flowering1.checked == true) {flowering2.style = "display: inherit;";} else {flowering2.style = "display: none;";}
    if (variegate1.checked == true) {variegate2.style = "display: inherit;";} else {variegate2.style = "display: none;";}
    if (wild1.checked == true) {wild2.style = "display: inherit;"; owned2.style = "display: none;"; } else {wild2.style = "display: none;";}
    //COISAS PARA ESCONDER O FORMULÁRIO E CRIAR BOTÃO DE EDITAR Carta
    var formulario = document.getElementById("formulario");
    var intro = document.getElementById("intro");
    var editButton = document.getElementById("editButton");
    //ESTILOS DAS CARTAS, para já fica com o outro médotod,
    var estilo1 = document.getElementById("estilo1");
    var estilo2 = document.getElementById("estilo2");
    var estilo3 = document.getElementById("estilo3");
    var estilo4 = document.getElementById("estilo4");
    if (estilo1.checked == true)
      { // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0];
        // Create new link Element
        var link = document.createElement('link');
        // set the attributes for link element
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/'+ 1 + '.css';
        // Append link element to HTML head
        head.appendChild(link);
          }
    if (estilo2.checked == true)
      { // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0];
        // Create new link Element
        var link = document.createElement('link');
        // set the attributes for link element
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/'+ 2 + '.css';
        // Append link element to HTML head
        head.appendChild(link);
    }
    if (estilo3.checked == true)
      { // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0];
        // Create new link Element
        var link = document.createElement('link');
        // set the attributes for link element
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/'+ 3 + '.css';
        // Append link element to HTML head
        head.appendChild(link);
    }

    //  3) A carta fica à mostra, para toda a gente ver!!!!!!
        //TENHO DE ACRESCENTAR ANTES: se tudo estiver preenchido, então mostrar a carta
    if (userName == ""||
        userText == ""||
        genus == ""||
        country == ""
          ){
       alert("You have to choose an username and indicate the specimen's genre, country and write a small comment :)");
     }else{

              card.style = "display: inherit";
              botaoCriar.value = "Edit Card";

              //formulario.style = "display: none";
              //editButton.style = "display: inherit";
      }




}


editButton.onclick = editarCarta;
function editarCarta() {
  formulario.style = "display: inherit";
  editButton.style = "display: none";
  var estilosDiv = document.getElementById("estilosDiv");
  estilosDiv.style = "display: none";

}










console.log("JS ended, just feel the dopamine!");
