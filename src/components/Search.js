import { Component } from "../core/Component";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.element.classList.add("search");
    this.element.innerHTML = /*html*/ `
			<input value="${movieStore.state.searchText}" placeholder='Enter the movie title to serach!'/>
			<button class='btn btn-primary'>Search!</button>
		`;

    const inputElement = this.element.querySelector("input");

    inputElement.addEventListener("input", (e) => {
      movieStore.state.searchText = inputElement.value;
    });

    inputElement.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const buttonElement = this.element.querySelector("button");

    buttonElement.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
