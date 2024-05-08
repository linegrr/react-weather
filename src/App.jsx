import "./styles.css";
import Forecast from "./Forecast";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <Forecast />
      <footer>
        This project was coded by
        <span>
          <a href="https://github.com/linegrr" target="_blank">
            Line Granseth
          </a>
          and is
          <a href="https://github.com/linegrr/react-weather" target="_blank">
            on GitHub
          </a>
          and
          <a
            href="https://willowy-faloodeh-cfcb68.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </span>
      </footer>
    </div>
  );
}
