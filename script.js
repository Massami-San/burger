/* =========================================================
   BURGER — Cardápio e carrinho
   Procure pelos comentários  [FOREACH]  [MAP]  [FILTER]  [REDUCE]
   para ver onde cada método foi usado.
   ========================================================= */


/* ---------------------------------------------------------
   1. DADOS
   As imagens ficam na pasta "img" (ilustrações em SVG).
   Para trocar por fotos, basta mudar o caminho em "imagem".
   --------------------------------------------------------- */

const categorias = [
  { id: "artesanais", nome: "Lanches Artesanais", icone: "🍔" },
  { id: "frango",     nome: "Lanches de Frango",  icone: "🍗" },
  { id: "kids",       nome: "Burguer-Kids",       icone: "🧒" },
  { id: "vegano",     nome: "Vegano",             icone: "🌱" },
  { id: "porcoes",    nome: "Porções",            icone: "🍟" },
  { id: "bebidas",    nome: "Bebidas",            icone: "🥤" },
  { id: "combos",     nome: "Combos",             icone: "🔥" },
];

const produtos = [
  // ----- Lanches artesanais -----
  { id: 1, categoria: "artesanais", nome: "Brasa Clássico", preco: 29.9, imagem: "img/brasa-classico.svg",
    descricao: "Blend bovino 160g, queijo prato, alface, tomate e maionese da casa no pão brioche." },
  { id: 2, categoria: "artesanais", nome: "Smash Duplo", preco: 32.9, imagem: "img/smash-duplo.svg",
    descricao: "Dois smash de 90g, cheddar duplo, cebola caramelizada e picles." },
  { id: 3, categoria: "artesanais", nome: "Bacon Supremo", preco: 35.9, imagem: "img/bacon-supremo.svg",
    descricao: "Blend 180g, muito bacon crocante, cheddar e molho barbecue artesanal." },
  { id: 4, categoria: "artesanais", nome: "Cheddar Melt", preco: 33.9, imagem: "img/cheddar-melt.svg",
    descricao: "Blend 160g coberto com cheddar cremoso derretido e cebola crispy." },
  { id: 5, categoria: "artesanais", nome: "Defumado da Casa", preco: 37.9, imagem: "img/defumado-da-casa.svg",
    descricao: "Blend 200g, provolone, costela desfiada defumada e maionese de alho." },

  // ----- Lanches de frango -----
  { id: 6, categoria: "frango", nome: "Crispy Chicken", preco: 28.9, imagem: "img/crispy-chicken.svg",
    descricao: "Sobrecoxa empanada super crocante, alface, tomate e maionese temperada." },
  { id: 7, categoria: "frango", nome: "Frango Barbecue", preco: 30.9, imagem: "img/frango-barbecue.svg",
    descricao: "Filé de frango grelhado, bacon, queijo prato e barbecue." },
  { id: 8, categoria: "frango", nome: "Chicken Cheddar", preco: 31.9, imagem: "img/chicken-cheddar.svg",
    descricao: "Frango empanado, cheddar cremoso e cebola caramelizada." },
  { id: 9, categoria: "frango", nome: "Frango Picante", preco: 29.9, imagem: "img/frango-picante.svg",
    descricao: "Frango crocante com molho de pimenta, jalapeño e coleslaw." },

  // ----- Burguer-Kids -----
  { id: 10, categoria: "kids", nome: "Mini Smash", preco: 28.0, imagem: "img/mini-smash.svg",
    descricao: "Smash 90g, queijo e ketchup no pãozinho macio. Acompanha brinde surpresa." },
  { id: 11, categoria: "kids", nome: "Kids Frango", preco: 28.5, imagem: "img/kids-frango.svg",
    descricao: "Tirinhas de frango empanado, queijo e maionese suave. Acompanha brinde." },
  { id: 12, categoria: "kids", nome: "Kids Cheese", preco: 28.9, imagem: "img/kids-cheese.svg",
    descricao: "Burger 100g com queijo duplo, sem verdura, do jeitinho que criança gosta." },

  // ----- Vegano -----
  { id: 13, categoria: "vegano", nome: "Grão Verde", preco: 30.9, imagem: "img/grao-verde.svg",
    descricao: "Hambúrguer de grão-de-bico, rúcula, tomate seco e maionese vegana." },
  { id: 14, categoria: "vegano", nome: "Cogumelo Burger", preco: 33.9, imagem: "img/cogumelo-burger.svg",
    descricao: "Blend de cogumelos, cebola roxa, queijo vegetal e molho de ervas." },
  { id: 15, categoria: "vegano", nome: "Plant Smash", preco: 34.9, imagem: "img/plant-smash.svg",
    descricao: "Dois smash à base de plantas, cheddar vegano e picles." },

  // ----- Porções -----
  { id: 20, categoria: "porcoes", nome: "Batata Rústica", preco: 19.9, imagem: "img/batata-rustica.svg",
    descricao: "Batatas com casca, alecrim e páprica. Serve 2 pessoas." },
  { id: 21, categoria: "porcoes", nome: "Batata Cheddar & Bacon", preco: 27.9, imagem: "img/batata-cheddar-bacon.svg",
    descricao: "Fritas cobertas com cheddar cremoso e bacon em cubos." },
  { id: 22, categoria: "porcoes", nome: "Onion Rings", preco: 22.9, imagem: "img/onion-rings.svg",
    descricao: "Anéis de cebola empanados e crocantes com molho barbecue." },
  { id: 23, categoria: "porcoes", nome: "Nuggets Caseiros", preco: 24.9, imagem: "img/nuggets.svg",
    descricao: "10 nuggets de frango feitos na casa com molho à escolha." },
  { id: 24, categoria: "porcoes", nome: "Mandioca Frita", preco: 21.9, imagem: "img/mandioca-frita.svg",
    descricao: "Mandioca sequinha e crocante com sal grosso. Vegana." },

  // ----- Bebidas -----
  { id: 30, categoria: "bebidas", nome: "Refrigerante Lata", preco: 6.9, imagem: "img/refrigerante.svg",
    descricao: "350ml. Cola, guaraná ou laranja." },
  { id: 31, categoria: "bebidas", nome: "Suco Natural", preco: 9.9, imagem: "img/suco-natural.svg",
    descricao: "500ml. Laranja, maracujá ou abacaxi com hortelã." },
  { id: 32, categoria: "bebidas", nome: "Limonada Suíça", preco: 10.9, imagem: "img/limonada-suica.svg",
    descricao: "500ml, cremosa e geladinha." },
  { id: 33, categoria: "bebidas", nome: "Milkshake de Baunilha", preco: 16.9, imagem: "img/milkshake.svg",
    descricao: "400ml com calda de caramelo e chantilly." },
  { id: 34, categoria: "bebidas", nome: "Água Mineral", preco: 4.5, imagem: "img/agua.svg",
    descricao: "500ml, com ou sem gás." },
];

