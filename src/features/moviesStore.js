import { create } from "zustand";

const useMovieStore = create((set) => ({
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
  setMovies: (movies) => set(() => ({ ...movies })),
}));

export const selectRecommend = (state) => state.recommend;
export const selectNewDisney = (state) => state.newDisney;
export const selectOriginal = (state) => state.original;
export const selectTrending = (state) => state.trending;

export default useMovieStore;
