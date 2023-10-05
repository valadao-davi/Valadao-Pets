// Função para listar os clientes.
const listaProduto = () => {
    // Faz uma requisição GET para buscar os clientes no endereço especificado.
    return fetch(`http://localhost:3000/produto`)
    // Depois de receber a resposta da requisição...
    .then(resposta => {
       // ... converte essa resposta de formato JSON para um objeto JavaScript.
       return resposta.json()
    })   
 }
 
 // Função para criar um novo cliente.
 const criarProdutos = (nome, preço, descricao) => {
    // Faz uma requisição POST para adicionar um novo cliente no endereço especificado.
    return fetch(`http://localhost:3000/produto`, {
       method: 'POST', // Define o método da requisição como POST.
       headers: {
          'Content-type' : 'application/json' // Define o tipo de conteúdo enviado como JSON.
       },
       // Converte o nome e email fornecidos para formato JSON para serem enviados na requisição.
       body: JSON.stringify({
          nome: nome,
          preço: preço,
          descricao: descricao       
         })
    })
    // Depois de receber a resposta da requisição...
    .then(resposta => {
       // ... converte essa resposta de formato JSON para um objeto JavaScript.
       return resposta.json();
    })
 }
 const removeProduto = (id) => {
   return fetch(`http://localhost:3000/produto/${id}`, {
      method: 'DELETE'
   })
 }


 const detalhaProduto = (id) =>{
   return fetch (`http://localhost:3000/produto/${id}`)
      .then (resposta => {
         return resposta.json
      })
 }

 const atualizaProduto = (id, preço, descricao, nome) => {
   return fetch (`http://localhost:3000/produto/${id}`, {
      method: 'PUT', 
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({
        nome: nome,
        preço: preço,
        descricao: descricao
      })
   })
   .then (resposta => {
      return resposta.json()
   })
 }
 // Exporta as funções listaClientes e criarClientes 
 // para que elas possam ser usadas em outros módulos/arquivos.
 export const ProdutoService = {
    listaProduto,
    criarProdutos,
    removeProduto,
    detalhaProduto,
    atualizaProduto
 }
 