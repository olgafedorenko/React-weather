import React from 'react'
import { render } from 'react-dom'

import Forecast from './forecast'

class Layout extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      newSearchedCity:"",
      searchedCity: "San Francisco",
      test_city:""
    };
  }
    

handleSubmitCity(city) {
  this.setState({searchedCity: city})
    console.log("bla " + city)
}

render(){
    return(
      <div className="container-box">
        <nav className="navbar navbar-light bg-faded justify-content-between">
          <form className="form-inline" >
              <input className="form-control mr-sm-2" 
                type="text" placeholder="Search city"
                onChange={event =>this.setState({newSearchedCity: event.target.value})}/>
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.handleSubmitCity(this.state.newSearchedCity)}
                type="button" >Get Weather</button>      
          </form>
        </nav>
        <Forecast searchedCity={this.state.searchedCity}/>
      </div>
      
    )
  }
    
  
   
  };

export default Layout