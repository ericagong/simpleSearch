import { Component } from "../core/Component";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
  }

  render() {
    this.element.classList.add("movie-list");
    this.element.innerHTML = /*html*/ `
			<div class="movies"></div>
		`;

    const moviesElement = this.element.querySelector(".movies");
    moviesElement.append(
      ...movieStore.state.movies.map(
        (movie) => new MovieItem({ movie }).element
      )
    );
  }
}
