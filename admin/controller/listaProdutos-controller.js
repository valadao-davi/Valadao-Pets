import { ProdutoService } from "../service/produtos-service.js"
const criarNovaLinhaProduto = (nome, preço, descricao, id) => {
    const linhaNovoProduto = document.createElement('tr')
    
    const conteudoProduto = `
    <td class="td" data-td>${nome}</td>
      <td>${preço}</td>
      <td>${descricao}</td>
      <td>
         <ul class="tabela__botoes-controle">
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
         </ul>
      </td>
    `
    linhaNovoProduto.innerHTML = conteudoProduto
    linhaNovoProduto.dataset.id = id
    console.log(linhaNovoProduto)

    return linhaNovoProduto
}
const tabelaProduto = document.querySelector('[data-tabela-produto]')

tabelaProduto.addEventListener('click', (evento) => {
   let botaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
   if(botaoDeletar) {
      const linhaProduto = evento.target.closest('[data-id]')
      let id = linhaProduto.dataset.id
      ProdutoService.removeProduto(id)
      .then(() => {
         linhaProduto.remove()
      })
   }
})
// Chama a função do serviço de clientes para listar todos os clientes.
ProdutoService.listaProduto()
.then(data => {
   // Para cada cliente retornado, cria e adiciona uma nova linha na tabela.
   data.forEach(element => {
      tabelaProduto.appendChild(criarNovaLinhaProduto(element.nome, element.preço, element.descricao, element.id))
   })
})
