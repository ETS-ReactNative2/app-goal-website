import React from 'react'
import pageHeight from "../pageHeight"
import drawingHouse from "../../images/art/drawing_house.png"

const style = {
    fontStyle: 'italic',
    padding: '10px 0 10px 20px',
    fontSize: '1.05rem',
    borderColor: '#149dcc !important',
    borderWidth: '3px',
    color: '#767676',
    borderLeft: '2px solid',
}

const About = ({headerHeight, windowHeight : height}) =>
    (
        <div id="home" className="container"
             style={{height, paddingTop: headerHeight}}>

            <div className="h-100 d-flex flex-column flex-md-row justify-content-center align-content-center">
                <figure className="m-auto w-75">
                    <img className="img-fluid" src={drawingHouse} alt="First slide"/>
                </figure>
                <div className="m-auto" style={{ maxWidth: 900 }}>
                    <blockquote style={style}>
                        <p>Nullam at tellus a ante dictum sagittis. Aenean malesuada, turpis non aliquam blandit,
                            Aenean malesuada, turpis non aliquam blandit, Aenean malesuada, turpis non aliquam blandit
                            nisl dui pellentesque tortor, malesuada consectetur sem lectus sed lacus.</p>
                        <small>by <cite>Winston Churchill</cite></small>
                    </blockquote>
                </div>
            </div>

        </div>
    )

About.defaultProps = {
    headerHeight: 60,
    windowHeight: 768
}

export default pageHeight(About)