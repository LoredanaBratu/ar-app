import React, { Component } from "react";

class ARItem extends Component {
  state = {
    imagSrc: this.props.element.item,
    showPlane: false,
  };

  // componentDidMount() {
  //   window.addEventListener("wheel", (event) => {
  //     // small increments for smoother zooming
  //     const delta = event.wheelDelta / 120 / 10;
  //     let mycam = document.getElementById("cam").getAttribute("camera");
  //     let finalZoom =
  //       document.getElementById("cam").getAttribute("camera").zoom + delta;

  //     // limiting the zoom
  //     if (finalZoom < 0.5) finalZoom = 0.5;
  //     if (finalZoom > 2) finalZoom = 2;
  //     mycam.zoom = finalZoom;

  //     document.getElementById("cam").setAttribute("camera", mycam);
  //   });
  // }
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
          <a-scene>
            <a-assets>
              <a-asset-item id="scene" src="./assets/model.gltf"></a-asset-item>
            </a-assets>
            <a-entity gltf-model="#scene"></a-entity>
          </a-scene>
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

          {/* <a-entity
            animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 150; from: 0.1 0.1 0.1; to: 1 1 1"
            animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 1 1 1; to: 0.1 0.1 0.1"
            animation__mouseleave="property: scale; startEvents: mouseleave; easing: easeInCubic; dur: 500; to: 1 1 1"
            cursor="fuse: true;"
            material="color: black; shader: flat"
            position="0 0 -3"
            geometry="primitive: ring"
          ></a-entity> */}
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
