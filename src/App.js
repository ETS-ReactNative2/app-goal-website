import React, {Component} from 'react';
import Menu from "./Components/Menu";
import About from "./Components/About"
import { StickyContainer, Sticky } from 'react-sticky';
import MapContainer from './Containers/MapContainer'

import Image from "./Components/Image";
import Testimonial from "./Components/Testimonial";

class App extends Component {
    render() {
        return (
            <div>
                <Image></Image>
                <StickyContainer>
                    <Sticky
                        style={{zIndex: 99}}>
                        {({style}) => (
                            <div style={style}>
                                <Menu/>
                            </div>
                        )}
                    </Sticky>
                    <About style={{zIndex:-9999}}></About>
                    <Testimonial style={{zIndex:-9999}}></Testimonial>
                    <MapContainer></MapContainer>
                </StickyContainer>
            </div>
        );
    }
}

export default App;
