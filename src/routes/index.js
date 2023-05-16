import { createRouter } from "../core/Router";
import Home from "./Home";
import About from "./About";

/**
 * createRouter: 경로에 맞는 컴포넌트 객체 배열 반환
 */
export default createRouter([
  {
    path: "#/",
    component: Home,
  },
  {
    path: "#/about",
    component: About,
  },
]);
