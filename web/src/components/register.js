import React, { Component } from "react";
import Axios from "axios";

const API_URL = "http://localhost:4000/createPersona";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      pass: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerPersona = e => {
    e.preventDefault();
    this.post = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      email: this.state.email,
      pass: this.state.pass
    };

    if (
      this.post.nombre === "" ||
      this.post.apellido === "" ||
      this.post.email === "" ||
      this.post.pass === ""
    ) {
      alert("Obligatorio completar todos los campos");
    } else {
      Axios.post(API_URL, this.post)
        .then(response => {
          alert("Usuario registrado correctamente");
          window.location.assign("http://localhost:3000/");
        })
        .catch(error => {
          alert("Datos Incorrectos");
        });
    }
  };
  render() {
    const { nombre, apellido, email, pass } = this.state;

    return (
      <div className="my-auto mx-auto">
        <form
          className=" bg-blue-200 shadow-md rounded px-8 py-8 pt-8"
          onSubmit={this.registerPersona}
        >
          <div>
            <h1 className="text-center uppercase mb-5">
              Registro Nuevo Usuario
            </h1>
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  name="nombre"
                  type="text"
                  placeholder="Jose"
                  value={nombre}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Apellido
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  name="apellido"
                  type="text"
                  placeholder="Molina"
                  value={apellido}
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Correo Electrónico
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  name="email"
                  type="text"
                  placeholder="Josemolina@example.com"
                  value={email}
                  onChange={this.changeHandler}
                />
              </div>

              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Contraseña
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  name="pass"
                  type="password"
                  placeholder="**********"
                  value={pass}
                  onChange={this.changeHandler}
                  minLength="6"
                  securetextentry="true"
                />
              </div>
            </div>

            <div className="flex">
              <div className="mx-auto">
                <a href="http://localhost:3000/">
                  <button
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Cancelar
                  </button>
                </a>
              </div>

              <div className="mx-auto">
                <button
                  className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
