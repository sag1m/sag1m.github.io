function rando(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}
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





//__________________________________________________________________________________







const content2 = document.getElementById("content2");

function createItem() {
    const item = document.createElement("div");
    item.className = "item";

    const image = document.createElement("div");
    image.className = "image";
    image.style.backgroundImage = `url(${imagens[rando(0, imagens.length - 1)]})`;

    // Criar o vídeo
    const video = document.createElement("video");
    video.className = "video";
    video.src = `${videos[rando(0, videos.length - 1)]}`; // Agora 'videos' está definido
    video.loop = true;
    video.muted = true;

    // Adicionar o evento de mouseenter para iniciar a reprodução do vídeo
    image.addEventListener("mouseenter", () => {
        video.play();  // Reproduz o vídeo quando o mouse entra
    });

    // Adicionar o evento de mouseleave para pausar o vídeo
    image.addEventListener("mouseleave", () => {
        video.pause();  // Pausa o vídeo quando o mouse sai
        video.currentTime = 0;  // Reseta o vídeo para o início
    });

    // Adicionar o vídeo e a imagem
    image.appendChild(video);

    const description = document.createElement("div");
    description.className = "description";
    description.textContent = megadescricoes[rando(0, megadescricoes.length - 1)];

    item.appendChild(image);
    item.appendChild(description);

    return item;
}










function loadMore() {
    for (let i = 0; i < 20; i++) {
        content2.appendChild(createItem());
    }
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMore();
    }
}

window.addEventListener("scroll", handleScroll);
loadMore();
