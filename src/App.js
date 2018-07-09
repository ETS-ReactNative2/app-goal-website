import React, {Component} from 'react';
import Menu from "./Components/Menu";
import MainContainer from "./Components/MainContainer";
import Image from "./Components/Image";

class App extends Component {
    render() {
        return (
            <div>
                <Image></Image>
                <Menu/>
            </div>
        );
    }
}

export default App;
