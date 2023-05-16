import { Component } from "../core/Component";

export default class MovieItem extends Component {
  constructor(props) {
    super({
      tagName: "a",
      props,
    });
  }

  render() {
    const { movie } = this.props;

    this.element.classList.add("movie");

    // a 태그에 대한 경로 속성 설정
    this.element.setAttribute("href", `#/${movie.imdbID}`);
    // poster 배경 이미지 설정
    this.element.style.backgroundImage = `url(${movie.Poster})`;

    this.element.innerHTML = /*html*/ `
		<div class="info">
			<div class="year">${movie.Year}</div>
			<div class="title">${movie.Title}</div>
			</div>	
		`;
  }
}
