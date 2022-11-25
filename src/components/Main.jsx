import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Pagination } from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/actions";

export const Main = ({ title }) => {
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.movieReducer.movies);
  const { results: movies, count: total } = moviesData;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getMovies(currentPage));
  }, [currentPage]);

  const filterMovies = () => {
    return movies.filter((movie) => {
      if (title === "") {
        return movie;
      } else if (movie.title.toLowerCase().includes(title.toLowerCase())) {
        return movie;
      }
    });
  };

  return (
    <div className="main">
      <h1 className="main-title">Popular Movies</h1>
      <div className="main-container">
        {movies?.length > 0 &&
          filterMovies().map((movie, i) => (
            <Card key={movie.title + i} movie={movie} />
          ))}
      </div>
      {movies?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          total={total}
          limit={10}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};