// Cada combo só guarda os IDs de: [lanche, porção, bebida]
const DESCONTO_COMBO = 0.10; // 10%

const combosBase = [
  { id: 101, nome: "Combo Clássico", imagem: "img/combo-classico.svg", itens: [1, 20, 30] },
  { id: 102, nome: "Combo Bacon",    imagem: "img/combo-bacon.svg",    itens: [3, 21, 30] },
  { id: 103, nome: "Combo Defumado", imagem: "img/combo-defumado.svg", itens: [5, 22, 33] },
  { id: 104, nome: "Combo Crocante", imagem: "img/combo-crocante.svg", itens: [6, 22, 31] },
  { id: 105, nome: "Combo Kids",     imagem: "img/combo-kids.svg",     itens: [10, 23, 31] },
  { id: 106, nome: "Combo Verde",    imagem: "img/combo-verde.svg",    itens: [13, 24, 32] },
];




/* ---------------------------------------------------------
   2. MONTANDO OS COMBOS COM DESCONTO
   --------------------------------------------------------- */

// [MAP] transforma cada combo "simples" (só IDs) em um combo completo
const combos = combosBase.map((combo) => {

  // [FILTER] pega do cardápio apenas os produtos cujo id está no combo
  const itensDoCombo = produtos.filter((produto) => combo.itens.includes(produto.id));

  // [REDUCE] soma os preços dos 3 itens em um único valor.
  // "soma" é o acumulador: começa em 0 (o segundo argumento)
  // e a cada item recebe o que a função retornou na volta anterior.
  const precoOriginal = itensDoCombo.reduce((soma, item) => soma + item.preco, 0);

  const precoComDesconto = precoOriginal * (1 - DESCONTO_COMBO);

  return {
    id: combo.id,
    categoria: "combos",
    nome: combo.nome,
    imagem: combo.imagem,
    itens: itensDoCombo,
    precoOriginal: precoOriginal,
    preco: Math.round(precoComDesconto * 100) / 100, // arredonda para centavos
    // [MAP] cria uma lista só com os nomes e junta com " + "
    descricao: itensDoCombo.map((item) => item.nome).join(" + "),
  };
});

