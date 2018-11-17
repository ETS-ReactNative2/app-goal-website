import React, {Component} from 'react'
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{
                zIndex: -1,
                minHeight: window.innerHeight * 0.75,
            }} className="container-fluid" id="contact">
                <div className='row' style={{zIndex: -1}}>
                    <div className={"col-12 className='title-section'"}>
                        <h2>Contato</h2>
                    </div>
                    <div className="col-6">
                        <div className="card card-default">
                            <div className="card-block text-xs-center"><h1 className="p-a-2 text-danger"><i
                                className="fa fa-2x fa-bullseye"></i></h1></div>
                            <div className="card-footer text-xs-center">17 Targets</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <form>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" placeholder="Nome"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3"
                                           placeholder="Telefone"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <textarea className="form-control" placeholder="Mensagem"></textarea>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-12">
                                    <button type="submit" className="btn btn-default">Enviar</button>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        )
    }
}

export default Contact