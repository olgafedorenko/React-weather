import React, {Component} from 'react';

import { fetchWeather } from "../.././utils/api"
var classNames = require('classnames');
var Api = require('../.././utils/api')


export default class Forecast extends Component{
    constructor(props){
        super(props);

        this.state = {
            weekWeather: [],
            posts: [],
            weather: '',
            temp: 0,
            humidity: 0,
            wind: 0,
            timestamp:'',
            searchedCity: props.searchedCity,
        }
        
    }
    componentDidMount(){
        this.getWeather(this.state.searchedCity)
    }
    componentWillReceiveProps(nextProps) {
        this.new_City = nextProps.searchedCity;
        this.getWeather(this.new_City)
    }
    
    getWeather(test_City){
        //this.setState({searchedCity: this.props.searchedCity})
        console.log("componentWillMount" + this.state.searchedCity)
    
            fetchWeather(test_City)
        .then(res => {
            var current_posts = res;
            this.setState({posts:current_posts})
            this.updateData()
        })
    }
    
    
    updateData(posts=this.state.posts) {
        // Update the data for the UI
        this.setState({
            weather: posts.weather[0].id,
            temp: Math.round(posts.main.temp), // Kelvin to Celcius
            humidity: Math.round(posts.main.humidity),
            wind: Math.round(posts.wind.speed),
            //timestamp:posts[0].dt 
            //timestamp:Moment(posts[0].dt * 1000).calendar(null, days)
        });
    }

    render(){
        var weatherClass = classNames('wi wi-owm-' + this.state.weather);
        var bgColorClass = 'weather-widget '; // very-warm, warm, normal, cold, very-cold
        
        // Set the background colour based on the temperature
        if (this.state.temp >= 30) {
            bgColorClass += 'very-warm';
        }
        else if (this.state.temp > 20 && this.state.temp < 30) {
            bgColorClass += 'warm';
        }
        else if (this.state.temp > 10 && this.state.temp < 20) {
            bgColorClass += 'normal';
        }
        else if (this.state.temp > 0 && this.state.temp < 10) {
            bgColorClass += 'cold';
        }
        else if (this.state.temp <= 0) {
            bgColorClass += 'very-cold';
        }
        
        return(
            <div className="bottom-box" >
                <div className="weather" className={bgColorClass}>
                    <h1>{this.props.searchedCity} </h1>
                    <i className={weatherClass}></i>
                    <hr/>
                    <section className="weather-details" >

                        <div className="temp"><span className="temp-number">{this.state.temp}</span><span className="wi wi-degrees"></span></div>
                        <div className="humidity"><i className="wi wi-raindrop"></i>{this.state.humidity} %</div>
                        <div className="wind"><i className="wi wi-small-craft-advisory"></i>{this.state.wind} <span className="vel">Km/h</span></div>
                    </section>

                </div>
            </div> 
        )
    }
}
