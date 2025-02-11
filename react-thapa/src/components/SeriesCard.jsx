import styles from "./NetflixSeries.module.css";
import styled from "styled-components";

const SeriesCard = ({ series }) => {
  const ratingClass = series.rating >= 8.5 ? styles.super_hit : styles.average;

  const ButtonThapa = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;
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
          <ButtonThapa rating={series.rating}>Watch Now</ButtonThapa>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
