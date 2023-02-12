import "./App.css";
import ItemListContainer from "./components/ItemListContainer/index.js";
import Navbar from "./components/Navbar/index.js";
import ItemCount from "./components/ItemCount/index.js";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <ItemListContainer greetings={"Welcome to Morai store"} />
        <ItemCount />
      </div>
    </div>
  );
}

export default App;
