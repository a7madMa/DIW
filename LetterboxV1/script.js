// Alternar entre modo oscuro y claro
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const addMovieFormContainer = document.getElementById(
  "add-movie-form-container"
);
const API_KEY = "42fe1355";

// Forzar que al cargar la página, siempre se cargue en modo claro
document.body.classList.add("light-mode");
toggleModeBtn.textContent = "Cambiar a Modo Oscuro";

// Función para cambiar entre modos
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  toggleModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Cambiar a Modo Claro"
    : "Cambiar a Modo Oscuro";
});

// Mostrar/ocultar el formulario de añadir película
document.getElementById("toggle-form-btn").addEventListener("click", () => {
  const isVisible = addMovieFormContainer.style.display === "block";
  addMovieFormContainer.style.display = isVisible ? "none" : "block";
  document.getElementById("toggle-form-btn").textContent = isVisible
    ? "Añadir Película"
    : "(X)";
});

// Función para obtener datos de película de OMDb
async function fetchMovieData(title) {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
  );
  return await response.json();
}

// Manejar el formulario de añadir película
document
  .getElementById("add-movie-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const { value: title } = document.getElementById("movie-title");
    const { value: rating } = document.getElementById("movie-rating");
    const { value: review } = document.getElementById("movie-review");

    const movieData = await fetchMovieData(title);
    const movie = {
      title,
      rating,
      review,
      posterUrl:
        movieData.Poster !== "N/A" ? movieData.Poster : "placeholder.png",
    };

    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovie(movie);
    document.getElementById("add-movie-form").reset();
  });

// Mostrar todas las películas guardadas
function displayMovies() {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.forEach(displayMovie);
}
// Mostrar una película individual
function displayMovie(movie) {
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");

  movieDiv.innerHTML = `
        <img src="${movie.posterUrl}" alt="Portada de ${movie.title}" class="movie-poster">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>Puntuación: <span class="movie-rating">${movie.rating}</span></p>
            <p>Comentario: <span class="movie-review">${movie.review}</span></p>
            <button class="favorite-btn">Añadir a Favoritos</button>
            <button class="delete-btn">Borrar</button>
        </div>
    `;

  // Función para mostrar detalles de la película en el modal
  movieDiv.querySelector(".movie-info").addEventListener("click", () => {
    const movieDetail = movie; // Obtener el detalle de la película
    document.getElementById("movie-detail-title").textContent =
      movieDetail.title;
    document.getElementById("movie-detail-synopsis").textContent =
      movieDetail.synopsis;
    document.getElementById("movie-detail-actors").textContent =
      "Actores: " + movieDetail.actors;
    document.getElementById("movie-detail-director").textContent =
      "Director: " + movieDetail.director;

    document.getElementById("movie-details-modal").style.display = "block";
  });

  // Cerrar el modal
  document.getElementById("close-modal-btn").addEventListener("click", () => {
    document.getElementById("movie-details-modal").style.display = "none";
  });

  // Lógica de favorito
  movieDiv
    .querySelector(".favorite-btn")
    .addEventListener("click", function () {
      this.classList.toggle("favorite");
      this.textContent = this.classList.contains("favorite")
        ? "<3"
        : "Añadir a Favoritos";
    });

  // Lógica para borrar la película
  movieDiv.querySelector(".delete-btn").addEventListener("click", () => {
    // Eliminar de la interfaz
    movieDiv.remove();

    // Eliminar de localStorage
    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    // Filtrar la película que debe eliminarse
    movies = movies.filter((m) => m.title !== movie.title);

    // Guardar nuevamente la lista actualizada en localStorage
    localStorage.setItem("movies", JSON.stringify(movies));
  });

  const movieList = document.getElementById("movie-list");
  movieList.insertBefore(movieDiv, movieList.firstChild); // Inserta la película al principio de la lista
}

// Cargar todas las películas al inicio
function displayMovies() {
  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  movies.forEach((movie) => {
    displayMovie(movie);
  });
}

// Buscar películas por título
document.getElementById("search-bar").addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  filterMovies(searchTerm);
});

// Filtrar las películas en localStorage
function filterMovies(searchTerm) {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  // Limpiar la lista actual y mostrar las películas filtradas
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = ""; // Limpiar lista
  filteredMovies.forEach(displayMovie); // Mostrar películas filtradas
}

// Mostrar todas las películas al cargar
function displayMovies() {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.forEach(displayMovie);
}

window.addEventListener("load", displayMovies);
