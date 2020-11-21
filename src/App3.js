import React, { Component } from "react";

class ARItem extends Component {
  state = {
    imagSrc: this.props.element.item,
    showPlane: false,
  };

  componentDidMount() {
    window.addEventListener("wheel", (event) => {
      // small increments for smoother zooming
      const delta = event.wheelDelta / 120 / 10;
      let mycam = document.getElementById("cam").getAttribute("camera");
      let finalZoom =
        document.getElementById("cam").getAttribute("camera").zoom + delta;

      // limiting the zoom
      if (finalZoom < 0.5) finalZoom = 0.5;
      if (finalZoom > 2) finalZoom = 2;
      mycam.zoom = finalZoom;

      document.getElementById("cam").setAttribute("camera", mycam);
    });
  }
  clicked() {
    alert("clicked");
    this.setState({ showPlane: true });
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
                onClick={() => this.clicked()}
              ></a-image>
            </a-cursor>
            {showPlane && (
              <a-plane height="3" width="3" color="grey" position="-2 1 0">
                <a-text value="teeext"></a-text>
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
            position="0 1 0"
          ></a-entity>
        </a-scene>
      </div>
    );
  }
}

export default ARItem;
