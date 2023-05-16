import { Component } from "../core/Component";
import messageStore from "../store/message";

export default class TextField extends Component {
  render() {
    this.element.innerHTML = /* html */ `
			<input value='${messageStore.state.message}'/>
		`;

    const inputElement = this.element.querySelector("input");

    inputElement.addEventListener("input", () => {
      messageStore.state.message = inputElement.value;
    });
  }
}
