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
        <GLTFModel src="./assets/archive/Sofa_01.gltf"></GLTFModel>
        <a-scene>
          {/* <a-scene>
            <a-assets>
              <a-asset-item id="scene" src="./assets/model.gltf"></a-asset-item>
            </a-assets>
            <a-entity gltf-model="#scene"></a-entity>
          </a-scene> */}
          {/* <a-entity gltf-model="url(./assets/archive/Sofa_01.gltf)"></a-entity> */}
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
                // rotation="0 45 45"
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
            position="0 0 0"
          ></a-entity>
        </a-scene>
      </div>
    );
  }
}

export default ARItem;
