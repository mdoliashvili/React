
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/">
                        <span className="navbar-brand">MainPage</span>
                    </Link>
            </div>
            </nav>
        );
    }
}

export default Navbar