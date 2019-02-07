import React, { Component } from "react";
import AlbumItem from "./AlbumItem";

class AlbumCollection extends Component {
  render() {
    const { albuns } = this.props;
    return (
      <div
        className="album-container pb-5"
        style={{ height: `calc(100% - 80px)` }}
      >
        <div className="album-photos">
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
