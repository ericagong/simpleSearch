import { Store } from "../core/Store";

const store = new Store({
  searchText: "",
  loading: false,
  page: 1,
  pageMax: 1,
  movies: [],
  message: "Search for the movie title!",
});

export default store;

export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;

  // 신규 검색 시 movies 초기화
  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }

  // 서버 요청은 항상 try... catch... 처리
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=9c3dc719&s=${store.state.searchText}&page=${page}`
    );

    const { Response, Search, totalResults, Error } = await response.json();

    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.pageMax = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (error) {
    console.log("searchMovies error: ", error);
  } finally {
    store.state.loading = false;
  }
};
