import React, { Component } from "react";
import api from "../services/Api";
import "../assets/css/Home.css";
import { Link } from "react-router-dom";

export default class DetailEpisode extends Component {
  state = {
    episode: {},
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async (e) => {
    try {
      const data = await api.getEpisode(this.props.match.params.ObjetId);
      this.setState({
        episode: data,
      });
    } catch (error) {
      console.log("Error Data");
    }
  };

  render() {
    return (
      <div className=" row container mt-5">
        <div className="col-md-6"></div>
        <div className="col-md-4">
          <div className="card bg-dark">
            <div className="card-body">
              <h5 className="card-title text-white">
                {this.state.episode.name}
              </h5>
              <ul>
                <li className="text-white">
                  air_date : {this.state.episode.air_date}
                </li>
                <li className="text-white">
                  episode : {this.state.episode.episode}
                </li>
                <li className="text-white">
                  created : {this.state.episode.created}
                </li>
              </ul>
              <Link to="/episodes" className="ms-2">
                <button className="btn btn-primary "> Back </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
