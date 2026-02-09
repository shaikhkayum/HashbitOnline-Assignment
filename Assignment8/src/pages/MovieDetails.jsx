import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './movie-details.css';

const movies = [
  { id: 1, title: "Interstellar", rating: "8.7/10", lang: "English", duration: "2h 49m", genre: "Sci-Fi, Drama", releaseDate: "Nov 7, 2014", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/interstellar-et00019066-19-02-2021-02-25-12.jpg", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { id: 2, title: "Inception", rating: "8.8/10", lang: "English", duration: "2h 28m", genre: "Action, Sci-Fi", releaseDate: "Jul 16, 2010", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/inception-et00004883-03-02-2021-07-04-48.jpg", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O." },
  { id: 3, title: "The Dark Knight", rating: "9.0/10", lang: "English", duration: "2h 32m", genre: "Action, Crime, Drama", releaseDate: "Jul 18, 2008", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-dark-knight-et00001549-1751873478.jpg", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
  { id: 4, title: "Oppenheimer", rating: "8.4/10", lang: "English", duration: "3h 00m", genre: "Biography, Drama, History", releaseDate: "Jul 21, 2023", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/oppenheimer-et00347867-1700808846.jpg", desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb." },
  { id: 5, title: "Avengers: Endgame", rating: "8.4/10", lang: "English", duration: "3h 01m", genre: "Action, Adventure, Sci-Fi", releaseDate: "Apr 26, 2019", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-endgame-et00100559-09-04-2019-05-19-52.jpg", desc: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to restore balance to the universe." },
  { id: 6, title: "Avengers: Infinity War", rating: "8.4/10", lang: "English", duration: "2h 29m", genre: "Action, Adventure, Sci-Fi", releaseDate: "Apr 27, 2018", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-infinity-war-et00053419-11-02-2017-08-16-41.jpg", desc: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe." },
  { id: 7, title: "Avatar", rating: "7.9/10", lang: "English", duration: "2h 42m", genre: "Action, Adventure, Fantasy", releaseDate: "Dec 18, 2009", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00407893-lxshcwaazn-portrait.jpg", desc: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home." },
  { id: 8, title: "Bullet Train", rating: "7.3/10", lang: "English", duration: "2h 06m", genre: "Action, Comedy, Thriller", releaseDate: "Aug 5, 2022", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bullet-train-et00323946-13-06-2022-11-58-42.jpg", desc: "Five assassins aboard a swiftly-moving bullet train find out their missions have something in common." }
];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState(1);

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div className="error"><h2>Movie not found!</h2></div>;

  const handleIncrement = () => { if (seats < 10) setSeats(seats + 1); };
  const handleDecrement = () => { if (seats > 1) setSeats(seats - 1); };

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      
      <div className="details-content">
        <div className="poster-section">
          <img src={movie.img} alt={movie.title} className="detail-poster" />
        </div>

        <div className="info-section">
          <h1 className="movie-title">{movie.title}</h1>
          
          <div className="meta-info">
            <span className="rating-badge">⭐ {movie.rating}</span>
            <span className="duration-badge">🕒 {movie.duration}</span>
          </div>

          <div className="quick-info">
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Language:</strong> {movie.lang}</p>
            <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          </div>
          
          <hr />

          <div className="description">
            <h3>About the Movie</h3>
            <p>{movie.desc}</p>
          </div>

          <div className="booking-card">
            <div className="seat-picker">
              <label><strong>Select Seats: </strong></label>
              <div className="counter-controls">
                <button className="cnt-btn" onClick={handleDecrement}>-</button>
                <span className="seat-count">{seats}</span>
                <button className="cnt-btn" onClick={handleIncrement}>+</button>
              </div>
            </div>

            <button 
              className="book-now-btn"
              onClick={() => navigate(`/book/${id}`, { state: { movieTitle: movie.title, seats: seats } })}
            >
              Book {seats} Seat(s)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;