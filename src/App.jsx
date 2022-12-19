import React from "react";
import { Nav, Hero, Editor } from "./components";
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
    </article>
  );
};

export default App;
