import React, { Component } from "react";
import "./App.css";

// IMport today component
//import Today from "./Today/Today";
import Card from "./Card/Card"

// import history
//import History from "./History/History";

class App extends Component {
  render() {
    return (
      <div className="">
        <section className="results--section">
          <div className="container">
            <h1>
            TICKER
            </h1>
          </div>
          <div className="results--section__inner">
            <Card />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
