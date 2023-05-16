import { Component } from "../core/Component";
import messageStore from "../store/message";

export default class Title extends Component {
  constructor() {
    super({
      tagName: "h1",
    });

    messageStore.subscribe("message", (newVal) => {
      console.log("subscribe callback from Title Component", newVal);
      this.render();
    });
  }

  render() {
    this.element.textContent = `Title: ${messageStore.state.message}`;
  }
}
