
import React, { Component } from 'react';
import '../assets/css/Found.css'
import imgAstronauta from '../assets/img/noFound.png'


class NoFound extends Component {
    render() {
        return (
            <div className="noFoundContainer container">
                <div className="row">
                    <div className="col-sm bg-secondary">
                        <h1 className="display-4 text-light">
                            Service not found , 404
                        </h1>
                    </div>

                    <div className="col-sm bg-dark">
                        <img className="img-fluid" src={imgAstronauta} alt="astronauta"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoFound