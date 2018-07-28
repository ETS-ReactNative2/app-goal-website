import React, {Component} from 'react'

import './Image.css'

class Image extends Component
{
    constructor(props)
    {
        super(props)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentWillMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            heightCarousel: window.innerHeight - 60
        });
    }

    render()
    {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div id="carousel-first" className="d-block w-100" style={{height: this.state.heightCarousel}}></div>
                    </div>
                    <div className="carousel-item">
                        <div id="carousel-second" className="d-block w-100" style={{height: this.state.heightCarousel}}></div>
                    </div>
                    <div className="carousel-item">
                        <div id="carousel-third" className="d-block w-100" style={{height: this.state.heightCarousel}}></div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Image