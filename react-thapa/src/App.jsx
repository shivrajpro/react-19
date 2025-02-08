export const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src="qot.jpg" alt="qot" height="40%" width="40%" />
      </div>
      <h2>Name: Queen of Tears</h2>
      <h3>Rating: 8.2</h3>
      <p>
        Summary: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Labore culpa enim esse id reprehenderit perferendis ipsa aperiam
        necessitatibus cumque ad!{" "}
      </p>
    </div>
  );
};

// console.log(React.createElement("h1", null, "hello, thapa technical"));
