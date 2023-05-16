import { Store } from "../core/Store";

const store = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default store;

export const searchMovies = async (page) => {
  // 신규 검색 시 page, movies 초기화
  if (page === 1) {
    store.state.page = 1;
    store.state.movies = [];
  }
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=9c3dc719&s=${store.state.searchText}&page=${page}`
  );
  const { Search } = await response.json();
  store.state.movies = [...store.state.movies, ...Search];
};
