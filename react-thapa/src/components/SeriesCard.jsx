const SeriesCard = ({ series }) => {
  return (
    <li key={series.id}>
      <div>
        <img src={series.img_url} alt={series.name} height="40%" width="40%" />
      </div>
      <h2>Name: {series.name} </h2>
      <h3>Rating:{series.rating}</h3>
      <p>Summary: {series.description} </p>
      <p>Genre: {series.genre} </p>
      <p>Cast: {series.cast} </p>
      <a href={series.watch_url} target="_blank">
        Watch Now
      </a>
    </li>
  );
};

export default SeriesCard;
