import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import "./slideshow.css";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fotoAtual: 0,
      figContentWidth: 256,
      thumbnailWidth: 64
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
    window.addEventListener("keydown", this.handleKeyPress.bind(this));
    this.handleResize();
  }

  handleResize() {
    let width = window.innerWidth;
    if (width > 640) width = 640;
    width *= 0.83;
    this.setState({ figContentWidth: width, thumbnailWidth: width / 4 });
  }

  handleKeyPress(e) {
    if (!this.props.open) return;
    console.log(e.keyCode);
    if (e.keyCode === 27) this.handleClose(e, true);
    if (e.keyCode === 37) this.handlePrev();
    if (e.keyCode === 39) this.handleNext();
  }

  handleChange(indice) {
    this.setState({ fotoAtual: indice });
  }

  handleClose(e, force = false) {
    if (e.target === e.currentTarget || force) {
      this.props.onClose(e);
    }
  }

  handlePrev() {
    let { fotoAtual } = this.state;
    fotoAtual -= 1;
    if (fotoAtual < 0) fotoAtual = 0;
    this.setState({ fotoAtual });
  }

  handleNext() {
    let { fotoAtual } = this.state;
    let { fotos } = this.props.album;
    fotoAtual += 1;
    if (fotoAtual > fotos.length - 1) fotoAtual = fotos.length - 1;
    this.setState({ fotoAtual });
  }

  getLeftPosition() {
    let { fotoAtual, thumbnailWidth } = this.state;
    let { fotos } = this.props.album;
    while (fotoAtual > fotos.length - 4) {
      fotoAtual -= 1;
    }
    return fotoAtual * thumbnailWidth;
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={700}
        transitionLeaveTimeout={700}
      >
        {this.renderSlideshow()}
      </ReactCSSTransitionGroup>
    );
  }

  renderSlideshow() {
    const { fotoAtual, thumbnailWidth, figContentWidth } = this.state;
    const { open, album } = this.props;
    if (!open) return null;
    return (
      <div id="slideshow" onClick={this.handleClose.bind(this)}>
        <div className="slideshow-wrapper">
          <div className="d-flex justify-content-between w-100 p-2">
            <h3>{album.titulo}</h3>
            <div
              className="close-slide p-2"
              onClick={e => this.handleClose(e, true)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          <figure className="slideshow-images">
            <img src={album.fotos[fotoAtual]} />
          </figure>
          <div className="slideshow-thumbnails">
            {album.fotos.length > 4 && (
              <div className="prev" onClick={this.handlePrev.bind(this)}>
                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
              </div>
            )}
            <div
              className="fig-content"
              style={{ width: `${figContentWidth}px` }}
            >
              <figure style={{ left: `-${this.getLeftPosition()}px` }}>
                {album.fotos.map((foto, indice) => (
                  <div
                    style={{
                      width: `${thumbnailWidth}px`,
                      border: `1px solid ${
                        fotoAtual === indice ? "lightgray" : "transparent"
                      }`
                    }}
                  >
                    <img
                      src={foto.replace(/520\/400/g, "120/80")}
                      onClick={() => this.handleChange(indice)}
                    />
                  </div>
                ))}
              </figure>
            </div>
            {album.fotos.length > 4 && (
              <div className="next" onClick={this.handleNext.bind(this)}>
                <FontAwesomeIcon icon={faChevronRight} size="lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