// Cardápio completo = produtos avulsos + combos
const cardapio = [...produtos, ...combos];


/* ---------------------------------------------------------
   3. ELEMENTOS DA PÁGINA E ESTADO
   --------------------------------------------------------- */

const abasEl          = document.getElementById("abas");
const cardapioEl      = document.getElementById("cardapio");
const buscaEl         = document.getElementById("busca");
const carrinhoEl      = document.getElementById("carrinho");
const fundoEl         = document.getElementById("fundo");
const listaCarrinhoEl = document.getElementById("listaCarrinho");
const totalEl         = document.getElementById("totalCarrinho");
const contadorEl      = document.getElementById("contador");
const barraSacolaEl   = document.getElementById("abrirCarrinho");
const totalBarraEl    = document.getElementById("totalBarra");
const mensagemEl      = document.getElementById("mensagemPedido");
const toastEl         = document.getElementById("toast");

const modalEl         = document.getElementById("modal");
const modalFotoEl     = document.getElementById("modalFoto");
const modalNomeEl     = document.getElementById("modalNome");
const modalDescEl     = document.getElementById("modalDescricao");
const modalPrecosEl   = document.getElementById("modalPrecos");
const modalQtdEl      = document.getElementById("modalQtd");
const modalAddEl      = document.getElementById("modalAdicionar");

let categoriaAtual = categorias[0].id;
let termoBusca = "";
let carrinho = [];          // cada item: { id, nome, imagem, preco, quantidade }
let produtoNoModal = null;  // produto aberto no modal
let quantidadeModal = 1;


