function rando(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const content = document.getElementById("content");

function createItem() {
    const item = document.createElement("div");
    item.className = "item";

    const image = document.createElement("div");
    image.className = "image";
    image.style.backgroundImage = `url(${imagens[rando(0, imagens.length - 1)]})`;
    image.addEventListener("click", () => {
        heart.classList.toggle("liked");
    });

    const icons = document.createElement("div");
    icons.className = "icons";

    const heart = document.createElement("div");
    heart.className = "icon heart";
    heart.innerHTML = "♥";
    heart.addEventListener("click", () => {
        heart.classList.toggle("liked");
    });

    const commentIcon = document.createElement("div");
    commentIcon.className = "icon";
    commentIcon.innerHTML = "&#9998;";

    const shareIcon = document.createElement("div");
    shareIcon.className = "icon share";
    shareIcon.innerHTML = "&#9993;";

    const description = document.createElement("div");
    description.className = "description";
    description.textContent = descricoes[rando(0, descricoes.length - 1)];

    const commentSection = document.createElement("div");
    commentSection.className = "comment-section";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escrever comentário";

    const deactivateButton = document.createElement("button");
    deactivateButton.className = "deactivate-button";
    deactivateButton.textContent = "✔";

    function deactivateInput() {
        input.disabled = true;
        input.style.background = "transparent";
        deactivateButton.disabled = true;
        deactivateButton.style.opacity = "0";
    }

    deactivateButton.addEventListener("click", (e) => {
        e.stopPropagation();
        deactivateInput();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            deactivateInput();
        }
    });

    commentSection.appendChild(input);
    commentSection.appendChild(deactivateButton);
    commentIcon.addEventListener("click", () => {
        commentSection.classList.toggle("active");
    });

    icons.appendChild(heart);
    icons.appendChild(commentIcon);
    icons.appendChild(shareIcon);

    item.appendChild(image);
    item.appendChild(icons);
    item.appendChild(description);
    item.appendChild(commentSection);

    return item;
}

function loadMore() {
    for (let i = 0; i < 5; i++) {
        content.appendChild(createItem());
    }
}

function handleScroll() {
    const items = document.querySelectorAll(".item");
    let closestItem = items[0];
    let minDistance = Math.abs(items[0].getBoundingClientRect().top);

    items.forEach(item => {
        let distance = Math.abs(item.getBoundingClientRect().top);
        if (distance < minDistance) {
            minDistance = distance;
            closestItem = item;
        }
    });

    window.scrollTo({
        top: closestItem.offsetTop,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", () => {
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(handleScroll, 100);
});

window.addEventListener("load", loadMore);




//HORAS DO SITE

// Função para formatar o tempo em HH:MM:SS
function formatarTempo(segundos) {
    let h = Math.floor(segundos / 3600);
    let m = Math.floor((segundos % 3600) / 60);
    let s = segundos % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Recuperar tempo total do localStorage
let tempo = parseInt(localStorage.getItem("tempo_total")) || 0;
document.querySelectorAll(".total").forEach(el => el.textContent = formatarTempo(tempo));

setInterval(() => {
    tempo++;
    localStorage.setItem("tempo_total", tempo);
    document.querySelectorAll(".total").forEach(el => el.textContent = formatarTempo(tempo));
}, 1000);

// Função para mostrar as horas atuais
function mostrarHoras() {
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');

    document.querySelectorAll(".horas").forEach(el => el.textContent = `${horas}:${minutos}`);
}

// Função para calcular o tempo de sessão
let tempoInicio = Date.now();
function mostrarTempoNoSite() {
    let tempoPassado = Date.now() - tempoInicio;
    let segundos = Math.floor(tempoPassado / 1000);
    let minutos = Math.floor(segundos / 60);

    segundos = segundos % 60;
    minutos = minutos % 60;

    document.querySelectorAll(".tempo-no-site").forEach(el => el.textContent = `${minutos}m ${segundos}s`);
}

// Atualizar horas e tempo de sessão a cada segundo
setInterval(() => {
    mostrarHoras();
    mostrarTempoNoSite();
}, 1000);

// Inicializar
mostrarHoras();
mostrarTempoNoSite();








//BOTÃO PARA SUBIR SCROLL
// Obter o botão
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar o botão quando o utilizador descer a página
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
// Função para fazer o scroll até o topo
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});







