import { Component } from "../core/Component";
import aboutStore from "../store/about";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    const { repository, github } = aboutStore.state;
    this.element.innerHTML = /* html */ `
      <div>
        <a href="${repository}">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()}
          Erica Gong
        </a>
      </div>
    `;
  }
}
