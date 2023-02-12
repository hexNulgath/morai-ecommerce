import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/index.js";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <ItemListContainer greetings={"Welcome to Morai store"} />
      </div>
    </div>
  );
}

export default App;
