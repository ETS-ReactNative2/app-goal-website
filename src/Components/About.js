import React, {Component} from 'react'

class About extends Component {
    constructor(props) {
        super(props)
    }

    style = {
        fontStyle: 'italic',
        padding: '10px 0 10px 20px',
        fontSize: '1.09rem',
        position: 'relative',
        borderColor: '#149dcc !important',
        borderWidth: '3px',
        color: '#767676',
        marginBottom: '2.3125rem',
        borderLeft: '2px solid',
        zIndex: -999
    }

    render() {
        return (
            <div style={{zIndex: -1}} className="container" id="home">
                <div className='row'>
                    <div style={{zIndex: -1}} className='pt-4 col d-flex justify-content-center'>
                        <img className="img-fluid" src="/images/art/drawing_house.png" alt="First slide"/>
                    </div>
                    <div className='pt-4 col d-flex justify-content-center align-self-center'>
                        <blockquote style={this.style}>
                            <p>Nullam at tellus a ante dictum sagittis. Aenean malesuada, turpis non aliquam blandit,
                                Aenean malesuada, turpis non aliquam blandit, Aenean malesuada, turpis non aliquam blandit
                                nisl dui pellentesque tortor, malesuada consectetur sem lectus sed lacus.</p>
                            <p>Nullam at tellus a ante dictum sagittis. Aenean malesuada, turpis non aliquam blandit,
                                Aenean malesuada, turpis non aliquam blandit, Aenean malesuada, turpis non aliquam blandit
                                nisl dui pellentesque tortor, malesuada consectetur sem lectus sed lacus.</p>
                            <small>by <cite>Winston Churchill</cite></small>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default About