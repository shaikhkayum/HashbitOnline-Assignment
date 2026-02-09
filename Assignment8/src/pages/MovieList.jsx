import React from 'react';
import { useNavigate } from 'react-router-dom';
import './movie-list.css';

const movies = [
  { id: 1, title: "Interstellar", rating: "8.7/10", lang: "English", duration: "2h 49m", genre: "Sci-Fi", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/interstellar-et00019066-19-02-2021-02-25-12.jpg" },
  { id: 2, title: "Inception", rating: "8.8/10", lang: "English", duration: "2h 28m", genre: "Action", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/inception-et00004883-03-02-2021-07-04-48.jpg" },
  { id: 3, title: "The Dark Knight", rating: "9.0/10", lang: "English", duration: "2h 32m", genre: "Crime", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-dark-knight-et00001549-1751873478.jpg" },
  { id: 4, title: "Oppenheimer", rating: "8.4/10", lang: "English", duration: "3h 00m", genre: "Drama", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/oppenheimer-et00347867-1700808846.jpg" },
  { id: 5, title: "Avengers: Endgame", rating: "8.4/10", lang: "English", duration: "3h 01m", genre: "Action", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-endgame-et00100559-09-04-2019-05-19-52.jpg" },
  { id: 6, title: "Avengers: Infinity War", rating: "8.4/10", lang: "English", duration: "2h 29m", genre: "Adventure", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-infinity-war-et00053419-11-02-2017-08-16-41.jpg" },
  { id: 7, title: "Avatar", rating: "7.9/10", lang: "English", duration: "2h 42m", genre: "Fantasy", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00407893-lxshcwaazn-portrait.jpg" },
  { id: 8, title: "Bullet Train", rating: "7.3/10", lang: "English", duration: "2h 06m", genre: "Comedy", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bullet-train-et00323946-13-06-2022-11-58-42.jpg" },
];

function MovieList() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="header-flex">
        <h2 className="heading">Recommended Movies</h2>
        <span className="see-all">See All ›</span>
      </div>

      <div className="movie-grid">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <div className="movie-image-container">
              <img
                src={movie.img}
                alt={movie.title}
                className="movie-image"
              />
              <div className="rating-strip">
                <span className="star-icon">⭐</span> {movie.rating}
              </div>
            </div>

            <div className="movie-info">
              <p className="movie-title">{movie.title}</p>
              <p className="movie-genre">{movie.genre}</p>
              <p className="movie-meta">{movie.lang} • {movie.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;