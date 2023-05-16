import { Component } from "../core/Component";

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          { name: "Search", href: "#/" },
          { name: "Movie", href: "#/movie?id=tt5311514" },
          { name: "About", href: "#/about" },
        ],
      },
    });
    // 페이지 변경 시마다 활성화 nav 변경
    window.addEventListener("popstate", () => {
      this.render();
    });
  }

  render() {
    this.element.innerHTML = /*html*/ `
			<a class="logo" href="#/">
				<span>OMDbAPI</span>.COM
			</a>
			<nav>
				<ul>
					${this.state.menus
            .map((menu) => {
              // 네비게이션 경로 일치 여부 확인
              const href = menu.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return /* html */ `
								<li>
									<a class="${isActive ? "active" : ""}" href="${menu.href}">${menu.name}</a>
								</li>
							`;
            })
            .join("")}
				</ul>
			</nav>
			<a class="user" href="#/about">
				<img src="https://w7.pngwing.com/pngs/788/774/png-transparent-league-of-legends-challenger-series-pantheon-edward-gaming-pantheon-game-fictional-character-desktop-wallpaper.png" alt="User">
			</a>
		`;
  }
}
