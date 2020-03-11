import React, { Component } from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './App.css'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h2>Hello World!</h2>
                <HelloWorld />
                <h2>Bomb</h2>
                <Bomb />
                <h2>RouletteGun</h2>
                <RouletteGun />
            </div>
        );
    }
}



export default App;