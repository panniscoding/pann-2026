import React from "react";
import Portfolio from "./portfolio";
import HamburgerMenu from "./HamburgerMenu";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <HamburgerMenu />
      </header>
      <Portfolio />
      <footer>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          class="elfsight-app-9ef8b10a-b4ec-4c7d-99d3-83643181d981"
          data-elfsight-app-lazy
        ></div>
        <Footer />
      </footer>
    </div>
  );
}
