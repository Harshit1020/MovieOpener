"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("");
    const router  = useRouter(); 
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  
  };
  return (
     <div className="search">
      <form className="flex justify-centre gap-2" onSubmit={handleSearch}>
          <input
            className="form-control mr-sm-2 br"
            type="search"
            placeholder="Search movies , tv shows.."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-info src text-white" type="submit">
            Search
          </button>
        </form>
      </div>
  )
}

export default Search