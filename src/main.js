import App from "./App";
import router from "./routes";

const root = document.querySelector("#root");
root.append(new App().element);

router(); // page 정의 이후 router 사용해 경로별 렌더링 수행
