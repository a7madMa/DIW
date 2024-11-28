const addMovieFormContainer = document.getElementById("add-movie-form-container");
const API_KEY = "42fe1355";

// Selecciona el botón y el cuerpo del documento
const toggleModeBtn = document.getElementById("toggle-mode-btn");
const body = document.body;

// Almacena el estado actual en localStorage (si existe)
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleModeBtn.textContent = "Modo Oscuro 🌙";
}

// Función para alternar entre modos
toggleModeBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Cambiar texto del botón
  if (body.classList.contains("light-mode")) {
    toggleModeBtn.textContent = "Modo Oscuro 🌙";
    localStorage.setItem("theme", "light"); // Guardar tema en localStorage
  } else {
    toggleModeBtn.textContent = "Modo Claro ☀️";
    localStorage.setItem("theme", "dark"); // Guardar tema en localStorage
  }
});




// Mostrar/ocultar el formulario de añadir película
document.getElementById("toggle-form-btn").addEventListener("click", () => {
  const isVisible = addMovieFormContainer.style.display === "block";
  addMovieFormContainer.style.display = isVisible ? "none" : "block";
  document.getElementById("toggle-form-btn").textContent = isVisible
    ? "Añadir Película 🎥"
    : "❌";
});

// Función para obtener datos de película de OMDb
async function fetchMovieData(title) {
  const response = await fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
  );
  return await response.json();
}

// Manejar el formulario de añadir película
document.getElementById("add-movie-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const title = document.getElementById("movie-title").value.trim();
  const rating = document.getElementById("movie-rating").value.trim();
  const review = document.getElementById("movie-review").value.trim();

  if (!title || !rating || !review) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Obtener la lista de películas desde localStorage
  const movies = JSON.parse(localStorage.getItem("movies")) || [];

  // Validar si la película ya existe
  const movieExists = movies.some((movie) => movie.title.toLowerCase() === title.toLowerCase());
  if (movieExists) {
    alert("La película ya ha sido añadida previamente.");
    return;
  }

  // Obtener datos de la película desde OMDb
  const movieData = await fetchMovieData(title);
  const movie = {
    title,
    rating,
    review,
    posterUrl: movieData.Poster !== "N/A" ? movieData.Poster : "placeholder.png",
  };

  // Guardar la película en localStorage
  movies.unshift(movie); // Agregar al inicio de la lista
  localStorage.setItem("movies", JSON.stringify(movies));

  // Mostrar la película y limpiar el formulario
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

  // Lógica de favorito
  movieDiv.querySelector(".favorite-btn").addEventListener("click", function () {
    this.classList.toggle("favorite");
    this.textContent = this.classList.contains("favorite") ? "<3" : "Añadir a Favoritos";
  });

  // Lógica para borrar la película
  movieDiv.querySelector(".delete-btn").addEventListener("click", () => {
    movieDiv.remove();

    // Eliminar de localStorage
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies = movies.filter((m) => m.title !== movie.title);
    localStorage.setItem("movies", JSON.stringify(movies));
  });

  // Insertar al principio de la lista
  const movieList = document.getElementById("movie-list");
  movieList.insertBefore(movieDiv, movieList.firstChild);
}

// Buscar películas por título
document.getElementById("search-bar")?.addEventListener("input", (event) => {
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

// Cargar todas las películas al inicio
window.addEventListener("load", displayMovies);
