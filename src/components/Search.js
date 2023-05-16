import { Component } from "../core/Component";

export default class Search extends Component {
  render() {
    this.element.classList.add("search");
    this.element.innerHTML = /*html*/ `
			<input placeholder='Enter the movie title to serach!'/>
			<button class='btn btn-primary'>Search!</button>
		`;

    const inputElement = this.element.querySelector("input");

    inputElement.addEventListener("input", (e) => {});
    inputElement.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
      }
    });

    const buttonElement = this.element.querySelector("button");

    buttonElement.addEventListener("click", (e) => {});
  }
}
