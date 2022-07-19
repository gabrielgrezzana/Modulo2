async function aprendendo() {
  const resp = await fetch("https://www.affirmations.dev");
  console.log(resp);

  const data = await resp.json();

  console.log(data);

  //   document.querySelector("#button").innerText = data.
}

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  aprendendo();
});
