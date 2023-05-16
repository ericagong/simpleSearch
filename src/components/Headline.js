import { Component } from "../core/Component";

export default class Headline extends Component {
  render() {
    this.element.classList.add("headline");

    this.element.innerHTML = /*html*/ `
			<h1>
				<span>OMDb API</span><br>
				THE OPEN<br>
				MOVIE DATABASE
			</h1>
			<p>
				The OMDb API is a RESTful web service to obtain movie information,<br>
				all content and images on the site are contributed and maintained by our users.<br>
				If you find this service useful, please consider making a one-time donation or become a patron.
			</P>
		`;
  }
}
