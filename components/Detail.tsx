import { format, parseISO } from "date-fns";
import { IMAGE_BASE_URL } from "lib/constants";
import Image from "next/image";
import { FC } from "react";
import YouTube from "react-youtube";
import { Detail as Props } from "types/Detail";
import styles from "../styles/Detail.module.scss";

type Options = {
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Detail: FC<Props> = ({ movie, trailerId }) => {
  const opts: Options = {
    playerVars: {
      autoplay: 1,
    },
  };
  if (movie.release_date) {
    const date = parseISO(movie.release_date);
    movie.year = format(date, "yyyy");
  }
  return (
    <div className={styles.wrapper}>
      <Image
        src={IMAGE_BASE_URL + movie?.backdrop_path}
        alt={movie?.original_name}
        width={1280}
        height={512}
        layout="responsive"
        objectFit="cover"
        objectPosition="50% 20%"
        priority={true}
        className={styles.image}
      />
      <div className={styles.child}>
        <div className={styles.content}>
          <div className={styles.trailer}>
            {trailerId ? (
              <YouTube videoId={trailerId} opts={opts} />
            ) : (
              <div className={styles.noTrailer}>no</div>
            )}
          </div>
          <div className={styles.detailWrapper}>
            <h3 className={styles.title}>
              {movie?.name || movie?.original_name || movie?.original_title}
            </h3>
            {movie.year && <p className={styles.year}>{movie.year}</p>}
            <p className={styles.overview}>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
