import React from 'react';
import pageHeight from "./Components/pageHeight"
import Menu from "./Components/Menu";
import About from "./Components/About"
import { StickyContainer, Sticky } from 'react-sticky';
import MapContainer from './Containers/MapContainer'

import Image from "./Components/Image";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'

const App = ({headerHeight}) =>
    (
        <div>
            <Image/>
            <StickyContainer>
                <Sticky
                    style={{zIndex: 1000}}>
                    {({style}) => (
                        <div id='nav-bar-full' style={{...style, height: headerHeight, whiteSpace: 'nowrap'}}>
                            <Menu/>
                        </div>
                    )}
                </Sticky>
                <About/>
                <Contact/>
                <Testimonial/>
                {/*<MapContainer/>*/}
            </StickyContainer>
        </div>
    )

export default pageHeight(App);
