async function getAdvice() {
  const resp = await fetch("https://api.adviceslip.com/advice");
  console.log(resp);

  const data = await resp.json();

  document.querySelector("#textWest").innerText = data.slip.advice;
}

const btnGet = document.querySelector("#get");

btnGet.addEventListener("click", function () {
  getAdvice();
});
