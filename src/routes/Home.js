import { Component } from "../core/Component";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";

export default class Home extends Component {
  render() {
    this.element.innerHTML = /*html*/ `
			<h1>Home</h1>
		`;

    this.element.classList.add("container");
    this.element.append(
      new Headline().element,
      new Search().element,
      new MovieList().element
    );
  }
}
