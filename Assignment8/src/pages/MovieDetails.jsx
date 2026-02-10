import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './movie-details.css';

const movies = [
  { id: 1, title: "Interstellar", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/interstellar-et00019066-19-02-2021-02-25-12.jpg" },
  { id: 2, title: "Inception", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/inception-et00004883-03-02-2021-07-04-48.jpg" },
  { id: 3, title: "The Dark Knight", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-dark-knight-et00001549-1751873478.jpg" },
  { id: 4, title: "Oppenheimer", img: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/oppenheimer-et00347867-1700808846.jpg" },
  { id: 5, title: "Avengers: Endgame", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-endgame-et00100559-09-04-2019-05-19-52.jpg" },
  { id: 6, title: "Avengers: Infinity War", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/avengers-infinity-war-et00053419-11-02-2017-08-16-41.jpg" },
  { id: 7, title: "Avatar", img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00407893-lxshcwaazn-portrait.jpg" },
  { id: 8, title: "Bullet Train", img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bullet-train-et00323946-13-06-2022-11-58-42.jpg" }
];

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seats, setSeats] = useState("");

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div className="error"><h2>Movie not found!</h2></div>;

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setSeats(value);
    }
  };

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      
      <div className="simple-card">
        <img src={movie.img} alt={movie.title} className="detail-poster" />
        
        <div className="booking-section">
          <h1>{movie.title}</h1>
          
          <div className="input-group">
            <label htmlFor="ticket-qty">Number of Tickets:</label>
            <input 
              id="ticket-qty"
              type="text" 
              className="simple-text-box"
              value={seats}
              onChange={handleInputChange}
              placeholder="Enter quantity (e.g. 2)" 
            />
          </div>

          <button 
            className="book-now-btn"
            disabled={!seats || seats === "0"}
            onClick={() => navigate(`/book/${id}`, { state: { movieTitle: movie.title, seats: seats } })}
          >
            {seats && seats !== "0" ? `Book ${seats} Ticket(s)` : "Enter Ticket Amount"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;