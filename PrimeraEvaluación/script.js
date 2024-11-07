const movieList = document.getElementById("movieList");

async function addMovie() {
  const title = document.getElementById("movieTitle").value;
  const rating = document.getElementById("movieRating").value;

  if (title && rating >= 1 && rating <= 5) {
    const movieData = await fetchMovieData(title);
    
    if (movieData) {
      const movieItem = document.createElement("li");
      movieItem.className = "movie";
      movieItem.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w50${movieData.poster_path}" alt="${movieData.title}">
        <span>${movieData.title} - Puntuación: ${rating}</span>
        <span class="favorite" onclick="toggleFavorite(this)">★</span>
      `;
      movieList.appendChild(movieItem);

      document.getElementById("movieTitle").value = "";
      document.getElementById("movieRating").value = "";
    } else {
      alert("No se encontró la película. Intente con otro título.");
    }
  } else {
    alert("Por favor, ingrese un título válido y una puntuación entre 1 y 5.");
  }
}

async function fetchMovieData(title) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 09c70613de77d138a3a73efd7f2a6b41' // Tu token
    }
  };

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&include_adult=false&language=en-US&page=1`, options);
  const data = await response.json();
  return data.results.length > 0 ? data.results[0] : null; // Retorna la primera película encontrada
}

function toggleFavorite(star) {
  star.classList.toggle("favorite");
}
