"use client"
import React, { useState, useEffect } from 'react';
import axios from '@/utiles/axios';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import css from "./page.module.css"

const PopularTVShows = () => {
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchPopularTVShows = async () => {
    try {
      const { data } = await axios.get(
        `/tv/popular?api_key=fb48a2d1a4cddbf4935e7af54a8d8f21&page=${page}`
      );
      setPopularTVShows(data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPopularTVShows();
  }, [page]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <div className='container'>
      <div className="my-5">
      <br /><br />
      <h4 className='mx-3 text-2xl my-5'>Popular Tv Shows</h4>
        <div className="flex flex-wrap gap-7">
          {popularTVShows.map((show) => (
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

export default PopularTVShows;
