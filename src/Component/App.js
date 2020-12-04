import React, {Component} from 'react';
import About from "../Screen/About";
import Stack from "../Screen/Stack";
import Project from "../Screen/Project";
import Home from "../Screen/Home";

class App extends Component {
    render() {
        return(
            <div id='body-wrapper'>
                <div className='section s1'>
                    <Home/>
                </div>
                <div className='section s2'>
                    <About/>
                </div>
                <div className='section s3'>
                    <Stack/>
                </div>
                <div className='section s4'>
                    <Project/>
                </div>
            </div>
        )
    }
}

export default App;