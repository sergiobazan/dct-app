import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Pagination } from "./Pagination";
import client from "../axios";

export const Main = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      const { data } = await client.get(`movies/?page=${currentPage}`);
      setMovies(data.results);
      setTotal(data.count);
    })();
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
        {movies.length > 0 &&
          filterMovies().map((movie, i) => (
            <Card key={movie.title + i} movie={movie} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        total={total}
        limit={10}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
