//export const NetflixSeries = () => { //named export, use curly braces to import
const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "8.2";
  const summary = `Summary: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Labore culpa enim esse id reprehenderit perferendis ipsa aperiam
          necessitatibus cumque ad!`;

  const getGenre = () => {
    const genre = "RomCom";
    return genre;
  };

  const age = 16;

  return (
    <div>
      <div>
        <img src="qot.jpg" alt="qot" height="40%" width="40%" />
      </div>
      <h2>Name: {name} </h2>
      <h3>Rating:{rating}</h3>
      <p> {summary} </p>
      <p>Genre: {getGenre()} </p>
      <button> {age >= 18 ? "Watch Now" : "Not Available"} </button>
    </div>
  );
};

export default NetflixSeries;

export const Header = () => {
  return <p>copyright @thapatechnical</p>;
};

export const Footer = () => {
  return <p>copyright @thapatechnical</p>;
};
