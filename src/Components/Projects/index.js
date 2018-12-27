import React from "react";
import pageHeight from "../pageHeight";
import "./Projects.css";

const Projects = ({ windowHeight: height, headerHeight }) => (
  <div id="projects" className="Projects container-fluid" style={{ height, paddingTop: headerHeight }}>
    <div className="mx-auto h-50 d-flex flex-column justify-content-center align-content-center">
      <div className="title-section">
        <h2>Projetos</h2>
      </div>
      <div className="w-100 d-flex justify-content-center flex-column flex-md-row align-content-center mx-auto">
        <div className="album-container d-flex justify-content-center w-100" style={{ maxWidth: 1120, flexWrap: "wrap", height: "fit-content" }}>
          {["1", "1", "1", "1", "1", "1", "1", "1"].map(() => (
            <div
              className="album-item d-flex"
              style={{ width: 280, height: 220 }}
            >
              <h6 className="text-white mt-auto ml-auto p-2 text-uppercase font-weight-bold">
                Título do Álbum
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
           style={{ top: 0, left: 0, zIndex: 1000, backgroundColor: "rgba(0,0,0,.7)" }}>
        <div className="bg-white" style={{ width: 960, height: 640 }}>

        </div>
      </div>
    </div>
  </div>
);

export default pageHeight(Projects);
