import React, { Component } from "react";
import Header from "../components/header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bg-blue-200">
        <Header />
        <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
          <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6">
            <div className="border-b-2 border-blue-200 px-6">
              <div className="text-center py-5">
                <span className="text-black uppercase text-xl">
                  Reporte de Compras
                </span>
              </div>
            </div>
            <div className="lg:flex">
              <div className="lg:w-1/3 text-center py-8 mx-auto border-b">
                <div className="lg:border-r">
                  <div className="text-grey-darker mb-2">
                    <p className="text-3xl uppercase border-b mx-10">
                      película
                    </p>
                    <p className="text-xl mt-5">Pelicula 1</p>
                    <p className="text-xl mt-5">Pelicula 2</p>
                    <p className="text-xl mt-5">Pelicula 3</p>
                    <p className="text-xl mt-5">Pelicula 4</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 text-center py-8 mx-auto border-b">
                <div className="lg:border-r">
                  <div className="text-grey-darker mb-2">
                    <p className="text-3xl uppercase border-b mx-10">
                      # Boletos
                    </p>
                    <p className="text-xl mt-5">56</p>
                    <p className="text-xl mt-5">38</p>
                    <p className="text-xl mt-5">108</p>
                    <p className="text-xl mt-5">60</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 text-center py-8 mx-auto border-b">
                <div className="lg:border-r">
                  <div className="text-grey-darker mb-2">
                    <p className="text-3xl uppercase border-b mx-10">$ coste</p>
                    <p className="text-xl mt-5">350$</p>
                    <p className="text-xl mt-5">245$</p>
                    <p className="text-xl mt-5">850$</p>
                    <p className="text-xl mt-5">390$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
