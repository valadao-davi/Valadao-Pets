// Importa o serviço de clientes para interagir com a API ou banco de dados.
import {clienteService} from "../service/clientes-service.js"

// Função que cria uma nova linha na tabela para exibir informações de um cliente.
const criaNovaLinha = (nome, email, id) => {
   // Cria um novo elemento de linha <tr> para a tabela.
   const linhaNovoCliente = document.createElement('tr')
   
   // Define o conteúdo da linha com informações do cliente e botões de ação.
   const conteudo = `
      <td class="td" data-td>${nome}</td>
      <td>${email}</td>
      <td>
         <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
         </ul>
      </td>`    
   linhaNovoCliente.innerHTML = conteudo
   linhaNovoCliente.dataset.id = id
   console.log(linhaNovoCliente)

   // Retorna o elemento da linha criada.
   return linhaNovoCliente
}



// Seleciona a tabela no documento HTML usando um atributo de dados.
const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento) => {
   let botaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
   if(botaoDeletar) {
      const linhaCliente = evento.target.closest('[data-id]')
      let id = linhaCliente.dataset.id
      clienteService.removeCliente(id)
      .then(() => {
         linhaCliente.remove()
      })
   }
})
// Chama a função do serviço de clientes para listar todos os clientes.
clienteService.listaClientes()
.then(data => {
   // Para cada cliente retornado, cria e adiciona uma nova linha na tabela.
   data.forEach(element => {
      tabela.appendChild(criaNovaLinha(element.nome, element.email, element.id))
   })
})
