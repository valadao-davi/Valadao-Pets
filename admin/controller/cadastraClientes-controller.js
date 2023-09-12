// Importa o clienteService do módulo clientes-service.js.
import { clienteService } from "../service/clientes-service.js"

// Selecione o formulário usando o atributo [data-form].
const formulario = document.querySelector('[data-form]')

// Adicione um ouvinte de evento 'submit' ao formulário.
formulario.addEventListener('submit', (evento) => {
    
        // Previne o comportamento padrão do formulário (como recarregar a página).
        evento.preventDefault()

        // Recupera o valor inserido no campo com o atributo [data-nome].
       const nome = evento.target.querySelector('[data-nome]').value

       // Recupera o valor inserido no campo com o atributo [data-email].
       const email = evento.target.querySelector('[data-email]').value

       // Usa o serviço clienteService para criar um novo cliente com os valores obtidos.
       clienteService.criarClientes(nome, email)
        .then(() => {
            // Depois de criar o cliente com sucesso, redireciona o usuário para a tela 'cadastro_concluido.html'.
            window.location.href = '../telas/cadastro_concluido.html'
        })
})
