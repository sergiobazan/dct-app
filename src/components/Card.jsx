export const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.images.posterArt.url} alt={movie.title} />
      <div className="card-content-container">
        <h1 className="card-content-title">{movie.title}</h1>
        <div className="card-content-hidden-container">
          <h6 className="card-content-year">{movie.releaseYear}</h6>
          <p className="card-content-description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};
