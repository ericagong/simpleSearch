import { Component } from "../core/Component";

export default class About extends Component {
  render() {
    this.element.innerHTML = /*html*/ `
			<h1>About</h1>
			<ul>
				${Object.values(history.state)
          .map((query) => `<li>${query}</li>`)
          .join("")} 
			</ul>
		`;
  }
}
