import React, { Component } from "react";
import Axios from "axios";
import Header from "./header";

const API_ADD_PELIS = "http://localhost:4000/createPelicula";
const API_GET_PELIS = "http://localhost:4000/getPelicula";
const API_DELETE_PELIS = "http://localhost:4000/deletePelicula/";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelis: [],
      titulo: "",
      resumen: "",
      categoria: "",
      valor_entrada: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  registerPelicula = e => {
    e.preventDefault();
    this.post = {
      titulo: this.state.titulo,
      resumen: this.state.resumen,
      categoria: this.state.categoria,
      valor_entrada: this.state.valor_entrada
    };

    if (
      this.post.titulo === "" ||
      this.post.resumen === "" ||
      this.post.categoria === "" ||
      this.post.valor_entrada === ""
    ) {
      alert("Obligatorio completar todos los campos");
    } else {
      Axios.post(API_ADD_PELIS, this.post)
        .then(response => {
          alert("Pelicula registrada correctamente");
          window.location.assign("http://localhost:3000/peliculas");
        })
        .catch(error => {
          alert("Datos Incorrectos");
        });
    }
  };

  componentDidMount() {
    Axios.get(API_GET_PELIS)
      .then(response => {
        this.setState({ pelis: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePelicula = value => {
    Axios.delete(`${API_DELETE_PELIS}` + value, {
      data: { id: value }
    });
    alert("eliminado");
    window.location.assign("http://localhost:3000/peliculas");
  };

  render() {
    const { pelis, titulo, resumen, categoria, valor_entrada } = this.state;
    const imagen = require("../assets/pelicula.jpg");
    return (
      <div className="bg-blue-200">
        <Header />
        <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mt-5 mb-5 mx-16">
          <div className="border-b-2 border-blue-200 px-6">
            <div className="text-center py-5">
              <span className="text-black uppercase text-xl">
                Crear Película
              </span>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:w-1/2 text-center py-8 mx-auto border-b">
              <div className="lg:border-r">
                <div className="my-5">
                  <label className="text-black uppercase text-xl">
                    Agregar portada
                  </label>
                  <img
                    src={imagen}
                    className="w-64 text-center mx-auto mt-5 mb-5 border-t-2 border-r-2 border-b-2 border-l-2"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 py-8 my-auto mx-auto">
              <div className="lg:border-r">
                <div className="text-grey-darker mb-2">
                  <div className="px-16 py-5">
                    <form className="" onSubmit={this.registerPelicula}>
                      <div className="flex">
                        <label className="mr-3 text-xl">Título:</label>
                        <input
                          className="border-2 border-blue-200 rounded w-full py-1"
                          name="titulo"
                          type="text"
                          value={titulo}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="mt-5">
                        <label className="mr-3 text-xl">Resumen:</label>
                        <textarea
                          className="border-2 border-blue-200 rounded w-full py-1"
                          name="resumen"
                          value={resumen}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="flex mt-5">
                        <label className="mr-3 text-xl">Categoría:</label>
                        {/* <input
                          name="categoria"
                          type="text"
                          className="border-2 border-blue-200 rounded w-full py-1"
                          value={categoria}
                          onChange={this.changeHandler}
                        /> */}
                        <select
                          className="border-2 border-blue-200 rounded w-full appearance-none"
                          name="categoria"
                          value={categoria}
                          onChange={this.changeHandler}
                        >
                          <option className="text-sm text-gray-600">
                            Seleccione categoría....
                          </option>
                          <option>Acción</option>
                          <option>Animada</option>
                          <option>Comedia</option>
                          <option>Drama</option>
                          <option>Romántica</option>
                          <option>Terror</option>
                        </select>
                      </div>
                      <div className="flex mt-5">
                        <label className="mr-3 text-xl">Valor:</label>
                        <input
                          name="valor_entrada"
                          type="number"
                          className="border-2 border-blue-200 rounded py-1"
                          value={valor_entrada}
                          onChange={this.changeHandler}
                        />
                        <label className="ml-3 text-xl">$</label>
                        <button
                          className="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Crear
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center my-2">
          <h1 className="text-center text-3xl uppercase">Lista de Películas</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {pelis.map(element => (
            <div
              className="flex-shrink-0 m-6 bg-black rounded-lg max-w-xs h-auto shadow-lg hover:bg-gray-900"
              key={element.id}
            >
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <img className="relative w-40" src={imagen} />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="text-justify">
                  <div>
                    <label className="text-blue-400">Título:</label>
                    <br />
                    <label>{element.titulo}</label>
                  </div>
                  <div>
                    <label className="text-blue-400">Resumen:</label>
                    <br />
                    <label>{element.resumen}</label>
                  </div>
                  <div>
                    <label className="text-blue-400">Categoría:</label>
                    <br />
                    <label>{element.categoria}</label>
                  </div>
                  <span className="block font-semibold text-lg text-red-700">
                    Valor: {element.valor_entrada} $
                  </span>
                  <div className="flex justify-between mt-5">
                    <button
                      // onClick={() => this.deleteSala(element.id)}
                      className="hidden text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => this.deletePelicula(element.id)}
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Peliculas;
