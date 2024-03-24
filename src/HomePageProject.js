import React from "react";
import dictionary from "./dictionary.png";
import weather from "./weather.png";
import "./HomePageProject.css";

export default function HomePageProject() {
  return (
    <div>
      <h2>Check out my latest projects </h2>
      <div>
        <img
          src={dictionary}
          alt="dictionary app"
          className="img-fluid rounded"
        />
        <h3>Dictionary App</h3>
        <p>
          This React project was created with multiple APIs to provide the users
          not only with the defintion of words. Click on the link to see what
          else this site can offer!{" "}
        </p>
        <br />
        <a
          href="https://vse-dictionary-app.netlify.app/"
          target="blank"
          className="home-page-project-button"
        >
          Check out this project!
        </a>
      </div>
      <br />
      <div>
        <img src={weather} alt="weather app" className="img-fluid rounded" />
        <h3>Weather App</h3>
        <p>
          This React project was created using an APIs to provide the user with
          the weather for the city they search{" "}
        </p>
        <br />
        <a
          href="https://viv-react-weather-app.netlify.app/"
          target="blank"
          className="home-page-project-button"
        >
          Check out this project!
        </a>
      </div>
    </div>
  );
}
