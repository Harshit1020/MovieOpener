"use client"
import { getSingle } from '@/utiles/getSingle';
import React, { useEffect, useState } from 'react';

const MovieDetailPage = ({ params }) => {
  const [singleMovie, setSingleMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerError, setTrailerError] = useState(false);

  const getSingleMovieData = async () => {
    try {
      const movieData = await getSingle(params.id);
      setSingleMovie(movieData);
      console.log(movieData);

      // Fetch movie videos to get the trailer key
      const videoResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=fb48a2d1a4cddbf4935e7af54a8d8f21`
      );
      const videoData = await videoResponse.json();

      // Check if there is a trailer available
      const trailer = videoData.results.find(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );

      if (trailer) {
        setTrailerKey(trailer.key);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleMovieData();
  }, [params.id]);

  const openTrailer = () => {
    setShowTrailer(true);
  };

  const closeTrailer = () => {
    setShowTrailer(false);
  };

  const handleTrailerError = () => {
    setTrailerError(true);
  };

  const backgroundStyle = {
    position: 'absolute',
    top: '10%',
    left: '10%',
    color :"#fff",
    backgroundColor: '#1b174c', // Background color
    backgroundImage: singleMovie
      ? `url(https://image.tmdb.org/t/p/original${singleMovie.backdrop_path})`
      : '',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: "100%"
  };


  return (
    <div className="container w-100 text-white mt-3" style={backgroundStyle}>
      {singleMovie ? (
        <div className="container text-white mx-auto my-10 p-4">
          <div className="flex">
            <div className="w-1/4">
              <img
                src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
                alt={singleMovie.original_title}
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-2/3 ml-4">
            <h1 className="text-4xl font-semibold mb-2">{singleMovie.original_title}</h1>
              <p className="text-white-900">{singleMovie.release_date}</p>
              <p className="text-white-900 mt-2">{singleMovie.overview}</p>
              <div className="mt-4">
                <p className="text-white font-semibold">TV-14</p>
              </div>
              <div className="mt-4">
                <p className="text-white">User Score</p>
                <div className="flex items-center mt-2">
                  <div className="rounded-full bg-yellow-400 w-20 h-10 flex items-center justify-center mr-2">
                    <span className="text-black font-semibold">
                      {singleMovie.vote_average}
                    </span>
                  </div>
                  <button className="btn btn-info" onClick={openTrailer}>
                    Play Trailer
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-white font-semibold">Overview</p>
                <p className="text-white mt-2">{singleMovie.overview}</p>
              </div>
              {/* <div className="mt-4">
                <p className="text-gray-600 font-semibold">Creators</p>
              </div> */}
              {showTrailer && (
                <div className="fixed h-100 inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="relative max-w-screen-lg w-full">
                    <button
                      className="absolute top-80 btn btn-info mx-0 text-white text-2xl"
                      onClick={closeTrailer}
                    >
                      &#215;
                    </button>
                    <div className="relative w-full aspect-h-5 aspect-w-5">
                      {trailerError ? (
                        <p className="text-red-500">An error occurred. Please try again later.</p>
                      ) : (
                        <iframe
                          title="Movie Trailer"
                          width="960"
                          height="315"
                          src={`https://www.youtube.com/embed/${trailerKey}`}
                          frameBorder="0"
                          allowFullScreen
                          onError={handleTrailerError}
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
