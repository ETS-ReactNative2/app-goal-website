import React, { Component } from "react";
import AlbumItem from "./AlbumItem";
import Slideshow from "./Slideshow";

class AlbumCollection extends Component {
  state = {
    slideShowOpen: false,
    albumSelected: null
  };
  render() {
    const { slideShowOpen, albumSelected } = this.state;
    const { albuns } = this.props;
    return (
      <div className="w-100 d-flex justify-content-center flex-column flex-md-row align-content-center mx-auto">
        <div
          className="album-container d-flex justify-content-center w-100"
          style={{ maxWidth: 1120, flexWrap: "wrap", height: "fit-content" }}
        >
          {albuns.map((album, key) => (
            <AlbumItem
              key={key}
              album={album}
              onClick={albumSelected => {
                this.setState({ slideShowOpen: true, albumSelected });
              }}
            />
          ))}
        </div>
        <Slideshow
          open={slideShowOpen}
          album={albumSelected}
          onClose={() =>
            this.setState({
              slideShowOpen: false
            })
          }
        />
      </div>
    );
  }
}

export default AlbumCollection;
