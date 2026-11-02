# 🍔 Burger — Sabor em cada mordida

Cardápio digital de uma hamburgueria artesanal, no estilo dos apps de delivery. Feito só com **HTML, CSS e JavaScript puro**, sem frameworks e sem build.

O projeto também serve de estudo dos métodos de array do JavaScript: `forEach`, `map`, `filter` e `reduce`. Cada uso está marcado no código com um comentário.

## Funcionalidades

- **Cardápio completo em uma página**, dividido em 7 categorias: Lanches Artesanais, Lanches de Frango, Burguer-Kids, Vegano, Porções, Bebidas e Combos.
- **Abas de navegação fixas**: o clique rola a página até a seção, e a aba ativa acompanha a rolagem (`IntersectionObserver`).
- **Busca em tempo real** por nome ou descrição. Ignora acentos e maiúsculas (`porcao` encontra "Porção") e esconde as seções sem resultado.
- **Combos com 10% de desconto**, montados automaticamente a partir dos IDs de lanche + porção + bebida. O preço original aparece riscado.
- **Modal do produto** com foto, descrição (ou a lista de itens, no caso dos combos) e seletor de quantidade.
- **Sacola lateral**: adicionar, alterar quantidade, remover itens e ver o total.
- **Barra "Ver sacola"** com contador e total, visível quando a sacola tem itens.
- **Toast** de confirmação ao adicionar um item.
- **Acessibilidade**: cards acessíveis pelo teclado (Enter abre o produto), `Esc` fecha o modal e a sacola, e há `aria-labels` nos botões.

## Como executar

Não há dependências para instalar. Basta abrir o `index.html` no navegador.

Também dá para usar um servidor local, por exemplo:

```bash
# Com a extensão Live Server do VS Code: clique em "Go Live"

# Ou com Python
python -m http.server 8000
# e acesse http://localhost:8000
```

> As fontes (Bebas Neue e Poppins) vêm do Google Fonts, então é preciso estar conectado à internet para vê-las.

## Estrutura

```
burger/
├── index.html   # Estrutura da página (capa, busca, abas, modal, sacola)
├── style.css    # Estilos e layout responsivo
├── script.js    # Dados do cardápio e toda a lógica
└── img/         # Ilustrações SVG dos produtos, da capa e do logo
```

### Organização do `script.js`

| Seção | Conteúdo |
|---|---|
| 1. Dados | `categorias`, `produtos` e `combosBase` |
| 2. Combos | Monta os combos com desconto (`map` + `filter` + `reduce`) |
| 3. Elementos e estado | Referências do DOM, carrinho e categoria atual |
| 4. Auxiliares | Formatação em R$, normalização de texto, busca por ID |
| 5. Abas | Renderização e marcação da aba ativa |
| 6. Cardápio | Renderização das seções, cards e observador de rolagem |
| 7. Modal | Abrir, atualizar e fechar o modal do produto |
| 8. Carrinho | Adicionar, alterar, remover, total e finalizar pedido |
| 9. Eventos | Ligação dos eventos e inicialização |

Para encontrar os métodos de array no código, procure pelas marcações `[FOREACH]`, `[MAP]`, `[FILTER]` e `[REDUCE]`.

## Personalização

**Adicionar um produto:** inclua um objeto no array `produtos` em `script.js`:

```js
{ id: 25, categoria: "porcoes", nome: "Polenta Frita", preco: 20.9, imagem: "img/polenta.svg",
  descricao: "Polenta crocante com parmesão." },
```

**Criar um combo:** adicione em `combosBase` os IDs de `[lanche, porção, bebida]`. O preço e a descrição são calculados sozinhos:

```js
{ id: 107, nome: "Combo Picante", imagem: "img/combo-picante.svg", itens: [9, 20, 31] },
```

**Mudar o desconto dos combos:** altere a constante `DESCONTO_COMBO` (padrão `0.10`, ou seja, 10%).

**Usar fotos de verdade:** troque o caminho no campo `imagem` de cada produto.

## Tecnologias

- HTML5 semântico
- CSS3
- JavaScript (ES6+): template literals, arrow functions, spread, `IntersectionObserver`, `Intl` (`toLocaleString` para moeda em BRL)

## Observações

- O botão "Finalizar pedido" é apenas demonstrativo: ele mostra uma mensagem de confirmação e esvazia a sacola, sem enviar o pedido a lugar nenhum.
- A sacola não é salva: ela se perde ao recarregar a página.

---

© 2026 Burger — Sabor em cada mordida
