"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Search from "./Search";
const Navbar = () => {
return (
    <div className="containe abc d-flex p-3">
      <div className="nav">
      <h5 className="mx-5"><Link className="text-white no-underline" href="/">Movie Opener</Link></h5>
        <div className="dropdown">
          <button className="mx-4">Movies</button>
          <div className="dropdown-content">
           
              <Link href="/popular">Popular</Link>
           
           
              <Link href="/nowplaying">Now Playing</Link>
           
           
              <Link href="/upcoming">Upcoming</Link>

           
              <Link href="/toprated">Top Rated</Link>
           
          </div>
        </div>
        <div className="dropdown">
          <button className=" mx-4">Tv Shows</button>
          <div className="dropdown-content">
           
              <Link href="/tvshows/popular">Popular</Link>
           
           
              <Link href="/tvshows/airingtoday">Airing Today</Link>
           
           
              <Link href="/tvshows/ontv">ON Tv</Link>
           
           
              <Link href="/tvshows/toprated">Top Rated</Link>
           
          </div>
        </div>
      </div>
     <Search/>
    </div>
  );
};

export default Navbar;
