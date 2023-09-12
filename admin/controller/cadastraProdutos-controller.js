import { ProdutoService } from "../service/produtos-service.js"
const formularioProduto = document.querySelector('[data-form-produto]')

// Adicione um ouvinte de evento 'submit' ao formulário.
formularioProduto.addEventListener('submit', (evento) => {
    
        // Previne o comportamento padrão do formulário (como recarregar a página).
        evento.preventDefault()

        // Recupera o valor inserido no campo com o atributo [data-nome].
       const nome = evento.target.querySelector('[data-nome]').value

       // Recupera o valor inserido no campo com o atributo [data-email].
       const preço = evento.target.querySelector('[data-preço]').value

       const descricao = evento.target.querySelector('[data-descricao]').value

       // Usa o serviço clienteService para criar um novo cliente com os valores obtidos.
       ProdutoService.criarProdutos(nome, preço, descricao)
        .then(() => {
            // Depois de criar o cliente com sucesso, redireciona o usuário para a tela 'cadastro_concluido.html'.
            window.location.href = '../telas/cadastro_concluido.html'
        })
})
