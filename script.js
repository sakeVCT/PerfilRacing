// Função para carregar os produtos
async function carregarProdutos() {
    try {
        const resposta = await fetch('produtos.json');
        const produtos = await respuesta.json();
        const contentor = document.getElementById('lista-porta-chaves');

        contentor.innerHTML = produtos.map(item => `
            <div class="card-produto">
                <img src="${item.imagem}" alt="${item.nome}">
                <h3>${item.nome}</h3>
                <p>${item.material}</p>
            </div>
        `).join('');
    } catch (erro) {
        console.error("Erro ao carregar o JSON:", erro);
    }
}

carregarProdutos();