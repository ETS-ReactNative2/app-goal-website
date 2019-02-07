import React from "react";
import cn from "classnames";
import { isMobile } from "react-device-detect";

const AlbumItem = ({ album, onClick }) => (
  <div
    className="album-item position-relative d-flex"
    onClick={() => onClick(album)}
    style={{ backgroundImage: `url(${album.capa})` }}
  >
    <h6
      className="position-absolute text-white mt-auto ml-auto mb-0 p-2 text-uppercase font-weight-bold"
      style={{
        textShadow: "0 0 5px black",
        textAlign: "right",
        zIndex: 1
      }}
    >
      {album.titulo}
    </h6>
  </div>
);

export default AlbumItem;
