export function GetMovies(desiredMovie, setMovies) {
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
        console.log(res);

        const filterMovies = {
          page: res.page,
          totalPages: res.total_pages,
          totalItens: res.total_results,
          movies: res.results.map((item) => ({
            id: item?.id,
            name: item?.original_title,
            description: item.overview,
            note: item.vote_average,
            date: item.release_date,
            poster: item.poster_path,
            backImage: item.backdrop_path,
          })),
        };
        console.log(filterMovies);

        setMovies(filterMovies);
      }
    }
  };
}