/* ---------------------------------------------------------
   4. FUNÇÕES AUXILIARES
   --------------------------------------------------------- */

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Tira acentos e deixa minúsculo, para a busca achar "porcao" e "porção"
function normalizar(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function buscarProduto(id) {
  // [FILTER] encontra o produto pelo id no cardápio
  const [produto] = cardapio.filter((p) => p.id === id);
  return produto;
}

// HTML do preço (combos mostram também o preço antigo riscado)
function htmlPrecos(produto) {
  const ehCombo = produto.categoria === "combos";
  return `
    ${ehCombo ? `<span class="preco-antigo">${formatarPreco(produto.precoOriginal)}</span>` : ""}
    <span class="preco">${formatarPreco(produto.preco)}</span>
  `;
}


/* ---------------------------------------------------------
   5. ABAS
   As abas não filtram mais: elas rolam a página até a seção.
   --------------------------------------------------------- */

function renderizarAbas(categoriasVisiveis) {
  // [MAP] cada categoria vira um <button> em texto HTML
  abasEl.innerHTML = categoriasVisiveis
    .map((cat) => `
      <button class="aba ${cat.id === categoriaAtual ? "ativa" : ""}" data-categoria="${cat.id}">
        ${cat.icone} ${cat.nome}
      </button>
    `)
    .join("");

  // [FOREACH] coloca o evento de clique em cada botão de aba
  abasEl.querySelectorAll(".aba").forEach((botao) => {
    botao.addEventListener("click", () => {
      document.getElementById(`secao-${botao.dataset.categoria}`)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Marca a aba ativa sem redesenhar tudo
function marcarAba(idCategoria) {
  categoriaAtual = idCategoria;

  // [FOREACH] liga a classe "ativa" só na aba da categoria atual
  abasEl.querySelectorAll(".aba").forEach((botao) => {
    const ativa = botao.dataset.categoria === idCategoria;
    botao.classList.toggle("ativa", ativa);
    if (ativa) botao.scrollIntoView({ block: "nearest", inline: "center" });
  });
}


/* ---------------------------------------------------------
   6. CARDÁPIO (todas as categorias em uma página só)
   --------------------------------------------------------- */

function criarCard(produto) {
  const ehCombo = produto.categoria === "combos";

  return `
    <article class="card" data-id="${produto.id}" tabindex="0">
      <div class="card__texto">
        <h3 class="card__nome">${produto.nome}</h3>
        <p class="card__descricao">${produto.descricao}</p>
        <div class="precos">${htmlPrecos(produto)}</div>
      </div>

      <div class="card__foto">
        ${ehCombo ? '<span class="selo">-10%</span>' : ""}
        <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
      </div>
    </article>
  `;
}

function renderizarCardapio() {
  const termo = normalizar(termoBusca);

  // [MAP] para cada categoria, junta os produtos dela
  const secoes = categorias
    .map((cat) => ({
      ...cat,
      // [FILTER] produtos da categoria (e que batem com a busca, se houver)
      itens: cardapio.filter((produto) =>
        produto.categoria === cat.id &&
        (normalizar(produto.nome).includes(termo) || normalizar(produto.descricao).includes(termo))
      ),
    }))
    // [FILTER] esconde as seções que ficaram vazias na busca
    .filter((secao) => secao.itens.length > 0);

  if (secoes.length === 0) {
    // textContent (e não innerHTML) porque o texto vem do que a pessoa digitou
    cardapioEl.innerHTML = `<p class="vazio"></p>`;
    cardapioEl.firstChild.textContent = `Nenhum item encontrado para "${termoBusca}". 😕`;
    renderizarAbas([]);
    return;
  }

  // [MAP] cada seção vira um bloco com título + grade de cards
  cardapioEl.innerHTML = secoes
    .map((secao) => `
      <section class="secao" id="secao-${secao.id}" data-categoria="${secao.id}">
        <h2 class="secao__titulo">${secao.nome}</h2>
        ${secao.id === "combos"
          ? `<p class="secao__aviso">🔥 Todo combo vem com <strong>lanche + porção + bebida</strong> e <strong>10% de desconto</strong>.</p>`
          : ""}
        <div class="grade">${secao.itens.map(criarCard).join("")}</div>
      </section>
    `)
    .join("");

  if (!secoes.some((secao) => secao.id === categoriaAtual)) {
    categoriaAtual = secoes[0].id;
  }
  renderizarAbas(secoes);

  // [FOREACH] clicar (ou apertar Enter) num card abre o modal do produto
  cardapioEl.querySelectorAll(".card").forEach((card) => {
    const abrir = () => abrirModal(Number(card.dataset.id));
    card.addEventListener("click", abrir);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") abrir(); });
  });

  observarSecoes();
}

// Conforme a página rola, a aba da seção visível fica ativa
let observador;
function observarSecoes() {
  if (observador) observador.disconnect();

  observador = new IntersectionObserver((entradas) => {
    // [FOREACH] a seção que entrou na faixa de cima da tela vira a ativa
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) marcarAba(entrada.target.dataset.categoria);
    });
  }, { rootMargin: "-140px 0px -65% 0px" });

  // [FOREACH] observa cada seção
  cardapioEl.querySelectorAll(".secao").forEach((secao) => observador.observe(secao));
}


/* ---------------------------------------------------------
   7. MODAL DO PRODUTO
   --------------------------------------------------------- */

function abrirModal(id) {
  produtoNoModal = buscarProduto(id);
  quantidadeModal = 1;

  modalFotoEl.src = produtoNoModal.imagem;
  modalFotoEl.alt = produtoNoModal.nome;
  modalNomeEl.textContent = produtoNoModal.nome;
  modalPrecosEl.innerHTML = htmlPrecos(produtoNoModal);

  // Combos mostram a lista de itens; os outros, a descrição
  modalDescEl.innerHTML = produtoNoModal.categoria === "combos"
    // [MAP] cada item do combo vira um <li>
    ? `<ul class="lista-combo">${produtoNoModal.itens.map((item) => `<li>${item.nome}</li>`).join("")}</ul>`
    : `<p>${produtoNoModal.descricao}</p>`;

  atualizarModal();
  modalEl.hidden = false;
  document.body.classList.add("travado");
}

function atualizarModal() {
  modalQtdEl.textContent = quantidadeModal;
  modalAddEl.textContent = `Adicionar • ${formatarPreco(produtoNoModal.preco * quantidadeModal)}`;
}

function fecharModal() {
  modalEl.hidden = true;
  document.body.classList.remove("travado");
}


/* ---------------------------------------------------------
   8. CARRINHO
   --------------------------------------------------------- */

function adicionarAoCarrinho(id, quantidade) {
  const produto = buscarProduto(id);

  // [FILTER] verifica se ele já está no carrinho
  const jaNoCarrinho = carrinho.filter((item) => item.id === id);

  if (jaNoCarrinho.length > 0) {
    jaNoCarrinho[0].quantidade += quantidade;
  } else {
    carrinho.push({ id: produto.id, nome: produto.nome, imagem: produto.imagem, preco: produto.preco, quantidade });
  }

  mensagemEl.textContent = "";
  renderizarCarrinho();
  mostrarToast(`${quantidade}x ${produto.nome} adicionado!`);
}

function alterarQuantidade(id, mudanca) {
  carrinho = carrinho
    // [MAP] cria um novo carrinho com a quantidade do item alterada
    .map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + mudanca } : item
    )
    // [FILTER] tira do carrinho quem ficou com quantidade 0
    .filter((item) => item.quantidade > 0);

  renderizarCarrinho();
}

function removerDoCarrinho(id) {
  // [FILTER] mantém todos os itens, menos o que tem esse id
  carrinho = carrinho.filter((item) => item.id !== id);
  renderizarCarrinho();
}

function renderizarCarrinho() {
  // [REDUCE] soma o valor de cada item (preço × quantidade), começando de 0
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);

  // [REDUCE] soma quantas unidades existem no carrinho
  const quantidadeTotal = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  totalEl.textContent = formatarPreco(total);
  totalBarraEl.textContent = formatarPreco(total);
  contadorEl.textContent = quantidadeTotal;
  barraSacolaEl.hidden = quantidadeTotal === 0;

  if (carrinho.length === 0) {
    listaCarrinhoEl.innerHTML = `<li class="carrinho__vazio">Sua sacola está vazia 🍔</li>`;
    return;
  }

  // [MAP] cada item do carrinho vira um <li>
  listaCarrinhoEl.innerHTML = carrinho
    .map((item) => `
      <li class="item-carrinho">
        <img class="item-carrinho__foto" src="${item.imagem}" alt="">
        <div class="item-carrinho__info">
          <span class="item-carrinho__nome">${item.nome}</span>
          <span class="item-carrinho__preco">${formatarPreco(item.preco * item.quantidade)}</span>
          <div class="item-carrinho__acoes">
            <div class="quantidade quantidade--pequena">
              <button class="qtd-btn" data-id="${item.id}" data-mudanca="-1" aria-label="Diminuir">−</button>
              <span>${item.quantidade}</span>
              <button class="qtd-btn" data-id="${item.id}" data-mudanca="1" aria-label="Aumentar">+</button>
            </div>
            <button class="remover-btn" data-id="${item.id}">remover</button>
          </div>
        </div>
      </li>
    `)
    .join("");

  // [FOREACH] eventos dos botões + e −
  listaCarrinhoEl.querySelectorAll(".qtd-btn").forEach((botao) => {
    botao.addEventListener("click", () => {
      alterarQuantidade(Number(botao.dataset.id), Number(botao.dataset.mudanca));
    });
  });

  // [FOREACH] eventos dos botões "remover"
  listaCarrinhoEl.querySelectorAll(".remover-btn").forEach((botao) => {
    botao.addEventListener("click", () => removerDoCarrinho(Number(botao.dataset.id)));
  });
}

