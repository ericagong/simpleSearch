/**
 * routeRender
 * @description 현재 주소와 일치하는 컴포넌트를 현재 페이지에 렌더링
 * @param {array} routes {path, component} 형태로 구성된 배열
 * @return {undefined}
 */
function routeRender(routes) {
  if (!location.hash) {
    history.replaceState(null, "", "/#/"); // history에 기록 남기지 않음
  }

  const routerView = document.querySelector("router-view");
  const [hash, queryString = ""] = location.hash.split("?");

  // a=123&b=456
  // ['a=123', 'b=456']
  // {a: '123', b: '456'}
  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});

  history.replaceState(query, "");

  const currentRoute = routes.find((route) =>
    new RegExp(`${route.path}/?$`).test(hash)
  );

  routerView.innerHTML = "";
  routerView.append(new currentRoute.component().element);

  window.scrollTo(0, 0); // 페이지 최상단으로 이동
}

/**
 * createRouter
 * @description routes 배열에 맞는 컴포넌트를 렌더링 할 수 있는 함수를 반환
 * @param {array} routes  {path, component} 형태로 구성된 배열
 * @return {function} route rendering 수행하는 함수 반환
 */

export function createRouter(routes) {
  return function () {
    window.addEventListener("popstate", () => {
      routeRender(routes);
    });
    routeRender(routes);
  };
}
