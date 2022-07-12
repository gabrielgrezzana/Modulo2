// estou pegando as propriedades do botao no meu html.
const addBtn = document.querySelector("#addBtn");

// criar um evento de click para o botao executar a função.

addBtn.addEventListener("click", function () {
  const li = document.createElement("li"); //criacao da li na minha lista vazia
  const inputValue = document.querySelector("#myInput").value; //aqui estou pegndo o valor que está no meu input e colocando na variavel criada.
  const taskText = document.createTextNode(inputValue); //adicionou o texto digitado pelo usado que está na variavel acima na taskText
  li.appendChild(taskText); //aqui estou criando a <li>com o valor aqui</li>

  //agora vou verificar se o valor está em branco.
  if (inputValue === "") {
    alert("Você deve digitar uma tarefa");
  } else {
    document.getElementById("myUL").appendChild(li);
    //adicionou a li como filha de ul
    //pode usar o queryselector tbm
  }

  document.querySelector("#myInput").value = ""; // aqui estou apagando para escrever a proxima tarefa.

  //colocar o simbolo de X na li.
  const span = document.createElement("span"); // criei um elemento no html <span></span>
  const icon = document.createTextNode("\u00D7"); //simbolo X pelo JS

  span.className = "close"; //criando uma classe no span
  span.appendChild(icon); //inseri o icone no span
  li.appendChild(span); //inseri a span em li

  //apagar a tarefa
  const close = document.querySelectorAll(".close"); //utilizamos o selectAll para pegar todas as span criadas.

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      const li = this.parentElement; // pega o parente que é o elemento li.
      li.style.display = "none"; //mudar o display para none fazendo ele sumir para preencher a lacuna.
    });
  }
});

//check na tarefa
const list = document.querySelector("ul"); //selecionei a lista inteira.

list.addEventListener("click", (event) => {
  //dentro da minha target tudo que tiver o nome node==LI
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle("checked");
  }
});
