const BASE_URL = "https://api.chucknorris.io/";

async function random() {
  let response = await fetch(BASE_URL);
  let data = await response.json();

  let value = data.value;

  document.getElementById("frase").innerText = value;
}

chuckNorris();


