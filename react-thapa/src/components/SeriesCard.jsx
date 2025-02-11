import styles from "./NetflixSeries.module.css";

const SeriesCard = ({ series }) => {
  const ratingClass = series.rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li key={series.id} className={styles.card}>
      <div>
        <img src={series.img_url} alt={series.name} height="40%" width="40%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name: {series.name} </h2>
        <h3>
          Rating:
          <span className={`${styles.rating} ${ratingClass}`}>
            {series.rating}
          </span>
        </h3>
        <p>Summary: {series.description} </p>
        <p>Genre: {series.genre.join(", ")} </p>
        <p>Cast: {series.cast.join(", ")} </p>
        <a href={series.watch_url} target="_blank">
          Watch Now
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
