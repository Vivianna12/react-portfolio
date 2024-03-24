import Navabar from "./Navabar";
import "./App.css";
import HomePageProject from "./HomePageProject";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navabar />
      </header>
      <main>
        <div className="homepage-intro">
          <h1>Vivianna Samite Estevez</h1>
          <h2>Front-end developer based in the US</h2>
          <br />
          <a href="">Learn more about me</a>
        </div>
        <div className="homepage-projects">
          <HomePageProject />
        </div>
        <div className="home-page-work-inquiry d-flex justify-content-between">
          <div className="work-inquiry">
            <h3>Work Inquiry</h3>
            <p>Let's work together</p>
          </div>
          <div>
            <a href="#" class="btn btn-light mt-4">
              Contact Me!
            </a>
          </div>
        </div>
      </main>

      <footer className="homepage-footer">
        <p>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/vivianna-samite-estevez-133b8ba6/">
            {" "}
            Vivianna Samite Estevez
          </a>{" "}
          and is open sourced on{" "}
          <a href="https://github.com/Vivianna12/react-portfolio">GitHub</a>
          and hosted on{" "}
          <a href="https://superb-croissant-9ea11f.netlify.app/"> Netlify </a>
        </p>
      </footer>
    </div>
  );
}
