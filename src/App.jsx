import { useState } from "react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <nav className="navbar">
        <h2 onClick={() => setPage("home")}>Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("plants")}>Plants</button>
          <button onClick={() => setPage("cart")}>Cart</button>
        </div>
      </nav>

      {page === "home" && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <h2>Bring Nature Into Your Home</h2>

            <p>
              Discover beautiful houseplants and bring a touch of
              nature into your living space.
            </p>

            <button
              className="get-started"
              onClick={() => setPage("plants")}
            >
              Get Started
            </button>

            <button
              className="about-button"
              onClick={() => setPage("about")}
            >
              About Us
            </button>
          </div>
        </div>
      )}

      {page === "about" && <AboutUs />}

      {page === "plants" && (
        <ProductList onCartClick={() => setPage("cart")} />
      )}

      {page === "cart" && (
        <CartItem onContinueShopping={() => setPage("plants")} />
      )}
    </div>
  );
}

export default App;