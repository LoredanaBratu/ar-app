// import 'aframe';
// import {Entity, Scene} from 'aframe-react';
// import {Motion,spring} from 'react-motion';
import ReactDOM from "react-dom";
import React, { Component } from "react";
import logo from "./assets/furniture.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delta: 1,
    };
  }

  componentDidMount() {
    alert("777");
  }

  render() {
    var state = this.state;

    return (
      <div className="App">
        <a-scene>
          <a-marker preset="hiro">
            {/* <a-text value="Sofa"></a-text> */}
            <a-box
              position="0 1 0"
              material="color: red;"
              // material="opacity:0.1;"
              src={logo}
            >
              <a-animation
                attribute="rotation"
                dur="2000"
                fill="forwards"
                from="0 0 0"
                to="360 360 360"
                repeat="indefinite"
              ></a-animation>
            </a-box>
            {/* <a-scene>
              <a-assets>
                <img id="my-image" src="logo.svg" />
              </a-assets>
            </a-scene> */}
          </a-marker>
          {/* <a-sky src={require('./img.jpg')} /> */}
        </a-scene>
      </div>
    );
  }
}

export default App;
