import axios from "axios";
import { API_BASE_URL, API_KEY, IMAGE_BASE_URL } from "lib/constants";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Movie } from "types/Movie";
import styles from "styles/Row.module.scss";
import YouTube from "react-youtube";
import { Detail } from "./Detail";
import { Detail as DetailProps } from "types/Detail";
const movieTrailer = require("movie-trailer");

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row: FC<Props> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [thisMovie, setthisMovie] = useState<DetailProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(API_BASE_URL + fetchUrl);
      const res = req.data.results;
      setMovies(res);
      return req;
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie: Movie) => {
    console.log("CLICKED MOVIE", movie);
    if (thisMovie) {
      setthisMovie(null);
      return;
    }
    try {
      const req = await axios.get(API_BASE_URL + `/movie/${movie.id}/videos?api_key=${API_KEY}`);
      const res =
        req.data.results.find((res: any) => res.site === "YouTube" && res.official) ?? null;
      console.log("TRAILER RESULT", res);
      const params = res?.key ? { movie, trailerId: res.key } : { movie, trailerId: undefined };
      setthisMovie(params);
    } catch (e) {
      console.log(e);
      setthisMovie({ movie, trailerId: undefined });
    }
  };

  return (
    <div className="ml-5 mb-5">
      <h2 className="text-lg text-bold text-white">{title}</h2>
      <div className={`flex overflow-x-scroll overflow-y-hidden ${styles.posters}`}>
        {movies.map((movie) => {
          return (
            <div className={`p-2 ${styles.poster}`} key={movie.id}>
              <Image
                src={IMAGE_BASE_URL + movie.poster_path}
                alt={movie.original_title}
                layout="fixed"
                width={125}
                height={188}
                onClick={() => handleClick(movie)}
              />
            </div>
          );
        })}
      </div>
      {thisMovie && <Detail movie={thisMovie.movie} trailerId={thisMovie.trailerId} />}
    </div>
  );
};
