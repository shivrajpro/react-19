import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import "./components/NetflixSeries.css";

export const App = () => {
  return (
    <section className="container">
      {/* <Header /> */}
      {/* <Profile /> */}
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <NetflixSeries />
      {/* <Footer /> */}
    </section>
  );
};

// console.log(React.createElement("h1", null, "hello, thapa technical"));
