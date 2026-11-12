// =========================================================================
// 1. INSTAGRAM OFICIAL DA THE 10 CLUB
// =========================================================================
const seuInstagram = "_the10club";


// =========================================================================
// 2. CAMISETAS CADASTRADAS (R$ 160,00 | TAMANHOS P, M, G E GG)
// =========================================================================
const camisetas = [
    {
        nome: "Camisa Internacional Branca Manga Longa",
        preco: 200.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.38.jpeg",
            "inter.jpeg",
            "inter.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        nome: "Camisa Seleção da Espanha Off-White",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.39 (1).jpeg",
            "WhatsApp Image 2026-11-12 at 15.10.40.jpeg",
            "espanha.jpeg",
            "espanha.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        nome: "Camisa Seleção da França II 2026/27",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.40 (1).jpeg",
            "franca.jpeg",
            "franca.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        nome: "Camisa Arsenal Vermelha e Branca",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.39 (2).jpeg",
            "WhatsApp Image 2026-11-12 at 15.10.39.jpeg",
            "arsenal.jpeg",
            "arsenal.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        nome: "Camisa Palmeiras Verde",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.39 (3).jpeg",
            "palmeiras.jpeg",
            "palmeiras.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"]
    },
    {
        nome: "Camisa Grêmio Azul Edição 1996",
        preco: 160.00,
        tentativasFoto: [
            "WhatsApp Image 2026-11-12 at 15.10.38 (1).jpeg",
            "gremio.jpeg",
            "gremio.jpg"
        ],
        tamanhos: ["P", "M", "G", "GG"]
    }
];


// =========================================================================
// 3. LÓGICA DA VITRINE, FILTROS E ENVIO PARA O INSTAGRAM (NÃO PRECISA ALTERAR)
// =========================================================================
const vitrine = document.getElementById("vitrine");
const botoesFiltro = document.querySelectorAll(".btn-filtro");
const avisoCopiado = document.getElementById("aviso-copiado");

const imagemAviso = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <rect width="100%" height="100%" fill="#202321"/>
        <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="#B7D83D">THE 10 CLUB</text>
        <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="#F1F0E9">Foto nao encontrada</text>
    </svg>`
);

function mostrarAviso() {
    avisoCopiado.classList.add("mostrar");
    setTimeout(() => {
        avisoCopiado.classList.remove("mostrar");
    }, 3500);
}

function renderizarVitrine(filtroTamanho = "TODOS") {
    vitrine.innerHTML = "";

    const listaFiltrada = filtroTamanho === "TODOS"
        ? camisetas
        : camisetas.filter((camisa) => camisa.tamanhos.includes(filtroTamanho));

    listaFiltrada.forEach((camisa) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const precoFormatado = camisa.preco.toFixed(2).replace(".", ",");

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
                <p class="preco">R$ ${precoFormatado}</p>
                <span class="label-tamanho">Selecione o tamanho:</span>
                <div class="tamanhos">${botoesTamanho}</div>
                <button class="btn-comprar">Pedir no Instagram</button>
            </div>
        `;

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

        const botoes = card.querySelectorAll(".btn-tamanho");
        botoes.forEach((botao) => {
            botao.addEventListener("click", () => {
                botoes.forEach((b) => b.classList.remove("ativo"));
                botao.classList.add("ativo");
            });
        });

        const btnComprar = card.querySelector(".btn-comprar");
        btnComprar.addEventListener("click", async () => {
            const tamanhoEscolhido = card.querySelector(".btn-tamanho.ativo").textContent;
            const mensagem = `Salve, THE 10 CLUB! Quero encomendar a ${camisa.nome} (Tamanho: ${tamanhoEscolhido}) - R$ ${precoFormatado}.`;

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
            btnComprar.textContent = "Copiado! Abrindo Direct...";

            setTimeout(() => {
                btnComprar.textContent = "Pedir no Instagram";
                window.open(`https://ig.me/m/${seuInstagram}`, "_blank");
            }, 700);
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