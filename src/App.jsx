import React from "react";
import { Nav, Hero, Editor, Phones, Laptop } from "./components";
const App = () => {
  return (
    <article>
      <div className="hero flex flex-col">
        <div>
          <Nav />
          <Hero />
        </div>
      </div>
      <Editor />
      <Phones />
      <Laptop />
    </article>
  );
};

export default App;