//POPUP Premium
setTimeout(() => {
    document.getElementById("premiumPopup").style.display = "block";
    document.getElementById("overlayBlock").style.display = "block";
}, 100000);

function closePremiumPopup() {
    document.getElementById("premiumPopup").style.display = "none";
    document.getElementById("overlayBlock").style.display = "none";
}

function subscribePremium() {
    alert("Lamentamos, mas este serviço não está disponível no seu país.");
    document.getElementById("premiumPopup").style.display = "none";
    document.getElementById("overlayBlock").style.display = "none";
}



//MOSTRA CIENCIA
function mostrarCiencia() {
  var cienciaDiv = document.getElementById("ciencia");
  if (cienciaDiv.style.display === "none") {
    cienciaDiv.style.display = "block";
  } else {
    cienciaDiv.style.display = "none";
  }
}
document.getElementById("ciencia").addEventListener("click", function() {

if (this.style.display === "none") {}
else {this.style.display = "none";}





});



function mostrarAlertaScrollPremium() {
    alert("Infelizmente tem de subscrever o ScrollPremium para usar esta opção.");
}



//MAIS INFO MOSTRAR OCULTAR SHOW INFO
document.getElementById('mostrar-info').addEventListener('click', function() {
  var infoDiv = document.getElementById('Info');
  var pathElement = document.getElementById('SVGRepo_iconCarrier')?.querySelector('path');
  var mostrarInfo = document.getElementById('mostrar-info');
  var logo1 = document.getElementById('logo1');

  if (infoDiv.style.display === 'none') {
    infoDiv.style.cssText = 'display:block; opacity:0;';
    mostrarInfo.style.fill = 'white';
    mostrarInfo.style.animation = 'none'; // Parar a animação
    if (pathElement) pathElement.style.fill = 'white';
    setTimeout(() => infoDiv.style.opacity = 1, 10);

    if (logo1) logo1.style.display = 'none';
  } else {
    infoDiv.style.opacity = 0;
    setTimeout(() => infoDiv.style.display = 'none', 1);
    if (pathElement) pathElement.style.fill = '#bebebe';

    if (logo1) logo1.style.display = 'flex';
  }
});















const timings = document.getElementById("hoverButton");
const timeShow = document.getElementById("time");

timings.addEventListener("mouseenter", () => {
  timeShow.style.display = "block";
});

timings.addEventListener("mouseleave", () => {
  timeShow.style.display = "none";
});

timeShow.addEventListener("mouseenter", () => {
  timeShow.style.display = "block"; // Mantém visível se o rato entrar nele
});

timeShow.addEventListener("mouseleave", () => {
  timeShow.style.display = "none"; // Esconde quando o rato sair
});






const notifications = document.getElementById("notificationButton");
const notificationDiv = document.getElementById("notificationDiv");

notifications.addEventListener("mouseenter", () => {
  notificationDiv.style.display = "block";
});

notifications.addEventListener("mouseleave", () => {
  notificationDiv.style.display = "none";
});

timeShow.addEventListener("mouseenter", () => {
  notificationDiv.style.display = "block"; // Mantém visível se o rato entrar nele
});

timeShow.addEventListener("mouseleave", () => {
  notificationDiv.style.display = "none"; // Esconde quando o rato sair
});









const scrollDiv = document.getElementById("ciencia");

function autoScroll() {
  scrollDiv.scrollBy(0, 1); // Rola 1px para baixo
}

setInterval(autoScroll, 200); // Ajusta a velocidade do scroll (maior valor = mais lento)








/*
window.addEventListener('scroll', function() {
    if (document.body.scrollHeight > 20000) {
        document.body.style.filter = 'grayscale(100%)';
    } else {
        document.body.style.filter = 'none';
    }
});*/
