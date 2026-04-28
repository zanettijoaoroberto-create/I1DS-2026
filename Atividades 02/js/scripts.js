const cadastrar = (event) => {
  // Parar a propagação padrão do evento
  event.preventDefault();
  // Capturar os valores do elementos por Id
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  // Capturando o elemento de lista por Id
  let lista = document.getElementById("lista");

  userCount++;
  let id = userCount; 
  // Criar um novo elemento <li>Nome - Email</li>
  let novoItem = document.createElement("li");
  novoItem.innerHTML = 
  id + 
  " - " +
  nome + 
   " - " +
   email +
   "<p onClick=editar(" +
  id +
  ") class= 'btn'>Editar</p>" +
  "<p onClick=excluir(" +
  id +
  ") class= 'btn'>Excluir</p>";
  // Adicionar o novo item na lista ja existente
  lista.appendChild(novoItem);
  // Limpar os campos
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
};

const editar = (id) => {
  // Buscar o conteudo do ID na lista  
  // preencher os campos do formulario com os valores 
};

const excluir = (id) => {
  // Buscar o conteudo do ID na lista e excluir
  // e remover o item
};