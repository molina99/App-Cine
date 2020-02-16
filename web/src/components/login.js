import React, { Component } from "react";
import Axios from "axios";

const API_URL = "http://localhost:4000/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginAccess = e => {
    e.preventDefault();
    if (this.state.email === "" || this.state.pass === "") {
      alert("Obligatorio completar todos los campos");
    } else {
      Axios.post(API_URL, this.state)
        .then(response => {
          if (response.data.mensaje === "Encontrado") {
            window.location.assign("http://localhost:3000/home");
          }
        })
        .catch(error => {
          alert("Datos Incorrectos");
        });
    }
  };

  render() {
    const { email, pass } = this.state;
    return (
      <div className="container mx-auto h-full flex justify-center my-24">
        <div className="w-full max-w-md">
          <h1 className="font-medium mb-6 text-center text-3xl uppercase">
            Ingreso al sistema
          </h1>
          <form
            className=" bg-blue-200 shadow-md rounded px-8 py-8 pt-8"
            onSubmit={this.loginAccess}
          >
            <div className="px-4 pb-4">
              <label className="text-sm block font-bold pb-2 uppercase">
                correo electrónico
              </label>
              <input
                type="text"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder="Josemolina@example.com"
                value={email}
                onChange={this.changeHandler}
              />
            </div>
            <div className="px-4 pb-4">
              <label className="text-sm block font-bold pb-2 uppercase">
                contraseña
              </label>
              <input
                type="password"
                name="pass"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Ingresa tu contraseña"
                value={pass}
                onChange={this.changeHandler}
              />
            </div>
            <div className="flex">
              <div className="mx-auto">
                <button
                  className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="sumbit"
                >
                  Ingresar
                </button>
              </div>
              <div className="mx-auto">
                <a href="http://localhost:3000/register">
                  <button
                    className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Registro
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
