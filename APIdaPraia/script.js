// function getAdvice() {
//   alert("Olá");
// }

// getAdvice(); //executa a função

async function getAdvice() {
  const resposta = await fetch("https://api.adviceslip.com/advice");
  //criou uma const resposta que está guardando os dados que vem da API

  const data = await resposta.json();
  //transformando em JSON a resposta que está guardando da API

  //quando o botao for apertado esses dados vao ser adicionados no meu <p></p>
  document.querySelector("#frase").innerText = data.slip.advice;
}

// getAdvice();

//buton funcionando

const btnGetAdvice = document.querySelector("#get-advice");

btnGetAdvice.addEventListener("click", function () {
  getAdvice();
});
