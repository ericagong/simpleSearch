import { Component } from "../core/Component";

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header",
    });
  }

  render() {
    this.element.innerHTML = /* html */ `	
			<a href='#/'/>Main</a>
			<a href='#/about'/>About</a>
		`;
  }
}
