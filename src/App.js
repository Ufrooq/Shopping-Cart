import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import "./App.css";
import ItemsList from "./components/ItemsList";
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/list" element={<ItemsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
