import "./App.css";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/index.js";

function App() {
  return (
    <div>
      <Navbar>
        <CartWidget numberOfItems={0}></CartWidget>
      </Navbar>
      <ItemListContainer greetings={"Welcome to Morai store"} />
    </div>
  );
}

export default App;
