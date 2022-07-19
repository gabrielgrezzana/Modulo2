function fazGet(url) {
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}
function criaLinha(usuario) {}

function main() {
  data = fazGet("http://127.0.0.1:5500/treinodeAPI/index.html");
  usuarios = JSON.parse(data);
  console.log(usuarios);
}

main();
