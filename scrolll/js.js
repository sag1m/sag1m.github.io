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



'https://pixabay.com/get/g832340d089539e412584f5d3cfb39858a1d74993d9c69d3133363547dec81a910da9e336f932b4c43ebab50ac9cd9652e747b0910ce67009b32c98ac6440b704_640.jpg',  'https://pixabay.com/get/g529853eb38d1ce1cbbbec5502772e43176ba35b14d0607f91a254c7578a2e85b64460d0303c5ef15d744770352464aa7_640.jpg', 'https://pixabay.com/get/gd63c53f1d60910a4596bd72ffa80206b15e3348c238fc6010a49671ce1bfbb92889a23934d3364f43702f480f9993769_640.jpg', 'https://pixabay.com/get/gd65fc88e5186f2f2743bfd3d40c904cdadd7011dc07b9febda8a5ee5b59619079ffa064844335eba5a1df8256d5dff57_640.jpg', 'https://pixabay.com/get/gc0dbd476dd1feeb46b0656781aadb7638adec864f31788e57dc69b3171f2565f471fe3dec5c63352d9a41d57ec60506206ea008d1c05d26d6b2edbece851029f_640.jpg', 'https://pixabay.com/get/gf443a3eb15584988fd31e4c0a8e352312e90188b6e09cfc5b050304d91f3876a771fbb2335c68382ecee7834a018d995_640.jpg', 'https://pixabay.com/get/gcdb2e54b3911a93aa051ccc0c92f18c7ddff6ab116ee6d854f5b2fd57dc6d2fbb5d53e4d58969d8a383509ece61da7e416c16dca170860106083ec9e969959bf_640.jpg', 'https://pixabay.com/get/g5131ee3e59f08e00a1ce1feacfa31303efb5ae45e98b2a441e0a33a4ba60fbbfa0285c57a0403f57e7c407f4994d46cffd81642cb4c6d01e65b7355c63e64e56_640.jpg', 'https://pixabay.com/get/gf2853541808e9db426a3723a9765d4c7965e79a1998306e9ee0bf92e28572ea39052f5c60166715c293a5e793d32933ace4bec22bb5c40d889b06a101c0e2477_640.jpg', 'https://pixabay.com/get/g3cae60c5dc51de0be545a67f0c3d0c5cf49ac21d563ca85880e2b8209840b57a712805f8d731dc7a8caf95ca0bba94237a557f0a4b66963e2e48af5214f0da2e_640.jpg', 'https://pixabay.com/get/ga20b0f204364ca509719d17ad48732b367c90732e85e9c2b443e755f503adfe8cd952e7321e0316b1f5834c57a2b16dd_640.jpg', 'https://pixabay.com/get/gdd3b8fd474a82d26fe170b94b1d912363d57e88b3360d307c6e580eaf61b85c3ffe3fd803465bb8d18e209068d39de1c284f6e7f308d7cf9a7f67f12e4c7c777_640.jpg', 'https://pixabay.com/get/g1187ffb84ad619f2da28f99a7373e419eee8d01dcfde845369b1ecfdcbe73c13e8f85ebebab3a39f59af522a2701b26f_640.jpg', 'https://pixabay.com/get/g07422211beb846888303755aa70032d3634a615bcd5531f50247e899d0c1108eed993816f80268a31c31a3cf695259e2e9ce6ab83182353dfef7110932e59f28_640.jpg', 'https://pixabay.com/get/gc5f7d5b9d488527a913f79e15a6038e60faa20c643aaf97695fbc66e6020d0408301901cc62f081dcd5577a17d70487c4e41971c5d25a53f0119d05a9dab5cda_640.jpg', 'https://pixabay.com/get/g8f8fea34c4c0b31a654330808dbdfb1199912898b81784c74d96fbefd9a4810058b5825b78ade69514792e73bf8da11efc7409bcf4c93574f18593a14f1ba774_640.jpg', 'https://pixabay.com/get/gd009bfadbd1d88ff27db9d749ff7823fb853d623eea268a1a3488d995fec0eb87787b30a9dedf7ec54a6e324ddc6f3670e0ba7e1ee762ee6eddeab138270c4e5_640.jpg', 'https://pixabay.com/get/gf0fae427174babf5e4cd1ea1c2899cb8bb9632aade0106e3c7da13b3b56dc7537cec15bd1585e248873fb37d7a021aa62aaf44dd4e3b50f9f8298ddb0d1f26e6_640.jpg', 'https://pixabay.com/get/g8d5767ee82a272467d39537333ba057e06e93b3144aef0b310d88ece59b9ba3baf8f3fb857a1bc54957893c29886645e8f2be8ef398e43b80829d13c66b34cbf_640.jpg',  'https://pixabay.com/get/gf15019b670e7b6d2156195d921608c542178d5b3d6a990944ee9599b7fc0354a99f977ab0401e4ac63a416518788b275_640.jpg', 'https://pixabay.com/get/g9f72c94c3685116e8289a03ea7d245598b4b74c286ee09ac200af89366a231c22cc91e6fe8b6997b3f4e39aaa6a2fb0585c9f9e8abf8d706c2f976e44219108b_640.jpg', 'https://pixabay.com/get/g4b1303e6fcd670eca242833eb816e49ae83d116ea81fe8455d5966bae5d7c1e85cd3e125e260aa1c372ca335d07c13629b0482b7b5baef20322f3667d4834786_640.jpg',
'https://pixabay.com/get/gfe1a383977fd824ab8be73481ef3ea69c894ed03416f4643685d995c2d26658a354bc03d6f19a6430099c93108fe2efd_640.jpg',
'https://pixabay.com/get/g561a7eaa23255d1474150e5845006c4c53b800306ed0d5b5908d501c98254ff1525b61ea71f583120713998d8a513f77_640.jpg',
'https://pixabay.com/get/g4bb8c0fcd7ec9396f534cb3add128e1a906271c4b4995b1c95212b33102b537c0dd3acec9c9e721083e699a7d636660abb28a82d364fd8b4562584e33447aae9_640.jpg',
'https://pixabay.com/get/g539d0a8582579d412f50fdfefa8eb687871c610b0b05a2d5f8049ca9d250299b40fe7bdd686d5abb402a489acb6c43fc97353c7111903920ec18f18135f4749d_640.jpg',
'https://pixabay.com/get/gee6cf9b93dfc54a2053deca5da656ae8207ac607301cfa5d6079ef41fa7876df15200c69eb6d79dba4541e1cf53d860c09be5c54a842867e667929c041db01c8_640.jpg',
'https://pixabay.com/get/g9be339f2639512bc2959c359d345b7887fb6f7610992091071ca95229eb3c7ee38ef6c3ebb625c9c7faa6e0f13e420cd_640.jpg',
'https://pixabay.com/get/g57840975dd94e49104b2fa5ef46b0d6a22c981e6bed5977ad466fdbc991ca49e50dd50f515f261dd769e819b52d8fbec_640.jpg',
'https://pixabay.com/get/gebe953dcec7cb6d11a4b40e4530bf8ac2d7e6ca1eabaf2341d5771a0bb34f4f41d954461cf656f939d1f0b9fff3b12542724191c8fe278a92d691f911df756bf_640.jpg',
'https://pixabay.com/get/g68e6094a1e3f7f5669b25a75840cc2ef77adf9506a749fef8f92dd4e84c00b33b0bbf4cb7baa91ec5d87d8c1c6f7a8cb9726a83d996332080c54877f6f1b05a6_640.jpg',
'https://pixabay.com/get/g9577bfc7182c18fc6f44188e5e0638fad18302c81bef091fabab3e7b24f7da1172c45eeb0b283a590a63bf5e7ca4fa34_640.jpg',
'https://pixabay.com/get/geaea9bad3308c9c02e6e2fcd4130f682a4fd9e8f93db40c1dd8bdbd682797825b09721b54aefdf3b2ec1deaeec8730db844bd074fd75f3739416f378c9daf709_640.jpg',
'https://pixabay.com/get/g7cea0f059f884d28095fa44522709e0974f59284a009f16e733708f30e13ea07ae407c987e32a3dfca783acda5b1f4c0d5474400da5819c770f8a0662e4fb9b1_640.jpg',
'https://pixabay.com/get/g39b7bc77a3cda92ac3d829b3cfb5b5f18346a651466dbe5707986ade7ac4dcada44bad1ee600bdb5d986cb4e2e4da6751a8f0bbf2a0af50e0cb162d7f072cf23_640.jpg',
'https://pixabay.com/get/gb45dab5e6fa0691d673aad47b489bc17cac65ddb87651720420ffe6e6b8aa15a18e555268222eeb37e2c47013b25b04b_640.jpg',
'https://pixabay.com/get/g8707f10a13d072c605b400fdda9edcab2b4e64f5cb048045d1402bc298b41c6a9916430ebfd515f60ebe26408deadd23_640.jpg',
'https://pixabay.com/get/g3c1b78173df6c52775f7b161853e9f39e509a80a66af5d2fb386e20e838603541d9de4ec5d14e7192b376389aa6bb2a0733b1747de6ab0ea4b87a1f14e5262c4_640.jpg',
'https://pixabay.com/get/g85c3b4cfb2aa1ea7b9b6779dbc6ad345af769a9d9a803dfe1c62ecbeb3dd182406af35cf8f66b2bade8aeb85b6fcb21b1a221d252f09b6e61b076820d92fc386_640.jpg',
'https://pixabay.com/get/g29f03b3d855c569d775651ffbe644deb139455d3b37e5f3afc968236d2d0ee3c90127a7c9cbdea503d3f207bd384cc3042ac9dda2377e78032b6ad47fb44452c_640.jpg',
'https://pixabay.com/get/g7d50ffd67d556cac6ae1876f153cbb98438188c8c5fcfcd287220e0e81d315e0b70350f97b6ccebbe75a882025f3e82c_640.jpg',
'https://pixabay.com/get/g055e597696c5de02ca12af358c03eb1d62ef8f14fadf2904f7e8e4689946241cdff3463b1bd7f7a7348845d38af99c01_640.jpg',
'https://pixabay.com/get/ge46409c7766e810ab98cefa107c50aafe134924098018cc6d221d70d2311f9baf435d64651b69823b3e127a6a15e635d6e53be68c8f087ccdd774dcc893d0f9b_640.jpg',
'https://pixabay.com/get/g2bf385bfe0993a78f211aa61ed412dd5f7b4b001560415fb75331ed185e9f349d5b28163aa0d50d48c0a25dcce591725f6f18a77a07f75657281c6db8d477d97_640.jpg',
'https://pixabay.com/get/g10bb17c68d8f30ae283dd3a31d6cea019415ed92e47cd613b2a517420f394ba6938cf8ecfc692d5cd60fca582b83f7cd_640.jpg',
'https://pixabay.com/get/g84a8a72ca95011747cee5573e2beda77b4ad2f3e6758702887134c33096ada9e49c3c2020fec0a4458e9ce86ec8a108722a8f7126a786d87ca2ec4a71f8e7e8d_640.jpg',
'https://pixabay.com/get/ge60517295dfde20d3f0021bbabbafbd3b476807804c275fd6e2ceb796da1fd634ed485e9d6e8b709fb7decfe328b26bf058c1d5229ea4fc57aef62af5c1c9d3a_640.jpg',
'https://pixabay.com/get/g1405958e6a133d64850072b547606e6e817512cfcfb56055723052375a74da3740a1f280b532884e0d88d0674410bf133e30512c7a6e34cd5016d48fe52af774_640.jpg',
'https://pixabay.com/get/gb49a11ef5fde5426625a8270ba7d700fc8b828a852f192555ef89689a7845c62a22dc065f6adf6a1129e6125c309dc941badbf63e56e2405e13338af56ee884b_640.jpg',
'https://pixabay.com/get/g344b9e32b6897f267e9365ed6b1589e8a71723e82796f694f8d7780adc792a3b0940014aaa798deb327dde7b96b657199ecbe077184dde2163ae056a15bb84fd_640.jpg',
'https://pixabay.com/get/gae50916861375277d62efee923523ab9be938e5d77346f9915452dbe3e81d58fb82ba3f03973a248267a6195ac2bd210669f655a11be5c916ef62ef640a4dbcb_640.jpg',
'https://pixabay.com/get/g01381439851f82ee6ec2ce944de2ac9271c63ba58794678039bd56a5a6c00ccc6e107384adb8d4bfb720f0b969a96224dca4345110a6ac45334b942e372acb2c_640.jpg',
'https://pixabay.com/get/g8237065ec6df78eaab350a132f0fb0ed08b08041d1b25bfe58904ff08f95cef69cd52ae354bc06d757d6ceeb6897923b2053c182c6cfd3245688949467407319_640.jpg',
'https://pixabay.com/get/ge8e2c3d1f4fade9f5e42b3b242574d490f479cc707a0167c16fff0dd38ad90e20bc612c3ad9ef876e9e79f2a4e110c1a3ce1e1a89b3705ae9bbf0e985e44bae8_640.jpg',
'https://pixabay.com/get/g543ef862d14ba0f8e1e8a420457c0c7dfc008506fb68ac34dfb0d138b797bcdfcece3e3d330307fa0317120e311032a34f4f6413631f9bb5d36b75890c7aa290_640.jpg',
'https://pixabay.com/get/g753a981204bb5965a6a0506823e969c289d9c54171541f6665b83602e6a22b4ea3b756cae8e283655be7d15e77f9fd81b1c895cdc3d5231872438c2497fa4351_640.jpg',
'https://pixabay.com/get/g7b0d1e6812a12071546a9936f7a20c067e624fc0a1c84a6eb293967e22a47db3d5305a3ef6e1fc0fba717725145dd19263dda36f0082eb64893c3bfbf35d5578_640.jpg'  ,





];

const descricoes = [
    "Fluir.", "O que vem, vem.", "Nem tudo precisa de explicação.", "A calma é um reflexo.", "O agora é o único tempo.", "Nada é permanente.", "O silêncio tem algo a dizer.", "O que é simples, às vezes é tudo.", "Diz pouco, faz muito.", "Algumas respostas não precisam de palavras.", "O que acontece, acontece.", "Nada é perdido, só transformado.", "Às vezes, só avançar é o suficiente.", "O vazio pode preencher.", "A desconexão também é um caminho.",
    "O Sol ilumina por fora e por dentro.",
    "O vento pode afetar muitos sentidos ao mesmo tempo.",
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
