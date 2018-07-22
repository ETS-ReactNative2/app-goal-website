import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram
} from '@fortawesome/fontawesome-free-brands'
import './Menu.css'

class Menu extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark"
                 style={
                     {
                         paddingLeft: '50px',
                         paddingRight: '50px',
                         paddingTop: 0,
                         paddingBottom: 0,
                         backgroundColor: '#000000'
                     }
                 }>
                <a className="navbar-brand" href="#">
                    <img style={{maxHeight: '50px'}} src={require('../goal_logo_2_just2.png')}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PROJETOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">QUEM SOMOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PARCEIROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTATO</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-inline-block" id='social-icons-group'>
                        <li className="nav-item d-inline-block p-1 social-icons">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff"}}/>
                            </a>
                        </li>
                        <li className="nav-item d-inline-block p-1 social-icons">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff"}}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu