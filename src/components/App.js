import React, {Component} from "react";
import './App.css';
import Dropout from './Dropout';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps1: [
                {title: 'Contact info', type: 'normal', percentage: 95},
                {title: 'NemID', type: 'service', percentage: 80},
                {title: 'Personal address', type: 'qwe', percentage: 45},
                {title: 'Documents', type: 'asd', percentage: 60},
                {title: 'Financial info', type: 'normal', percentage: 60},
            ],
            steps2: [
                {title: 'Contact info', type: 'normal', percentage: 100},
                {title: 'NemID', type: 'service', percentage: 95},
                {title: 'Personal address', type: 'normal', percentage: 60},
                {title: 'Financial info', type: 'normal', percentage: 43},
                {title: 'Documents', type: 'strange', percentage: 20},
                {title: 'Terms and Conditions', type: 'normal', percentage: 11},
                {title: 'End', type: 'normal', percentage: 7},
            ],
        }
    }

    render() {
        return (
            <div className="App">
                <div className="main-content">
                    <div className="component">
                        <Dropout steps={this.state.steps1}/>
                    </div>
                    <div className="component">
                        <Dropout steps={this.state.steps2}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
