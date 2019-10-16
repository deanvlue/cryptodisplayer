import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// IMport today component
import Today from "./Today/Today";

// import history
//import History from "./History/History";

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="topHeader">
          <header className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">Pusher</span>
              </div>
              <div className="navbar-end">
                <a
                  className="navbar-item"
                  href="http://track.bitsket.com.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tracker
                </a>
              </div>
            </nav>
          </header>
        </div>
        <section className="results--section">
          <div className="container">
            <h1>
              Real Time Tracker <br /> BTC LTC ETH
            </h1>
          </div>
          <div className="results--section__inner">
            <Today />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
