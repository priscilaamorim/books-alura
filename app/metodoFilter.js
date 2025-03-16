const botoes = document.querySelectorAll(".btn");


botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    // Pega o botão que foi clicado
    const elementoBtn = document.getElementById(this.id);
    
    // Pega o valor (categoria) do botão clicado
    const categoria = elementoBtn.value;

    // Filtra os livros com base na categoria
    let livrosFiltrados;
    if (categoria === 'disponivel') {
        // Filtra livros com quantidade maior que 0
        livrosFiltrados = livros.filter(livro => livro.quantidade > 0);
    } else {
        // Filtra livros pela categoria escolhida
        livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
    }

    // Exibe os livros filtrados na tela
    exibirLivrosNaTela(livrosFiltrados);
     
    if (categoria === 'disponivel') {
        const valorTotal = calcularValorTotalDosLivrosDisponiveis(livrosFiltrados);
       exibirTotalDosLivrosDisponiveisNaTela(valorTotal);
}

function exibirTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = 
    ` <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
    
}
}