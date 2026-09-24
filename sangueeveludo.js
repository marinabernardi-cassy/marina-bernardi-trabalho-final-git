
const chave = "carrinho_sv";

function obterCarrinho() {
    let carrinho = localStorage.getItem(chave);

    if (carrinho) {
        return JSON.parse(carrinho);
    }

    return [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem(chave, JSON.stringify(carrinho));
}

function atualizarContador() {
    let carrinho = obterCarrinho();
    let total = 0;

    carrinho.forEach(function(produto) {
        total = total + produto.quantidade;
    });

    let contador = document.getElementById("qtdCarrinho");

    if (contador) {
        contador.textContent = total;
    }
}

function adicionarCarrinho(nome, preco, imagem) {
    let carrinho = obterCarrinho();

    let produtoEncontrado = carrinho.find(function(produto) {
        return produto.nome === nome;
    });

    if (produtoEncontrado) {
        produtoEncontrado.quantidade = produtoEncontrado.quantidade + 1;
    } else {
        let produto = {
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1
        };

        carrinho.push(produto);
    }

    salvarCarrinho(carrinho);

    atualizarContador();

    alert(nome + " foi adicionado ao carrinho!");
}

document.addEventListener("DOMContentLoaded", function() {
    atualizarContador();
}); 