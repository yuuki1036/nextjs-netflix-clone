import axios from "axios";
import { API_BASE_URL, IMAGE_BASE_URL } from "lib/constants";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Movie } from "types/Movie";
import styles from "styles/Row.module.scss";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row: FC<Props> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(API_BASE_URL + fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="ml-5 mb-5">
      <h2 className="text-lg text-white">{title}</h2>
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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
