import React, { useEffect, useState} from 'react';
import axios from '@/utiles/axios';
import Link from 'next/link';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const { data } = await axios.get('movie/now_playing?api_key=fb48a2d1a4cddbf4935e7af54a8d8f21');
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className='container'>
      <h4 className='mx-3 text-2xl mt-5'>Trending Movies</h4>
      <div className="trending-card-scroll-container w-96">
        <div className="trending-card-scroll">
          {movies.map((movie) => (
            <Link className="no-underline text-black" href={`${movie.id}`}>
            <div className="trending-card" key={movie.id}>
              <img
                className="trending-card-image" 
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="trending-card-info">
                <p className="trending-card-title">{movie.title}</p>
                <div className="trending-card-rating">
                  {Math.round(movie.vote_average * 10)}%
                </div>
                <h5 className='trending-card-release'>{movie.release_date}</h5>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
