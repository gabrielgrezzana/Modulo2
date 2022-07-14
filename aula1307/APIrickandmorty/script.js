async function getCharacter() {
  const resposta = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

  const data = await resposta.json();

  //   console.log(data.results);
  //isso é para ver que tipo de dados está chegando

  //estou colocando esse .results porque ja sei que é dentro desse aray que quero navegar.
  //descobri isso com o console.log acima em inspecionar elemente da api.
  //   data.results.forEach((iten) => {
  //     console.log(iten);
  //   });//varremos o array result para ver os itens que tem nele.

  data.results.foreach(function (character) {
    document.querySelector("#character-list").insertAdjacentHTML(
      "beforeend",
      `<div>
    <img class="image-character" src=${character.image} />

    <div>
      <h2 class="name-character">${character.name}</h2>
      <p class="species-character">${character.species}</p>
      <h4>Gender</h4>
      <p class="name-character">${character.gender}</p>
      <h4>Origin</h4>
      <p class="species-character">${character.origin.name}</p>
    </div>
    </div>`
    ); //pegou a div do html e só passou os dados interados no array
    //basicamente peguei as keys que tem na api e passei pra estrutura que eu quero

    //somente para ver qual imagen está vindo
    console.log(character.image);
  });
}

//chamando a funcao p ela funcionar
getCharacter();

//troca de pagica easy

function viewMore() {
  page++;
  getCharacters();
  console.log(page);
}
// viewMore();

window.addEventListener("scroll", function () {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  //desestruturou os objetos que vem do DOM, lembrando que o DOM é uma grande lista nesse caso.!
  if (scrollTop + clientHeight >= scrollHeight - 300) {
    viewMore();
  }
});
