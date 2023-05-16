import { createRouter } from "../core/Router";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import NotFound from "./NotFound";

/**
 * createRouter: 경로에 맞는 컴포넌트 객체 배열 반환
 */
export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: Movie },
  { path: "#/about", component: About },
  { path: ".*", component: NotFound }, // 모든 정보와 매치되는 regex로 path 정보 대입 .* === .{0, }과 동일
]);
