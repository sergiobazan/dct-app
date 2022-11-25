export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";

export const getMovies = (currentPage) => ({
  type: GET_MOVIES,
  currentPage,
});
