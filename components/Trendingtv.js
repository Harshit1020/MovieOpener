import React, { useEffect, useState, useRef } from 'react';
import axios from '@/utiles/axios';
import Link from 'next/link';

const Trendingtv = () => {
  const [tvShows, setTVShows] = useState([]);
  const getTVShows = async () => {
    try {
      const { data } = await axios.get('tv/on_the_air?api_key=fb48a2d1a4cddbf4935e7af54a8d8f21');
      setTVShows(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTVShows();
  }, []);

  return (
    <div className='container mt-5'>
      <h4 className='mx-3'>Trending TV Shows</h4>
      <div className="trending-card-scroll-container w-96">
        <div className="trending-card-scroll">
          {tvShows.map((tvShow) => (
            <Link className="no-underline text-black" href={`/tv/${tvShow.id}`}>
            <div className="trending-card" key={tvShow.id}>
              <div className="trending-card-inner">
                <img
                  className="trending-card-image"
                  src={`https://image.tmdb.org/t/p/w300${tvShow.poster_path}`}
                  alt={tvShow.name}
                />
                <div className="trending-card-rating">
                  {Math.round(tvShow.vote_average * 10)}%
                </div>
              </div>
              <div className="trending-card-details">
                <p className="trending-card-title">{tvShow.name}</p>
                <h5 className='trending-card-release'>{tvShow.first_air_date}</h5>
               
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trendingtv;
