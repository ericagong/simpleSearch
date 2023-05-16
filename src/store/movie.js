import { Store } from "../core/Store";

const store = new Store({
  searchText: "",
  loading: false,
  page: 1,
  pageMax: 1,
  movies: [],
});

export default store;

export const searchMovies = async (page) => {
  store.state.loading = true;
  store.state.page = page;

  // 신규 검색 시 movies 초기화
  if (page === 1) {
    store.state.movies = [];
  }

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=9c3dc719&s=${store.state.searchText}&page=${page}`
  );

  const { Response, Search, totalResults } = await response.json();

  if (Response === "true") {
    store.state.movies = [...store.state.movies, ...Search];
    store.state.pageMax = Math.ceil(Number(totalResults) / 10);
  }

  store.state.loading = false;
};
