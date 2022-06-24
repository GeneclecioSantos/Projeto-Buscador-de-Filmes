export function GetMovies(desiredMovie) {
  const xhr = new XMLHttpRequest(); //cria o navegador
  xhr.open(
    "GET",
    encodeURI(
      `https://api.themoviedb.org/3/search/movie?api_key=34fb62c6be7144d693b300fdbaeddcb5&language=pt-BR&page=1&include_adult=false&query=${desiredMovie}`
    )
  ); //coloca o link
  xhr.send(); //enviar a requisição
  xhr.onreadystatechange = function () {
    //abre o navegador

    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText);
        console.log(res.results);

        const filterFilmes = { res };
        console.log(filterFilmes);
      }
    }
  };
}
