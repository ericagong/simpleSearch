import { Component } from "./core/Component";

/**
 * App: Component 클래스를 확장, state를 선언하여 렌더링 -> 선언적 렌더링
 */
export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    const routerView = document.createElement("router-view"); // 사용자 정의 html 요소
    this.element.append(routerView);
  }
}
