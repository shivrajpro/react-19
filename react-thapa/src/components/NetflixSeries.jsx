//export const NetflixSeries = () => { //named export, use curly braces to import

import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three-cols">
      {seriesData.map((series) => {
        return <SeriesCard key={series.id} series={series} />;
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
