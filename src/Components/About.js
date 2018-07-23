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
            <div className="container" style={{zIndex: -999}}>
                <div className='row'>
                    <div style={{zIndex: -999}} className='pt-4 col d-flex justify-content-center'>
                        <img className="" src="/images/art/drawing_house2.png" alt="First slide"/>
                    </div>
                    <div className='pt-4 col d-flex justify-content-center align-self-center' style={{zIndex: -999}}>
                        <blockquote className='pl-5' style={{
                            borderLeft: '5px solid #eee'
                        }}>
                            <p>A fanatic is one who can't change his mind and won't change the subject.A fanatic is one who can't change his mind and won't change the subject.A fanatic is one who can't change his mind and won't change the subject.</p>
                            <p>A fanatic is one who can't change his mind and won't change the subject.A fanatic is one who can't change his mind and won't change the subject.A fanatic is one who can't change his mind and won't change the subject.</p>
                            <p>A fanatic is one who can't change his mind and won't change the subject.A fanatic is one who can't change his mind and won't change the subject.A fanatic is one who can't change his mind and won't change the subject.</p>
                            <small>by <cite>Winston Churchill</cite></small>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}

export default About