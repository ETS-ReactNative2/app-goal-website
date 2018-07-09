import React, {Component} from 'react'
import styles from './Image.css'

class Image extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div className="container-fluid top_image" style={styles}>
                {this.props.children}
            </div>
        )
    }
}

export default Image