import { Component } from "../core/Component";

export default class FtuitItem extends Component {
  constructor(payload) {
    super({
      tagName: "li",
      props: payload.props,
    });
  }

  render() {
    this.element.innerHTML = `
		<li>
			<span>${this.props.name}</span>
			<span>${this.props.price}</span>
		</li>
		`;

    this.element.addEventListener("click", () => {
      console.log(this.props.name, this.props.price);
    });
  }
}
