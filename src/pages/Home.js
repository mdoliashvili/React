
import React, { Component } from 'react';
import '../assets/css/Home.css'
import rm from '../assets/img/rickmorty.png'
// import MainBg from '../assets/img/MainBg.jpg'
import { Link } from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div className="HomeContainer bg-dark rounded">
                <div className="ContainerElement container">

                    <div className="ImgContainer">
                        <img className="img-fluid mt-5 rounded" src={rm} alt="Text"></img>
                    </div>
                    

                    <div className="mt-3">
                        <Link to="/characters" className="mr-2">
                            <button className="btn btn-light ms-3"  >Characters</button >
                        </Link>

                        <Link to="/episodes" className="ms-2">
                            <button className="btn btn-light ms-3"  >Episodes</button >
                        </Link>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home