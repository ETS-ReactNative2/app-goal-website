import React, {Component} from 'react'

class MainContainer extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {}

        let backgroundColor = props.backgroundColor.toString()

        this.style = {
            backgroundColor: backgroundColor ? backgroundColor : '#fff'
        }
    }

    render()
    {
        return (
            <div className="container-fluid" style={this.style}>
                {this.props.children}
            </div>
        )
    }
}


export default MainContainer