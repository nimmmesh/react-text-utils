import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <TextForm heading="Enter the text to analzye:" />
      {/* <About /> */}
    </>
  );
}

export default App;
