//export const NetflixSeries = () => { //named export, use curly braces to import

import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((series) => {
        return (
          <li key={series.name}>
            <div>
              <img
                src={series.img_url}
                alt={series.name}
                height="40%"
                width="40%"
              />
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
      })}
    </ul>
  );
};

export default NetflixSeries;

export const Header = () => {
  return <p>copyright @thapatechnical</p>;
};

export const Footer = () => {
  return <p>copyright @thapatechnical</p>;
};
