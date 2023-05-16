import { Component } from "../core/Component";
import messageStore from "../store/message";

export default class Message extends Component {
  constructor() {
    super();
    messageStore.subscribe("message", (newVal) => {
      console.log("subscribe callback from Message Component", newVal);
      this.render();
    });
  }

  render() {
    this.element.innerHTML = /* html */ `
			<h2 class="message">
				${messageStore.state.message}
			</h2>
		`;
  }
}
