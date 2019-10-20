import React, {Component}  from 'react';
import './History.css'
import axios from 'axios'
import moment from 'moment'

class History extends Component {
    constructor(){
        super();
        this.state = {
            todayprice:{},
            yesterdayprice:{},
            twodaysprice:{},
            threedaysprice:{},
            fourdaysprice:{}
        }

        //this.getBTCPrices = this.getBTCPrices.bind(this);
        //this.getLTCPrices = this.getLTCPrices.bind(this);
        //this.getETHPrices = this.getETHPrices.bind(this);
        this.getSYMPrices = this.getSYMPrices.bind(this);
    }

    // this function gets a symbol price for an specifi timestamp date, date is passed as argument
    /*getETHPrices(date){
        return axios.get('https://min-api.cryptocompare.com/data/procehistorical?fsym=ETH&tsyms=MXN&ts='+date)
    }*/
    getSYMPrices(symbol, date){
      // https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=MXN&ts=1571457103 
        return axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${symbol}&tsyms=MXN&ts=${date}`)
    }

    // gets price of the current date
    getTodayPrice(){
        // get today's date in timestamp
        let t = moment().unix()
        // call concurrently
        axios.all([this.getSYMPrices("ETH",t), this.getSYMPrices("BTC",t), this.getSYMPrices("LTC",t)])
            .then(axios.spread((eth,btc,ltc)=>{
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.MXN,
                    btc: btc.data.BTC.MXN,
                    ltc: ltc.data.LTC.MXN
                }
                // set yesterday price to the content of object f
                this.setState({todayprice: f});
            }));
    }
    getYesterdayPrice(){
        // get today's date in timestamp
        let t = moment().subtract(1,'days').unix();
        // call concurrently
        axios.all([this.getSYMPrices("ETH",t), this.getSYMPrices("BTC",t), this.getSYMPrices("LTC",t)])
            .then(axios.spread((eth,btc,ltc)=>{
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.MXN,
                    btc: btc.data.BTC.MXN,
                    ltc: ltc.data.LTC.MXN
                }
                // set yesterday price to the content of object f
                this.setState({yesterdayprice: f});
            }));
    }
    getTwoDaysPrice(){
        // get today's date in timestamp
        let t = moment().subtract(2,'days').unix();
        // call concurrently
        axios.all([this.getSYMPrices("ETH",t), this.getSYMPrices("BTC",t), this.getSYMPrices("LTC",t)])
            .then(axios.spread((eth,btc,ltc)=>{
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.MXN,
                    btc: btc.data.BTC.MXN,
                    ltc: ltc.data.LTC.MXN
                }
                // set yesterday price to the content of object f
                this.setState({twodaysprice: f});
            }));
    }
    getThreeDaysPrice(){
        // get today's date in timestamp
        let t =moment().subtract(3,'days').unix();
        // call concurrently
        axios.all([this.getSYMPrices("ETH",t), this.getSYMPrices("BTC",t), this.getSYMPrices("LTC",t)])
            .then(axios.spread((eth,btc,ltc)=>{
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.MXN,
                    btc: btc.data.BTC.MXN,
                    ltc: ltc.data.LTC.MXN
                }
                // set yesterday price to the content of object f
                this.setState({threedaysprice: f});
            }));
    }
    getFourDaysPrice(){
        // get today's date in timestamp
        let t =moment().subtract(4,'days').unix();
        // call concurrently
        axios.all([this.getSYMPrices("ETH",t), this.getSYMPrices("BTC",t), this.getSYMPrices("LTC",t)])
            .then(axios.spread((eth,btc,ltc)=>{
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.MXN,
                    btc: btc.data.BTC.MXN,
                    ltc: ltc.data.LTC.MXN
                }
                // set yesterday price to the content of object f
                this.setState({fourdaysprice: f});
            }));
    }
    componentWillMount(){
        this.getTodayPrice();
        this.getYesterdayPrice();
        this.getTwoDaysPrice();
        this.getThreeDaysPrice();
        this.getFourDaysPrice();
    }

    render(){
        return (
        <div className="history--section container">
            <h2>History (Past 5 days)</h2>
            <div className="history--section__box">
                <div className="history--section__box__inner">
                    <h4>{this.state.todayprice.date}</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.todayprice.btc)

                            }</p>
                            <p>1 LTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.yesterdayprice.ltc)
                            }</p>
                            <p>1 ETH = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.yesterdayprice.eth)
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history--section__box">
                <div className="history--section__box__inner">
                    <h4>{this.state.yesterdayprice.date}</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.yesterdayprice.btc)
                            }</p>
                            <p>1 LTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.yesterdayprice.ltc)
                            }</p>
                            <p>1 ETH = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.yesterdayprice.eth)
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history--section__box">
                <div className="history--section__box__inner">
                    <h4>{this.state.twodaysprice.date}</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.twodaysprice.btc)
                            }</p>
                            <p>1 LTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.twodaysprice.ltc)
                            }</p>
                            <p>1 ETH = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.twodaysprice.eth)
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history--section__box">
                <div className="history--section__box__inner">
                    <h4>{this.state.threedaysprice.date}</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.threedaysprice.btc)
                            }</p>
                            <p>1 LTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.threedaysprice.ltc)
                            }</p>
                            <p>1 ETH = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.threedaysprice.eth)
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="history--section__box">
                <div className="history--section__box__inner">
                    <h4>{this.state.fourdaysprice.date}</h4>
                    <div className="columns">
                        <div className="column">
                            <p>1 BTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.fourdaysprice.btc)
                            }</p>
                            <p>1 LTC = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.fourdaysprice.ltc)
                            }</p>
                            <p>1 ETH = { new Intl.NumberFormat('en-US',{
                                style: 'currency',
                                currency:'USD',
                                minimumFractionDigits:2,
                                maximumFractionDigits: 2
                            }).format(this.state.fourdaysprice.eth)
                            }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default History;