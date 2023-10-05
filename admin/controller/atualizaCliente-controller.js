import { clienteService } from "../service/clientes-service.js"
const pegaURL = new URL(window.location)
//console.log(pegaURL)

const id = pegaURL.searchParams.get('id')
//console.log(id)

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    clienteService.atulizaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {
        window.location.href = "../telas/edicao_concluida.html"
    })
})