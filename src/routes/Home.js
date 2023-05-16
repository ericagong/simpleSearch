import { Component } from "../core/Component";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import More from "../components/More";

export default class Home extends Component {
  render() {
    this.element.classList.add("container");
    this.element.append(
      new Headline().element,
      new Search().element,
      new MovieList().element,
      new More().element
    );
  }
}
