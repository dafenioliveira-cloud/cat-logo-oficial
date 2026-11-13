// =========================================================================
// 1. CONFIGURAÇÕES DA THE 10 CLUB
// =========================================================================
const seuInstagram = "_the10club";
const valorPersonalizacao = 30.00; // Valor adicional para nome/número


// =========================================================================
// 2. CAMISETAS CADASTRADAS (TAMANHOS P, M, G, GG E 3XG)
// =========================================================================
const camisetas = [
    // --- COLEÇÃO 2026/27 ---
    {
        nome: "Camisa Celtic 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.30.jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Internacional I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.32.jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Grêmio I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.31 (3).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Corinthians 2026/27 - Modelo Jogador",
        preco: 200.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.29 (1).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa França I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.32 (1).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Argentina I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.31 (1).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Portugal I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.29.jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Manchester United I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.32 (2).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Barcelona I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.30 (3).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Real Madrid I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.30 (2).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Grêmio I 2026/27 - Modelo Feminino",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.32 (3).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Internacional II 2026/27 - Modelo Feminino",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.32 (4).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Grêmio II 2026/27 - Modelo Feminino",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.30 (1).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Manchester United III 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.31 (2).jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Santos I 2026/27 - Modelo Jogador",
        preco: 200.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 13.55.31.jpeg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },

    // --- MODELOS COM FOTOS ATUALIZADAS ---
    {
        nome: "Camisa Internacional II Manga Longa",
        preco: 200.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 08.29.47.jpeg",
            "inter.jpeg",
            "inter.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Espanha I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 08.02.58.jpeg",
            "espanha.jpeg",
            "espanha.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa França II 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-13 at 08.02.57 (2).jpeg",
            "franca.jpeg",
            "franca.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Arsenal I 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.39 (2).jpeg",
            "WhatsApp Image 2026-11-12 at 15.10.39.jpeg",
            "arsenal.jpeg",
            "arsenal.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Palmeiras I 2026/27 - Modelo Jogador",
        preco: 200.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.39 (3).jpeg",
            "palmeiras.jpeg",
            "palmeiras.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    },
    {
        nome: "Camisa Grêmio III 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.38 (1).jpeg",
            "gremio.jpeg",
            "gremio.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG", "3XG"]
    }
];


// =========================================================================
// 3. LÓGICA DA VITRINE, ZOOM, PERSONALIZAÇÃO, FILTROS E INSTAGRAM
// =========================================================================
const vitrine = document.getElementById("vitrine");
const botoesFiltro = document.querySelectorAll(".btn-filtro");
const avisoCopiado = document.getElementById("aviso-copiado");
let temporizadorAviso;

const imagemAviso = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <rect width="100%" height="100%" fill="#202321"/>
        <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="#B7D83D">THE 10 CLUB</text>
        <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="#F1F0E9">Foto nao encontrada</text>
    </svg>`
);

// Criação automática do modal de Zoom
const modalZoom = document.createElement("div");
modalZoom.className = "modal-zoom";
modalZoom.innerHTML = `
    <button class="btn-fechar-zoom" aria-label="Fechar zoom">&times;</button>
    <img src="" alt="">
    <p class="modal-zoom-legenda"></p>
