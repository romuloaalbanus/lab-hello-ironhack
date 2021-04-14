import logo from "./images/ironhack-logo.svg";
import menu from "./images/menu-top.svg";
import img1 from "./images/icon1.png";
import img2 from "./images/icon2.png";
import img3 from "./images/icon3.png";
import img4 from "./images/icon4.png";
import "./App.css";
// import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={menu} className="App-menu" alt="menu" />
      </header>
      <body className="App-body">
        <div>
          <h1 className="App-hello">Say Hello to ReactJS</h1>
          <p className="App-par">
            You will learn how to use the most popular frontend library and
            become a super Ninja developer
          </p>
          <button>Awesome</button>
        </div>
      </body>
      <footer className="App-footer">
        <div>
          <img src={img1} className="App-dec" alt="declarative" />
          <h1>declarative</h1>
          <p>React makes it painless to create interactive Uls.</p>
        </div>
        <div>
          <img src={img2} className="App-comp" alt="components" />
          <h1>Components</h1>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={img3} className="App-way" alt="single-way" />
          <h1>Single-Way</h1>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div>
          <img src={img4} className="jsx" alt="jsx" />
          <h1>JSX</h1>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
