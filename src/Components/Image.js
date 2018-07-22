import React, {Component} from 'react'

class Image extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div id="carouselExampleIndicators"
                 className="carousel slide"
                 data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100 d-none d-none d-xl-block" src="images/banner/1_xl.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-lg-block d-xl-none" src="images/banner/1_l.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-md-block d-lg-none" src="/images/banner/1_n.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-sm-block d-md-none" src="/images/banner/1_sm.jpg" alt="First slide"/>
                        <img className="w-100 d-block d-sm-none" src="/images/banner/1_xm.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 d-none d-none d-xl-block" src="images/banner/2_xl.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-lg-block d-xl-none" src="images/banner/2_l.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-md-block d-lg-none" src="/images/banner/2_n.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-sm-block d-md-none" src="/images/banner/2_sm.jpg" alt="First slide"/>
                        <img className="w-100 d-block d-sm-none" src="/images/banner/2_xm.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 d-none d-none d-xl-block" src="images/banner/3_xl.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-lg-block d-xl-none" src="images/banner/3_l.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-md-block d-lg-none" src="/images/banner/3_n.jpg" alt="First slide"/>
                        <img className="w-100 d-none d-sm-block d-md-none" src="/images/banner/3_sm.jpg" alt="First slide"/>
                        <img className="w-100 d-block d-sm-none" src="/images/banner/3_xs.jpg" alt="First slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Image