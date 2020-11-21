import React, { Component } from "react";

class ARItem extends Component {
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
  zoom() {
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
  render() {
    const { element } = this.props;
    return (
      <div className="App">
        <a-scene>
          <a-marker preset="hiro">
            <a-image
              src={element.item}
              width="4"
              height="4"
              onClick={() => this.zoom()}
            ></a-image>
          </a-marker>
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
