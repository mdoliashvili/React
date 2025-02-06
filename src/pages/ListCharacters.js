import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/Api"
export default class ListCharacters extends Component {
  state = {
    characters: [],
    pageIni: 1,
    pageEnd: 10,
    listAllPages: [],
    listTempPages: [],
  };

  componentDidMount() {
    this.fetchData(1);
  }

  fetchData = async (type) => {
    try {
      const data = await api.getData();
      this.setState({
        characters: data.results,
        totalPages: data.info.pages,
      });

      let list_numbers = [];
      for (let i = 1; i <= this.state.totalPages; i++) {
        list_numbers.push(i);
      }

      this.setState({
        listAllPages: list_numbers,
      });
      console.log("arrays " + this.state.listAllPages)
    } catch (error) {
      console.log(error);
    }
  };

  onPrev = async (e) => {
    if (this.state.pageIni > 1 && this.state.pageEnd < this.state.totalPages) {
      this.setState({
        pageIni: this.state.pageIni - 1,
        pageEnd: this.state.pageEnd - 1,
      });
    }

    const data = await api.getPage(this.state.pageIni);
    this.setState({
      characters: data.results,
    });
    
  };

  onNext = async (e) => {
    if (
      this.state.pageIni < this.state.pageEnd &&
      this.state.pageEnd < this.state.totalPages
    ) {
      this.setState({
        pageIni: this.state.pageIni + 1,
        pageEnd: this.state.pageEnd + 1,
      });
    }
    

    const data = await api.getPage(this.state.pageIni);
    this.setState({
      characters: data.results,
    });


  };

  onItem = (e) => {
    console.log("Por definir")
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row row-cols-md-4 row-cols-sm-2 col">
          {this.state.characters.map((character, id) => {
            return (
              <div className="col mt-4" key={id}>
                <div className="card bg-dark">
                  <img
                    src={character.image}
                    className="card-img-top img-fluid"
                    alt="Imagen"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-white">{character.name}</h5>
                    <ul>
                      <li className="text-white">
                        species : {character.species}
                      </li>
                      <li className="text-white">
                        gender : {character.gender}
                      </li>
                      <li className="text-white">
                        status : {character.status}
                      </li>
                    </ul>
                    <Link to={`/character/${character.id}`} className="ms-2">
                      <button className="btn btn-primary ">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-center mt-4">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link bg-dark" onClick={this.onPrev}>
                  Prev
                </button>
              </li>

              {this.state.listAllPages
                .slice(this.state.pageIni-1, this.state.pageEnd)
                .map((item, id) => {
                  return (
                    <li className="page-item" key={id}>
                      <button
                        value={item}
                        className="page-link bg-dark"
                        onClick={this.onItem}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}

              <li className="page-item">
                <button className="page-link bg-dark" onClick={this.onNext}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
