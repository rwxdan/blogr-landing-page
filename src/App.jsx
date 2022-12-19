import React from "react";
import { Nav, Hero } from "./components";
const App = () => {
  return (
    <article>
      <div className="hero flex flex-col">
        <div>
          <Nav />
          <Hero />
        </div>
      </div>
    </article>
  );
};

export default App;
