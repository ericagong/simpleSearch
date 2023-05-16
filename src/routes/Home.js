import { Component } from "../core/Component";
import TextField from "../components/TextField";
import Message from "../components/Message";
import Title from "../components/Title";

export default class Home extends Component {
  render() {
    this.element.innerHTML = /*html*/ `
			<h1>Home</h1>
		`;

    this.element.append(
      new TextField().element,
      new Message().element,
      new Title().element
    );
  }
}
