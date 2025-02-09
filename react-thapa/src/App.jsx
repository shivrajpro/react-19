import NetflixSeries, { Header, Footer } from "./components/NetflixSeries";

export const App = () => {
  return (
    <>
      <Header />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer />
    </>
  );
};

// console.log(React.createElement("h1", null, "hello, thapa technical"));
