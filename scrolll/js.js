function rando(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const imagens = [
  'https://pixabay.com/get/g392279f9b645e1b4203d2f432b276af46ee11e8cda0ba7df7e1adebdc0d1e39ccd84bf6b5a5c794c7c01396e4702a3b87fb7cc44d9995aff412705d6fb35e049_640.jpg',
'https://pixabay.com/get/g76d3341c1574efc450b303cac6d8e3516121042f242af778dcd6c1ce5da70d48bc58a559621a3aa1137622f1bfa0e1560e3b2788aa2db3a364c973c7920661d7_640.jpg',
'https://pixabay.com/get/g00020926cc691468cc645ab344d680b387bd493b0824dfd0962c4ddc0bb03546177f7b6843818fd7ee194f6ce339088c59907956a2c3eb43ae543e39375a253d_640.jpg',
'https://pixabay.com/get/gaaa5c9fbfaa1d573549fdccb8d92b74effdc252adf0305dbbe14c51d67882884ab954a75831b81191f644ca483e013b52fb5a1fda707af64ff84ca9961e125f8_640.jpg',
'https://pixabay.com/get/g00069e8e43c9b83e39379a60351980809e27663e7fb25d4146a8a9225fd3ee761feecf9c657580e0c40294f2e992914de3c12f1b9624c93be10c3d890a6a1ea1_640.jpg',
'https://pixabay.com/get/ge6b5ff0de129ecccbb6eac55e7b4877f2e01dcbdf828e2daa9ea6ab857a59fc9a3f60b74764850bba92544b74ac465cb_640.jpg',
'https://pixabay.com/get/g88a907606d1b97d542285cda5ccec69450ea3d45b60a670fc62aac3795b77a93e97e3024423956de92d504c92cdc198f3d2100d9a857fbd3eff3d023849a1a32_640.jpg',
'https://pixabay.com/get/gfe3ab5f131ff82284dca9044dd792148dd5a375b13076d986c3e8d518e1178dcfaaacaa0c798060cf04b19cc21d2be90007496e7a769c5d9cba987d45fbd831c_640.jpg',
'https://pixabay.com/get/gefe273ddc1f1b21227405e4bae630c5cfda814755da9b99b6a8d74441e99570ec3de7827f8ccc5a5162dd908c20baaa34dbfd0c2d2be3e40ed94b84f2a616625_640.jpg',
'https://pixabay.com/get/g3fbaaceaacfcd303b78aac9ba5914bfd81ebf5fe5a397ec4f96c410a9ed1fb1a9e8ae659c3a3639b7d64ab1341b30dd6b964c1d0d4faaa470a630ac9328ee4c1_640.jpg',
'https://pixabay.com/get/gc21d548acec29a6358f433a61650f240e3e5d91c88a2f7027853a76dc5e85371655f3dd5c3e3cda71926dddf0e92f8f3_640.jpg',
'https://pixabay.com/get/g7acd96f9b4920b47c599cff8f6e9b17a98dfbaa6efee543fc25141928e59e4d72f02e53b8252f6c3170322d45aef35049af6f2473ef75a838116eda245f15e8f_640.jpg',
'https://pixabay.com/get/g5288f60718e3fbb55becabdb3e19f97240d48bbc51629d0d3c142cfef0810dfa54cff76c1a44e5c47f5581cd81665948886eec87cc52f2268a52b1be908aef39_640.jpg',
'https://pixabay.com/get/gf5a8ff512a0cc9034835b484094d3bd1cac903e063bd8ca2cecdb2929fd8f10e038f74e3ab29b857994b32edd9f43d7c78bcdd90a2e3a61592e196db305a4b99_640.jpg',
'https://pixabay.com/get/gb1d814d59c144385c5908e121b5cc2bc4096e07f3e59279fe2f3512ea28d85d439f1891a932aaa7d09db56c7620de3e3c36d16189e6ca9a18710508d9cb5dfe2_640.jpg',
'https://pixabay.com/get/g058ef7eac4d16c4331c94349695dc356b87d78421da996e50383699e33fa2c28ad95323e82faad87409c1677fcd2d5f0521d309a4fbd0fa5f4e0a7912c4b6d06_640.jpg',
'https://pixabay.com/get/g0d5eff989a783022d56ffa2b0d631fa32a5cbdc28a84f13319969c5777f0a7ed527a0d2aa92ff7a6c794f339255868eb051f95304d0c9e621d04a4c6e2ac9faa_640.jpg',
'https://pixabay.com/get/g3115302b49ce79fc2398247b854be22796dc586ff1bd670ca940146d26eff9c935289f074bd1cd33ec28eecd857d80a27984dbaee5b18edae10680f5b081e170_640.jpg',
'https://pixabay.com/get/g35c3ed5c0710c9648becb42c8f2315a0196c4875d163dd374223fe6290be8a8795caed58acddf6f9c4b3e3fa01cbb180ea6c4bef238ef3e3669d084e7b4d5547_640.jpg',
'https://pixabay.com/get/gd5deeb07fa2a2d7df1ac9536b9e3f69a04faccab5521f7876158e29e4dbb67ee445ec581d4b70fbd0b6476e2d788385d7fcb5461456fc35c929aea555e6fba10_640.jpg',
'https://pixabay.com/get/gc0898f3dbee5a808f874dfc0a8e604550b323ff7e85b75c579b5a2de98f9117689f1be7fc8053eff9762c6a91895c4c190cb7bfb8bcb8977f0a72e257dfe622e_640.jpg',
'https://pixabay.com/get/g4df8ec0872d9529cef935cc5252bba9e93afc8d1e2d07b6e51f6cf6e06fcfdf7c037271c014c9d17d53106f4d77727ef511d7779fdee20afc9114031f23661e4_640.jpg',
'https://pixabay.com/get/ga9c0683b7cbd1e188209d4f6ed8256079d8c9888832451a9c56e6144f0a978427e15cdeda4cf316ba63337a30d7dcbfc96be3e034f66614609c8cb8e11f2289a_640.jpg',
'https://pixabay.com/get/ga0f4efeb654a0e602702f4d403f7ae190157370e871b18fbb2d2ce1d705e04be9a257706e1d690ad4ae4aa06fbf3f50b2dddb5ff8f79f8c7f64d6a6496295882_640.jpg',
'https://pixabay.com/get/gfb8dfea8e8e95b0fa94dce40dd3608ac358539fb9fd757379c893da9d5c352f75b8ee1ebf58b643c4fee5ad05370a2883df37c1a54791914a7f1e392bedd4d52_640.jpg',
'https://pixabay.com/get/gb490a69e3196d450c4f585903a3d0b4e49b22c5f46d9678f16d3f7a52f007c9cce09ab810d8a6bdf3240f61b5dfe3025d993c0b22b0090f209c7c986efc39e0_640.jpg'
];

const descricoes = [
    "Deixa fluir.", "O que vem, vem.", "Nem tudo precisa de explicação.", "A calma é um reflexo.", "O agora é o único tempo.", "Nada é permanente.", "O silêncio tem algo a dizer.", "O que é simples, às vezes é tudo.", "Diz pouco, faz muito.", "Algumas respostas não precisam de palavras.", "O que acontece, acontece.", "Nada é perdido, só transformado.", "Às vezes, só avançar é o suficiente.", "O vazio também preenche.", "A desconexão também é um caminho.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",

];

const content = document.getElementById("content");

function createItem() {
    const item = document.createElement("div");
    item.className = "item";

    const image = document.createElement("div");
    image.className = "image";
    image.style.backgroundImage = `url(${imagens[rando(0, imagens.length - 1)]})`;

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
