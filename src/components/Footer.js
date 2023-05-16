import { Component } from "../core/Component";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.element.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/ericagong/simpleSearch">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/ericagong">
          ${new Date().getFullYear()}
          Erica Gong
        </a>
      </div>
    `;
  }
}
