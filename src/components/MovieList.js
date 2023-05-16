import { Component } from "../core/Component";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
    movieStore.subscribe("loading", () => {
      this.render();
    });
    movieStore.subscribe("message", () => {
      this.render();
    });
  }

  render() {
    this.element.classList.add("movie-list");
    this.element.innerHTML = /*html*/ `
			${
        movieStore.state.message
          ? `<div class="message">${movieStore.state.message}</div>`
          : '<div class="movies"></div>'
      }
			<div class="loader hide"></div>
		`;

    const moviesElement = this.element.querySelector(".movies");
    moviesElement?.append(
      ...movieStore.state.movies.map(
        (movie) => new MovieItem({ movie }).element
      )
    );

    const loaderElement = this.element.querySelector(".loader");
    movieStore.state.loading
      ? loaderElement.classList.remove("hide")
      : loaderElement.classList.add("hide");
  }
}
