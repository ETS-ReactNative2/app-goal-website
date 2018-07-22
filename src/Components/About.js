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
        zIndex: -1
    }

    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div style={{zIndex: -1}} className='pt-4 col d-flex justify-content-center'>
                        <img className="" src="/images/art/drawing_house2.png" alt="First slide"/>
                    </div>
                    <div className='pt-4 col d-flex justify-content-center align-self-center'>
                        <blockquote style={this.style}>Nullam at tellus a ante dictum sagittis. Aenean malesuada, turpis non aliquam blandit, nisl dui pellentesque tortor, malesuada consectetur sem lectus sed lacus. Nulla nec turpis mattis dui ornare blandit. Ut leo nisl, tempus ut bibendum in, iaculis quis felis. Aliquam et lorem vel dolor tincidunt vulputate vel sed lacus. Morbi tristique elementum vehicula. Duis sem tellus, porta in leo sed, porttitor aliquet magna. Ut cursus erat sed pulvinar semper. Donec gravida porttitor arcu, sed vulputate libero. Morbi non justo ac tellus tempus ornare. Nam tortor augue, commodo eget lobortis non, consectetur eget eros. In hac habitasse platea dictumst. Nam congue odio neque, in tempus sapien faucibus non.&nbsp;</blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default About