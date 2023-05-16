import { Component } from "../core/Component";

export default class NotFound extends Component {
  render() {
    this.element.classList.add("container", "not-found");

    this.element.innerHTML = /* html */ `
      <h1>
        Sorry..<br />
        Page Not Found.
      </h1>
    `;
  }
}
