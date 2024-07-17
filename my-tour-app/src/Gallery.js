//U2256170

import React, {useContext, useState} from 'react';
import {TourContext} from './App';
import './Gallery.css';

const Gallery = () => {
  const { tours, setTours } = useContext(TourContext);
  const [expanded, setExpanded] = useState({});

  const handleNotInterested = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (tours.length === 0) {
    return <h2>No tours available</h2>;
  }

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <div key={tour.id} className="tour">
          <h2>{tour.name}</h2>
          <p>{tour.info.substring(0, 100)}...</p>
          {expanded[tour.id] && <p>{tour.info}</p>}
          <button onClick={() => toggleReadMore(tour.id)}>
            {expanded[tour.id] ? 'Show Less' : 'Read More'}
          </button>
          <button onClick={() => handleNotInterested(tour.id)}>Not Interested</button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
