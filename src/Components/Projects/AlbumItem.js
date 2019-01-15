import React from "react";
import cn from "classnames";
import { isMobile } from "react-device-detect";

const AlbumItem = ({ album, onClick }) => (
  <div
    className="album-item position-relative d-flex"
    style={{ width: 140, height: 110 }}
    onClick={() => onClick(album)}
  >
    <div className="position-absolute d-flex w-100 h-100">
      <figure className={cn("position-absolute", isMobile && "isMobile")}>
        <img src={album.capa} alt="" />
      </figure>
      <h6
        className="text-white mt-auto ml-auto mb-0 p-2 text-uppercase font-weight-bold"
        style={{
          textShadow: "0 0 5px black",
          textAlign: "right",
          zIndex: 1
        }}
      >
        {album.titulo}
      </h6>
    </div>
  </div>
);

export default AlbumItem;
