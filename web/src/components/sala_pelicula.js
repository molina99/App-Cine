import React, { Component } from "react";
import Axios from "axios";
import Header from "./header";

const API_SALA_PELI = "http://localhost:4000/";
const API_DELETE_SALA_PELI = "http://localhost:4000/deleteSalaPelicula/";

class Sala_Pelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salas: [],
      peliculas: [],
      horarios: [],
      salas_peliculas: [],
      id_sala: "",
      id_pelicula: "",
      id_horario: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    Axios.get(API_SALA_PELI + "getSala")
      .then(response => {
        this.setState({ salas: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });

    Axios.get(API_SALA_PELI + "getPelicula")
      .then(response => {
        this.setState({ peliculas: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });

    Axios.get(API_SALA_PELI + "getHorario")
      .then(response => {
        this.setState({ horarios: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });

    Axios.get(API_SALA_PELI + "allSalasPelis")
      .then(response => {
        this.setState({ salas_peliculas: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  registerSalaPelicula = e => {
    e.preventDefault();
    this.post = {
      id_sala: this.state.id_sala,
      id_pelicula: this.state.id_pelicula,
      id_horario: this.state.id_horario
    };

    if (
      this.post.id_sala === "" ||
      this.post.id_pelicula === "" ||
      this.post.id_horario === ""
    ) {
      alert("Obligatorio completar todos los campos");
    } else {
      Axios.post(API_SALA_PELI + "createSalaPelicula", this.post)
        .then(response => {
          alert("SalaPelicula registrada correctamente");
          window.location.assign("http://localhost:3000/sala_pelicula");
        })
        .catch(error => {
          alert("Datos Incorrectos");
        });
    }
  };

  deleteSalaPelicula = value => {
    Axios.delete(`${API_DELETE_SALA_PELI}+${value}`, {
      data: { id: value }
    });
    alert("Eliminación exitosa");
    window.location.assign("http://localhost:3000/sala_pelicula");
  };

  render() {
    const {
      salas_peliculas,
      salas,
      peliculas,
      horarios,
      id_sala,
      id_pelicula,
      id_horario
    } = this.state;
    return (
      <div className="bg-blue-200">
        <Header />
        <div className="mt-5 bg-white border-t rounded shadow mx-16">
          <div className="border px-6">
            <div className="text-center py-5">
              <span className="uppercase text-xl font-medium">
                Asignación Salas ~ Películas
              </span>
            </div>
          </div>

          <div className="py-8 mx-10">
            <form className="" onSubmit={this.registerSalaPelicula}>
              <div className="flex items-center">
                <label className="mr-3 text-xl">Película:</label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  name="id_pelicula"
                  value={id_pelicula}
                  onChange={this.changeHandler}
                >
                  <option className="text-sm text-gray-600">
                    Seleccione pelicula....
                  </option>
                  {peliculas.map(element => (
                    <option key={element.id} value={element.id}>
                      {" "}
                      {element.titulo}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center mt-5">
                <label className="mr-3 text-xl">Sala:</label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  name="id_sala"
                  value={id_sala}
                  onChange={this.changeHandler}
                >
                  <option className="text-sm text-gray-600">
                    Seleccione salas....
                  </option>
                  {salas.map(element => (
                    <option key={element.id} value={element.id}>
                      {" "}
                      {element.nombre}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center mt-5">
                <label className="mr-3 text-xl">Horario:</label>
                <select
                  className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  name="id_horario"
                  value={id_horario}
                  onChange={this.changeHandler}
                >
                  <option className="text-sm text-gray-600">
                    Seleccione horario....
                  </option>
                  {horarios.map(element => (
                    <option key={element.id} value={element.id}>
                      {" "}
                      {element.fecha}
                      {" || "}
                      {element.hora}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-5">
                <button
                  className="mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
          <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
            <div className="border-b-2 px-6">
              <div className="text-center py-5">
                <span className="uppercase text-xl font-medium">
                  Lista de salas ~ películas asignadas
                </span>
              </div>
            </div>
            <div className="">
              <table className="w-full text-md bg-white rounded mb-4 mt-4 text-center">
                <thead className="border-b">
                  <tr>
                    <th className="p-3 px-5 uppercase">Película</th>
                    <th className="p-3 px-5 uppercase">Sala</th>
                    <th className="p-3 px-5 uppercase">Horario</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      {salas_peliculas.map(element => (
                        <p className="p-3 px-5">{element.id_pelicula}</p>
                      ))}
                    </td>
                    <td>
                      {salas_peliculas.map(element => (
                        <p className="p-3 px-5">{element.id_sala}</p>
                      ))}
                    </td>
                    <td>
                      {salas_peliculas.map(element => (
                        <p className="p-3 px-5">{element.id_horario}</p>
                      ))}
                    </td>
                    <td>
                      {salas_peliculas.map(element => (
                        <p className="p-3 px-5" key={element.id}>
                          <button
                            // onClick={() => this.deleteSala(element.id)}
                            className="hidden text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
                          >
                            Editar
                          </button>
                        </p>
                      ))}
                    </td>
                    <td>
                      {salas_peliculas.map(element => (
                        <p className="text-left p-3 px-5" key={element.id}>
                          <button
                            onClick={() => this.deleteSalaPelicula(element.id)}
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded-full focus:outline-none focus:shadow-outline"
                          >
                            Eliminar
                          </button>
                        </p>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sala_Pelicula;
