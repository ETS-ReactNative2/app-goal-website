import React, { Component } from "react";
import AlbumItem from "./AlbumItem";

class AlbumCollection extends Component {
  render() {
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
              onClick={this.props.onSelectAlbum}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AlbumCollection;
