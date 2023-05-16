import { Component } from "../core/Component";
import movieStore, { searchMovies } from "../store/movie";

export default class More extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("pageMax", () => {
      const { page, pageMax } = movieStore.state;
      // 최대 페이지 수보다 작으면 더 보기 버튼을 보여주고, 그렇지 않으면 숨김
      page < pageMax
        ? this.element.classList.remove("hide")
        : this.element.classList.add("hide");
    });
  }

  render() {
    // hide 속성 추가로 맨 처음에는 숨겨진 상태로 렌더링
    this.element.classList.add("btn", "view-more", "hide");
    this.element.textContent = "View more...";

    this.element.addEventListener("click", async () => {
      this.element.classList.add("hide"); // 사용자 중복 클릭 방지를 위해 더보기 버튼 숨김
      movieStore.state.page += 1;
      await searchMovies(movieStore.state.page);
    });
  }
}
