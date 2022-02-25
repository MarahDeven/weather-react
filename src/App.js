import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Diego" />

        <footer>
          This project is{""}
          <a href="https://github.com/agagotowiec"> open sourced </a>
          and was coded by{" "}
          <a
            href="https://www.https://www.linkedin.com/in/marah-rice-7a49521b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marah Rice.
          </a>
        </footer>
      </div>
    </div>
  );
}
