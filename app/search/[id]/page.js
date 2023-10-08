"use client"
import SearchResult from "@/components/SearchResult";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchMovie = ({ params }) => {
  const router = useRouter();
  const [search, setSearch] = useState(params.id);
  const [searchData, setSearchData] = useState([]);

  const searchMovieData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${search}&api_key=11eafabab15fc91d50417227c788a542`
      );
      setSearchData(data.results);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    searchMovieData();
  }, [search]);

  return (
    <>
      <div className="text-white">
        <div className="container mx-auto py-8 px-4 text-black">
          {searchData.length === 0 ? (
            <p>No content found.</p>
          ) : (
            searchData.map((movie, index) => <SearchResult movie={movie} />)
          )}
        </div>
      </div>
    </>
  )
}


export default SearchMovie;