`;
document.body.appendChild(modalZoom);

const modalImg = modalZoom.querySelector("img");
const modalLegenda = modalZoom.querySelector(".modal-zoom-legenda");
const btnFecharZoom = modalZoom.querySelector(".btn-fechar-zoom");

function abrirZoom(src, titulo) {
    modalImg.src = src;
    modalImg.alt = titulo;
    modalLegenda.textContent = titulo;
    modalZoom.classList.add("aberto");
    document.body.style.overflow = "hidden";
}

function fecharZoom() {
    modalZoom.classList.remove("aberto");
    document.body.style.overflow = "";
}

btnFecharZoom.addEventListener("click", fecharZoom);
modalZoom.addEventListener("click", (e) => {
    if (e.target === modalZoom) {
        fecharZoom();
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalZoom.classList.contains("aberto")) {
        fecharZoom();
    }
});

function formatarMoeda(valor) {
    return valor.toFixed(2).replace(".", ",");
}

function mostrarAviso() {
    clearTimeout(temporizadorAviso);
    avisoCopiado.innerHTML = `
        <strong>✓ PEDIDO COPIADO!</strong><br>
        Agora aperte <strong>COLAR</strong> no Direct.
    `;
    avisoCopiado.classList.add("mostrar");

    temporizadorAviso = setTimeout(() => {
        avisoCopiado.classList.remove("mostrar");
    }, 9000);
}

function renderizarVitrine(filtroTamanho = "TODOS") {
    vitrine.innerHTML = "";

    const listaFiltrada = filtroTamanho === "TODOS"
        ? camisetas
        : camisetas.filter((camisa) => camisa.tamanhos.includes(filtroTamanho));

    listaFiltrada.forEach((camisa) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const textoAdicional = valorPersonalizacao > 0
            ? `(+ R$ ${formatarMoeda(valorPersonalizacao)})`
            : "(Grátis)";

        const botoesTamanho = camisa.tamanhos
            .map((tam) => {
                const selecionar = (filtroTamanho !== "TODOS" && tam === filtroTamanho) ||
                                   (filtroTamanho === "TODOS" && tam === camisa.tamanhos[0]);
                return `<button class="btn-tamanho ${selecionar ? "ativo" : ""}">${tam}</button>`;
            })
            .join("");

        card.innerHTML = `
            <div class="card-img-box">
                <img src="${camisa.tentativasFoto[0]}" alt="${camisa.nome}">
            </div>
            <div class="card-info">
                <h2>${camisa.nome}</h2>
                <p class="preco">R$ ${formatarMoeda(camisa.preco)}</p>
                <span class="label-tamanho">Selecione o tamanho:</span>
                <div class="tamanhos">${botoesTamanho}</div>

                <div class="personalizacao-box">
                    <label class="check-personalizar">
                        <input type="checkbox" class="input-check-pers">
                        <span>Personalizar nome/nº ${textoAdicional}</span>
                    </label>
                    <div class="campos-personalizacao">
                        <input type="text" class="input-nome-camisa" placeholder="Nome (ex: NEYMAR JR)" maxlength="18">
                        <input type="text" class="input-numero-camisa" placeholder="Nº" maxlength="3" inputmode="numeric">
                    </div>
                </div>

                <button class="btn-comprar">Pedir no Instagram</button>
            </div>
        `;

        const imgBox = card.querySelector(".card-img-box");
        const img = card.querySelector("img");
        let indiceTentativa = 0;

        img.addEventListener("error", function () {
            indiceTentativa++;
            if (indiceTentativa < camisa.tentativasFoto.length) {
                this.src = camisa.tentativasFoto[indiceTentativa];
            } else {
                this.src = imagemAviso;
            }
        });

        // Abre a foto ampliada ao clicar
        imgBox.addEventListener("click", () => {
            abrirZoom(img.src, camisa.nome);
        });

        const botoes = card.querySelectorAll(".btn-tamanho");
        botoes.forEach((botao) => {
            botao.addEventListener("click", () => {
                botoes.forEach((b) => b.classList.remove("ativo"));
                botao.classList.add("ativo");
            });
        });

        // Lógica de Personalização (Nome e Número)
        const textoPreco = card.querySelector(".preco");
        const checkPers = card.querySelector(".input-check-pers");
        const boxCampos = card.querySelector(".campos-personalizacao");
        const inputNome = card.querySelector(".input-nome-camisa");
        const inputNumero = card.querySelector(".input-numero-camisa");

        checkPers.addEventListener("change", () => {
            if (checkPers.checked) {
                boxCampos.classList.add("aberto");
                textoPreco.textContent = `R$ ${formatarMoeda(camisa.preco + valorPersonalizacao)}`;
                inputNome.focus();
            } else {
                boxCampos.classList.remove("aberto");
                textoPreco.textContent = `R$ ${formatarMoeda(camisa.preco)}`;
                inputNome.classList.remove("campo-erro");
                inputNumero.classList.remove("campo-erro");
            }
        });

        inputNome.addEventListener("input", () => {
            inputNome.value = inputNome.value.toUpperCase();
            inputNome.classList.remove("campo-erro");
            inputNumero.classList.remove("campo-erro");
        });

        inputNumero.addEventListener("input", () => {
            inputNumero.value = inputNumero.value.replace(/\D/g, "");
            inputNome.classList.remove("campo-erro");
            inputNumero.classList.remove("campo-erro");
        });

        // Botão Pedir no Instagram
        const btnComprar = card.querySelector(".btn-comprar");
        btnComprar.addEventListener("click", async () => {
            const tamanhoEscolhido = card.querySelector(".btn-tamanho.ativo").textContent;
            let precoFinal = camisa.preco;
            let detalhePersonalizacao = "";

            if (checkPers.checked) {
                const nomeDigitado = inputNome.value.trim();
                const numeroDigitado = inputNumero.value.trim();

                if (!nomeDigitado && !numeroDigitado) {
                    inputNome.classList.add("campo-erro");
                    inputNumero.classList.add("campo-erro");
                    inputNome.focus();
                    return;
                }

                precoFinal += valorPersonalizacao;

                const partes = [];
                if (nomeDigitado) partes.push(`Nome: ${nomeDigitado}`);
                if (numeroDigitado) partes.push(`Nº: ${numeroDigitado}`);
                detalhePersonalizacao = ` | Personalização -> ${partes.join(" / ")}`;
            }

            const precoFinalFormatado = formatarMoeda(precoFinal);
            const mensagem = `Salve, THE 10 CLUB! Quero encomendar a ${camisa.nome} (Tamanho: ${tamanhoEscolhido}${detalhePersonalizacao}) - R$ ${precoFinalFormatado}.`;

            try {
                await navigator.clipboard.writeText(mensagem);
            } catch (erro) {
                const campoTemp = document.createElement("textarea");
                campoTemp.value = mensagem;
                document.body.appendChild(campoTemp);
                campoTemp.select();
                document.execCommand("copy");
                document.body.removeChild(campoTemp);
            }

            mostrarAviso();
            btnComprar.textContent = "✓ Copiado! Cole no Direct...";

            setTimeout(() => {
                window.open(`https://ig.me/m/${seuInstagram}`, "_blank");
            }, 2500);

            setTimeout(() => {
                btnComprar.textContent = "Pedir no Instagram";
            }, 5000);
        });

        vitrine.appendChild(card);
    });
}

botoesFiltro.forEach((btn) => {
    btn.addEventListener("click", () => {
        botoesFiltro.forEach((b) => b.classList.remove("ativo"));
        btn.classList.add("ativo");
        renderizarVitrine(btn.dataset.filtro);
    });
});

renderizarVitrine();