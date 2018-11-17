import React from "react"

const pageHeight = (Component) => {

    class PageHeight extends React.Component
    {
        headerHeight = 60

        constructor (props)
        {
            super(props)
            this.state = {
                windowHeight: window.innerHeight
            }
        }

        componentWillMount ()
        {
            window.addEventListener('resize', () => {
                this.setState({ windowHeight: window.innerHeight })
            })
        }

        render ()
        {
            return <Component headerHeight={this.headerHeight} windowHeight={this.state.windowHeight} {...this.props}/>
        }
    }

    return PageHeight
}

export default pageHeight