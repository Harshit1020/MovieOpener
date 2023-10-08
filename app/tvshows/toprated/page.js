"use client"
import React, { useState, useEffect } from 'react';
import axios from '@/utiles/axios';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';

const TopRatedTVShows = () => {
  const [topRatedTVShows, setTopRatedTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)

  const fetchTopRatedTVShows = async () => {
    try {
      const {data} = await axios.get(
        `/tv/top_rated?api_key=fb48a2d1a4cddbf4935e7af54a8d8f21&page=${page}`
      );
        setTopRatedTVShows([...data.results]);
        setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopRatedTVShows();
  }, [page]); 
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };


  return (
    <div className='container'>
      <div className="my-5">
      <br /><br />
      <h4 className='mx-3 text-2xl my-5'>Top Rated Tv Shows</h4>
        <div className="flex flex-wrap gap-7">
          {topRatedTVShows.map((show) => (
            <Link className="no-underline text-black" href={`/tv/${show.id}`} key={show.id}>
              <div className="trending-card">
                <img
                  className="trending-card-image"
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={show.name}
                />
                <div className="trending-card-rating">
                  {Math.round(show.vote_average * 10)}%
                </div>
              </div>
              <div className="trending-card-details">
                <p className="trending-card-title">{show.name}</p>
                <h5 className='trending-card-release'>{show.first_air_date}</h5>
              </div>
            </Link>
          ))}
        </div>
        {loading && <h3>Loading........</h3>}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next>"
        onPageChange={handlePageClick}
        pageCount={10} // Update this with the actual number of pages
        previousLabel="<Prev"
        className="flex gap-7 justify-center"
      />
    </div>
  );
};

export default TopRatedTVShows;
