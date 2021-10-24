import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <TextForm heading="Enter the text to analzye:" />
    </>
  );
}

export default App;
