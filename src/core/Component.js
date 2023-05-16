/**
 * Component
 */

export class Component {
  constructor(payload = {}) {
    const { tagName = "div", state = {}, props = {} } = payload;
    this.element = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }

  // 확장 사용시 render 함수 작성
  render() {
    // ...
  }
}
