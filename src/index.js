import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Layout from "./components/layout";

class App extends Component{          
    render(){
        
        return(
            <div className="image-cover">
                <Layout />
            </div>
        )

    }

}

ReactDOM.render(<App />, document.querySelector(".app"))
