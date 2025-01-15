import Examples from "./components/Examples";
import CoreConcepts from "./components/Header/CoreConcepts";
import Header from "./components/Header/Header";

function App() {
  console.log("App component executing");
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </>
  );
}

export default App;
