import React, { Component } from "react";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

class ARItem extends Component {
  state = {
    imagSrc: this.props.element.item,
    showPlane: false,
  };

  clicked() {
    alert("clicked");
    this.setState({ showPlane: true });
  }

  handleChangeItemColor() {
    alert("red");
  }
  render() {
    const { imagSrc, showPlane } = this.state;
    return (
      <div className="App">
        <a-scene>
          <a-marker preset="hiro">
            <a-cursor
              raycaster="objects: .clickable"
              fuse-timeout="2000"
              material="color: #F4D03F; shader: flat"
              opacity="0.9"
            >
              <a-image
                class="clickable"
                src={imagSrc}
                width="4"
                height="4"
                scale="2 2 2"
                onClick={() => this.clicked()}
              ></a-image>
            </a-cursor>

            {showPlane && (
              <a-plane height="3" width="3" color="grey" position="-2 1 0">
                <a-text value="teeext"></a-text>
                <a-entity
                  geometry="primitive: sphere; radius: 1"
                  onClick={() => this.handleChangeItemColor()}
                />
              </a-plane>
            )}
          </a-marker>

          <a-entity
            id="cam"
            camera="zoom: 1"
            look-controls
            // position="0 0 0"
          ></a-entity>
        </a-scene>
      </div>
    );
  }
}

export default ARItem;
