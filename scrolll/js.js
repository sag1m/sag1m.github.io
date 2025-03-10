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

    // Criar um container para os botões de partilhar
    const shareButtonsContainer = document.createElement("div");
    shareButtonsContainer.className = "share-buttons-container";
    shareButtonsContainer.style.display = "none";  // Inicialmente invisível

    const platforms = [
        { name: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, iconClass: "facebook" },
        { name: "Instagram", url: `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`, iconClass: "instagram" },
        { name: "WhatsApp", url: `https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, iconClass: "whatsapp" }
    ];

    platforms.forEach(platform => {
        const link = document.createElement("a");
        link.href = platform.url;
        link.target = "_blank";
        link.className = platform.iconClass;  // Adiciona a classe correspondente ao ícone
        shareButtonsContainer.appendChild(link);
    });

    // Adicionar o container ao item quando o ícone de partilhar for clicado
    shareIcon.addEventListener("click", (e) => {
        e.stopPropagation();  // Evitar que o clique se propague

        if (shareButtonsContainer.style.display === "none") {
            e.target.parentElement.appendChild(shareButtonsContainer);
            shareButtonsContainer.style.display = "flex";

            // Posicionar o container de botões ao lado do ícone
            const rect = e.target.getBoundingClientRect();
            shareButtonsContainer.style.position = "absolute";
            shareButtonsContainer.style.top = `${rect.top + window.scrollY + 15}px`;
            shareButtonsContainer.style.left = `${rect.left + rect.width - 4}px`;
        } else {
            shareButtonsContainer.style.display = "none";
        }
    });

    // Fechar os botões de partilhar ao clicar fora do ícone
    window.addEventListener("click", (event) => {
        if (!event.target.closest('.icon.share')) {
            shareButtonsContainer.style.display = "none";
        }
    });

    const description = document.createElement("div");
    description.className = "description";
    description.textContent = descricoes[rando(0, descricoes.length - 1)];

    const commentSection = document.createElement("div");
    commentSection.className = "comment-section";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Escrever comentário";

    commentSection.appendChild(input);

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
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMore();
    }
}

window.addEventListener("scroll", handleScroll);
loadMore();







//HORAS DO SITE
// Mostrar as horas atuais
function mostrarHoras() {
    const horasSpan = document.getElementById("horas");
    const data = new Date();
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');
    const segundos = data.getSeconds().toString().padStart(2, '0');

    horasSpan.textContent = `${horas}:${minutos}`;
}
// Mostrar o tempo que o utilizador está no site
let tempoInicio = Date.now();
function mostrarTempoNoSite() {
    const tempoNoSiteSpan = document.getElementById("tempo-no-site");
    let tempoPassado = Date.now() - tempoInicio;
    let segundos = Math.floor(tempoPassado / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);

    segundos = segundos % 60;
    minutos = minutos % 60;

    tempoNoSiteSpan.textContent = `${minutos} minutos e ${segundos} segundos`;
}

// Atualizar as horas e o tempo no site a cada segundo
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
}, 25000);

function closePremiumPopup() {
    document.getElementById("premiumPopup").style.display = "none";
    document.getElementById("overlayBlock").style.display = "none";
}

function subscribePremium() {
    alert("Lamentamos, mas este serviço não está disponível no seu país. Tente mais tarde.");
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