function abrirCarrinho() {
  carrinhoEl.classList.add("aberto");
  fundoEl.classList.add("aberto");
}

function fecharCarrinho() {
  carrinhoEl.classList.remove("aberto");
  fundoEl.classList.remove("aberto");
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    mensagemEl.textContent = "Adicione algum item antes de finalizar.";
    return;
  }
  mensagemEl.textContent = `Pedido recebido! Total: ${totalEl.textContent}. Obrigado! 🍔`;
  carrinho = [];
  renderizarCarrinho();
}

let tempoToast;
function mostrarToast(texto) {
  toastEl.textContent = texto;
  toastEl.classList.add("visivel");
  clearTimeout(tempoToast);
  tempoToast = setTimeout(() => toastEl.classList.remove("visivel"), 1800);
}


/* ---------------------------------------------------------
   9. EVENTOS GERAIS E INÍCIO
   --------------------------------------------------------- */

barraSacolaEl.addEventListener("click", abrirCarrinho);
document.getElementById("fecharCarrinho").addEventListener("click", fecharCarrinho);
document.getElementById("finalizar").addEventListener("click", finalizarPedido);
fundoEl.addEventListener("click", fecharCarrinho);

// Modal
document.getElementById("fecharModal").addEventListener("click", fecharModal);
document.getElementById("modalMenos").addEventListener("click", () => {
  quantidadeModal = Math.max(1, quantidadeModal - 1);
  atualizarModal();
});
document.getElementById("modalMais").addEventListener("click", () => {
  quantidadeModal += 1;
  atualizarModal();
});
modalAddEl.addEventListener("click", () => {
  adicionarAoCarrinho(produtoNoModal.id, quantidadeModal);
  fecharModal();
});
// Clicar fora da caixa fecha o modal
modalEl.addEventListener("click", (e) => {
  if (e.target === modalEl) fecharModal();
});
// Tecla Esc fecha modal e carrinho
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    fecharModal();
    fecharCarrinho();
  }
});

buscaEl.addEventListener("input", () => {
  termoBusca = buscaEl.value.trim();
  renderizarCardapio();
});

renderizarCardapio();
renderizarCarrinho();
