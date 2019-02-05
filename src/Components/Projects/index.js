import React, { Fragment } from "react";
import Page from "../Page";
import AlbumCollection from "./AlbumCollection";
import Slideshow from "./Slideshow";
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
  state = {
    slideShowOpen: false,
    albumSelected: null
  };

  handleOpenAlbum(albumSelected) {
    this.setState({ slideShowOpen: true, albumSelected });
  }

  render() {
    const { slideShowOpen, albumSelected } = this.state;
    const { offsetTop } = this.props;
    return (
      <Fragment>
        <Page id="projetos" offsetTop={offsetTop}>
          <div className="mx-auto h-50 d-flex flex-column align-content-center">
            <div className="title-section">
              <h2>Projetos</h2>
            </div>
            <AlbumCollection
              albuns={albuns}
              onSelectAlbum={this.handleOpenAlbum.bind(this)}
            />
          </div>
        </Page>
        <Slideshow
          open={slideShowOpen}
          album={albumSelected}
          onClose={() =>
            this.setState({
              slideShowOpen: false
            })
          }
        />
      </Fragment>
    );
  }
}

export default Projects;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
