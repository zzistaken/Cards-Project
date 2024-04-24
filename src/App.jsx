import "bulma/css/bulma.css";
import "./App.css";
import { Card } from "./Card";
import Html from "./assets/images/html.png";
import Css from "./assets/images/css.png";
import Js from "./assets/images/js.png";
import React from "./assets/images/react.png";

function App() {
  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Cards Project</p>
          <p className="subtitle">
            A simple cards project showing how props work. Built with React +
            Vite, styled with Bulma CSS.
          </p>
        </div>
      </section>
      <div className="container mt-4">
        <div className="columns">
          <div className="column">
            <Card
              image={Html}
              title="HTML"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem sit fugit sint tenetur accusamus vitae."
            />
          </div>
          <div className="column">
            <Card
              image={Css}
              title="CSS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem sit fugit sint tenetur accusamus vitae."
            />
          </div>
          <div className="column">
            <Card
              image={Js}
              title="JS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem sit fugit sint tenetur accusamus vitae."
            />
          </div>
          <div className="column">
            <Card
              image={React}
              title="React"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem sit fugit sint tenetur accusamus vitae."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
