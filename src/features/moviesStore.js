import { create } from "zustand";

const useMovieStore = create((set) => ({
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
  setMovies: (movies) => set(() => ({ ...movies })),
  selectRecommend: (state) => state.recommend,
  selectNewDisney: (state) => state.newDisney,
  selectOriginal: (state) => state.original,
  selectTrending: (state) => state.trending,
}));

export default useMovieStore;
