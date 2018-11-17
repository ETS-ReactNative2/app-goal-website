import React, {Component} from 'react';
import Menu from "./Components/Menu";
import About from "./Components/About"
import { StickyContainer, Sticky } from 'react-sticky';
import MapContainer from './Containers/MapContainer'

import Image from "./Components/Image";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";

import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <Image></Image>
                <StickyContainer>
                    <Sticky
                        style={{zIndex: 1000}}>
                        {({style}) => (
                            <div id='nav-bar-full' style={style}>
                                <Menu></Menu>
                            </div>
                        )}
                    </Sticky>
                    <About></About>
                    <Contact></Contact>
                    <Testimonial></Testimonial>
                    <MapContainer></MapContainer>
                </StickyContainer>
            </div>
        );
    }
}

export default App;
