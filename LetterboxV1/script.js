// Elementos principales del DOM
const addMovieFormContainer = document.getElementById(
  "add-movie-form-container"
);
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const body = document.body;
const movieList = document.getElementById("movie-list");

// Clave para la API de OMDb
const API_KEY = "42fe1355";

// === Gestión del modo claro/oscuro ===

// Cargar estado inicial desde localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleModeBtn.textContent = "Modo Oscuro 🌙";
}

// Alternar entre modos claro y oscuro
toggleModeBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleModeBtn.textContent = "Modo Oscuro 🌙";
    localStorage.setItem("theme", "light"); // Guardar tema en localStorage
  } else {
    toggleModeBtn.textContent = "Modo Claro ☀️";
    localStorage.setItem("theme", "dark"); // Guardar tema en localStorage
  }
});

// === Mostrar/ocultar formulario de añadir película ===
document.getElementById("toggle-form-btn").addEventListener("click", () => {
  const isVisible = addMovieFormContainer.style.display === "block";
  addMovieFormContainer.style.display = isVisible ? "none" : "block";
  document.getElementById("toggle-form-btn").textContent = isVisible
    ? "Añadir Película 🎥"
    : "❌";
});

// === Obtener datos de película desde OMDb ===
async function fetchMovieData(title) {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
  );
  return response.json();
}

// === Manejo del formulario de añadir película ===
document
  .getElementById("add-movie-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const title = document.getElementById("movie-title").value.trim();
    const rating = document.getElementById("movie-rating").value.trim();
    const review = document.getElementById("movie-review").value.trim();

    // Validar campos
    if (!title || !rating || !review) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Obtener la lista de películas desde localStorage
    const movies = JSON.parse(localStorage.getItem("movies")) || [];

    // Validar si la película ya existe
    if (
      movies.some((movie) => movie.title.toLowerCase() === title.toLowerCase())
    ) {
      alert("La película ya ha sido añadida previamente.");
      return;
    }

    // Obtener datos desde la API
    const movieData = await fetchMovieData(title);
    const movie = {
      title,
      rating,
      review,
      posterUrl:
        movieData.Poster !== "N/A" ? movieData.Poster : "placeholder.png",
    };

    // Guardar la película y actualizar la lista
    movies.unshift(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovie(movie);

    // Limpiar el formulario
    document.getElementById("add-movie-form").reset();
  });

// === Mostrar todas las películas al cargar la página ===
function displayMovies() {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  movieList.innerHTML = ""; // Limpiar lista antes de mostrar
  movies.forEach(displayMovie);
}

// === Mostrar una película individual ===
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

  async function fetchPopularMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`
    );
    const data = await response.json();
    data.results.forEach((movie) => displayMovie(movie));
  }

  // Añadir a favoritos
  movieDiv
    .querySelector(".favorite-btn")
    .addEventListener("click", function () {
      this.classList.toggle("favorite");
      const isFavorite = this.classList.contains("favorite");
      this.textContent = isFavorite ? "<3" : "Añadir a Favoritos";

      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (isFavorite) {
        favorites.push(movie.title);
      } else {
        favorites = favorites.filter((title) => title !== movie.title);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });

  // Eliminar película
  movieDiv.querySelector(".delete-btn").addEventListener("click", () => {
    movieDiv.remove();

    // Actualizar localStorage
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    const updatedMovies = movies.filter((m) => m.title !== movie.title);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  });

  // Insertar al principio de la lista
  movieList.insertBefore(movieDiv, movieList.firstChild);
}

// === Filtrar películas por búsqueda ===
document.getElementById("search-bar").addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  filterMovies(searchTerm);
});

// Filtrar y mostrar las películas que coincidan con la búsqueda
function filterMovies(searchTerm) {
  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  movieList.innerHTML = ""; // Limpiar lista
  filteredMovies.forEach(displayMovie); // Mostrar películas filtradas
}



// === Inicialización: cargar todas las películas al inicio ===
window.addEventListener("load", displayMovies);
