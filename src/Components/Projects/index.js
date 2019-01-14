import React from "react";
import Page from "../Page";
import AlbumCollection from "./AlbumCollection";
import "./Projects.css";

const albuns = [10, 20, 30, 40, 50, 60, 70, 80].map(n => {
  let fotos = [];
  for (let i = 0; i < getRandomInt(2, 12); i++) {
    fotos.push(`https://picsum.photos/520/400/?image=${n}${i}`);
  }
  return {
    titulo: `Titulo do Projeto (${n / 10})`,
    capa: `https://picsum.photos/280/220/?image=${n}`,
    fotos
  };
});

class Projects extends React.Component {
  render() {
    const { windowHeight: height, headerHeight } = this.props;
    return (
      <div
        id="projects"
        className="Projects container-fluid"
        style={{ height, paddingTop: headerHeight }}
      >
        <div className="mx-auto h-50 d-flex flex-column justify-content-center align-content-center">
          <div className="title-section">
            <h2>Projetos</h2>
          </div>
          <AlbumCollection albuns={albuns} />
        </div>
      </div>
    );
  }
}

export default Page(Projects);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
