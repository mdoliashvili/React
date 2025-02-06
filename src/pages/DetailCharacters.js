import React, { Component } from "react";
import api from "../services/Api";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

export default class DetailCharacters extends Component {
  state = {
    character: {},
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    try {
      const data = await api.getCharacter(this.props.match.params.ObjetId);
      this.setState({
        character: data,
      });
    } catch (error) {
      console.log("Error Data");
    }
  };

  render() {
    return (
      <div
        className=" row container mt-5"
      >
        <div class="col-md-6"></div>
        <div className="col-md-4">
          <div className="card bg-dark">
            <img
              src={this.state.character.image}
              className="card-img-top img-fluid"
              alt="Imagen"
            />
            <div className="card-body">
              <h5 className="card-title text-white">
                {this.state.character.name}
              </h5>
              <ul>
                <li className="text-white">
                  species : {this.state.character.species}
                </li>
                <li className="text-white">
                  gender : {this.state.character.gender}
                </li>
                <li className="text-white">
                  status : {this.state.character.status}
                </li>
              </ul>
              <Link to="/characters" className="ms-2">
                <button className="btn btn-primary ">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
