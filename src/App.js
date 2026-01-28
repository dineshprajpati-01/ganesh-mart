// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Mart from "./componets/Mart";
import { Provider } from "react-redux";
import store from "./store";
import Product from "./componets/Product";
import Cart from "./componets/Cart";
// import Productdetalis from " ./componets/productdetalis";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        <Routes>
          <Route path="/" element={<Mart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="product/:id" element={<Product/>} />
          <Route path="Cart" element={<Cart/>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
