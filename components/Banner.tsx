import axios from "axios";
import { API_BASE_URL, IMAGE_BASE_URL } from "lib/constants";
import { requests } from "lib/requests";
import { FC, useEffect, useState } from "react";
import { Movie } from "types/Movie";
import styles from "styles/MainVisual.module.scss";
import Image from "next/image";

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
  console.log(movie);
  const truncate = (str: any, n: number) => {
    if (str !== undefined) return str.length > n ? str?.substr(0, n - 1) + "..." : str;
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={IMAGE_BASE_URL + movie?.backdrop_path}
          alt={movie?.original_name}
          width={1280}
          height={410}
          layout="responsive"
          objectFit="cover"
          objectPosition="50% 20%"
          loading="eager"
        />
        <div className={styles.child}>
          <div className={styles.contents}>
            <h1 className={styles.title}>{movie?.original_name}</h1>
            <div className={styles.buttons}>
              <button className={styles.button}>Play</button>
              <button className={styles.button}>My List</button>
            </div>

            <h1 className={styles.description}>{truncate(movie?.overview, 150)}</h1>
          </div>
        </div>
        <div className={styles.fadeWrapper}>
          <div className={styles.fadeBottom} />
        </div>
      </div>
    </header>
  );
};
