import logo from './images/ironhack-logo-xs.png';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logos">
        <img src={logo} alt="Ironhack Logo" className="logo" />
        <img src={image1} alt="" className="menuLogo" />
      </div>

      <div className="firstLook">
        <h1>
          <b>Say hello to ReactJS</b>
        </h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button className="button">Awesome!</button>
      </div>

      <div className="otherFields">
        <div className="declarative">
          <img src={image5} alt="" />
          <h4>Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="components">
          <img src={image4} alt="" />
          <h4>Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="single">
          <img src={image3} alt="" />
          <h4>Single-Way</h4>
          <p>A set of inmutable values are passed to the component´s.</p>
        </div>

        <div className="jsx">
          <img src={image2} alt="" />
          <h4>JSX</h4>
          <p>Statistically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
