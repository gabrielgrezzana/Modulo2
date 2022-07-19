async function getphoto() {
  const resp = await fetch("https://api.adviceslip.com/advice");
  console.log(resp);

  const data = await resp.json();
  console.log(data);

  document.querySelector("#photo").setAttribute() = data.spli.advice;
}

const btnphoto = document.querySelector("#tradephoto");

btnphoto.addEventListener("click", function () {
  getphoto;
});
