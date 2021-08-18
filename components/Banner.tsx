import axios from "axios";
import { API_BASE_URL, IMAGE_BASE_URL } from "lib/constants";
import { requests } from "lib/requests";
import { FC, useEffect, useState } from "react";
import { Movie } from "types/Movie";
import styles from "styles/components/Banner.module.scss";
import Image from "next/image";
import { truncate } from "lib/util";

export const Banner: FC = () => {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(API_BASE_URL + requests.fetchNetflixOriginals);
      console.log(request.data.results);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    };
    fetchData();
  }, []);

  return (
    <header className={styles.wrapper}>
      <Image
        src={IMAGE_BASE_URL + movie?.backdrop_path}
        alt={movie?.original_name}
        layout="fill"
        objectFit="cover"
        objectPosition="50% 20%"
        priority={true}
      />
      <div className={styles.child}>
        <div className="">
          <h1 className={styles.title}>
            {movie?.name || movie?.original_name || movie?.original_title}
          </h1>
          <div className={styles.buttons}>
            <button className={styles.button}>Play</button>
            <button className={styles.button}>My List</button>
          </div>

          <h1 className={styles.overview}>{truncate(movie?.overview, 150)}</h1>
        </div>
      </div>
      <div className={styles.fadeWrapper}>
        <div className={styles.fadeBottom} />
      </div>
    </header>
  );
};
