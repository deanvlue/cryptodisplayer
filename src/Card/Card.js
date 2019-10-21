import React, { Component } from "react";
import "./Card.css";
import axios from "axios";


class Card extends Component {
  // Adds class constructor that assigns inital state values
  constructor() {
    super();
    this.state = {
      btcprice: "",
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=MXN"
      )
      .then(response => {
        // Set the lates prices
        this.setState({ btcprice: response.data.BTC.MXN });
      })
      // cathc errors here
      .catch(error => {
        console.log(error);
      });
  }

  // render method to display the html
  render() {
    return (
      <div className="today--section container">
        <div className="columns today--section__box">
          <div className="column symbol--icon">
            <img src={require('./btcicon.png')} />
          </div>
          <div className="column btc--section">
            <h5>{new Intl.NumberFormat('en-US', {
              style:'currency',
              currency:'USD'
            }).format(this.state.btcprice)}</h5>
            <p> MXN - 1 BTC</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
