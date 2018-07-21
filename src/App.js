import React, {Component} from 'react';
import Menu from "./Components/Menu";
import { StickyContainer, Sticky } from 'react-sticky';
import MapContainer from './Containers/MapContainer'

import Image from "./Components/Image";

class App extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <Image></Image>
                <StickyContainer>
                    <Sticky>
                        {({style}) => (
                            <div style={style}>
                                <Menu/>
                            </div>
                        )}
                    </Sticky>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <MapContainer></MapContainer>
                </StickyContainer>
            </div>
        );
    }
}

export default App;
