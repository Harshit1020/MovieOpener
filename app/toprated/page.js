"use client"
import React, { useState, useEffect } from 'react';
import axios from '@/utiles/axios';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchTopRatedMovies = async () => {
    setLoading(true);
    try {
      const {data} = await axios.get(
        `/movie/top_rated?api_key=fb48a2d1a4cddbf4935e7af54a8d8f21&page=${page}`
      );
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setTopRatedMovies([ ...topRatedMovies,...data.results]);
        setPage(page + 1);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []); 

  return (
    <div className='container my-5'>
    <InfiniteScroll
          dataLength={topRatedMovies.length}
          next={fetchTopRatedMovies}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
      <div className="my-5">
      <h4 className='mx-3 text-2xl'>Popular Movies</h4>
      <div className="flex flex-wrap gap-7">
          {topRatedMovies.map((movie) => (
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
    </InfiniteScroll>
      {loading && <h3>Loading........</h3>}
  </div>
  );
};

export default TopRatedMovies;
