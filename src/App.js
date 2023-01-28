import "./App.css";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar/index.js";

function App() {
  return (
    <div>
      <div>
        <Navbar>
          <CartWidget numberOfItems={1}></CartWidget>
        </Navbar>
        <ItemListContainer greetings={"Welcome to Morai store"} />
      </div>
    </div>
  );
}

export default App;
