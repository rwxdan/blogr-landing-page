import React from "react";
import { Nav, Hero, Editor, Phones, Laptop, FooterLinks } from "./components";
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
      <FooterLinks />
    </article>
  );
};

export default App;
