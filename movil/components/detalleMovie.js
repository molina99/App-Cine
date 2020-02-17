import React, { Component } from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Axios from "axios";
import { Link } from "react-router-native";

const API_GET_PELI = "http://192.168.100.116:4000/getPelicula";
const API_GET_SALA_PELI = "http://192.168.100.116:4000/getSalaPelicula/";

export default class DatalleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_pelicula: "",
      peliculas: [],
      sala_peliculas: []
    };
  }

  componentDidMount() {
    Axios.get(API_GET_PELI)
      .then(response => {
        this.setState({ peliculas: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPelicula = () => {
    Axios.get(`${API_GET_PELI}/${this.state.id_pelicula}`)
      .then(response => {
        this.setState({ peliculas: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });

    // Axios.get(`${API_GET_SALA_PELI}?id_pelicula=${this.state.id_pelicula}`)
    //   .then(response => {
    //     this.setState({ sala_peliculas: response.data.data });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  asyncstorageGet = async () => {
    try {
      const idPeli = await AsyncStorage.getItem("id_pelicula");
      this.setState({ id_pelicula: idPeli });
      this.getPelicula();
    } catch (e) {
      alert(e);
    }
  };

  // asyncstorageSave = async id => {
  //   try {
  //     await AsyncStorage.setItem("id_sala_pelicula", id.toString());
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  // asyncstorageClear = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     this.setState({ id_pelicula: "" });
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  // componentDidMount() {
  //   this.asyncstorageGet();
  // }

  render() {
    const { peliculas, sala_peliculas } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/bg.jpg")}
      >
        <View>
          <Text style={styles.header}>DETALLE PELÍCULAS</Text>
        </View>
        <ScrollView>
          {peliculas.map(element => (
            <View style={styles.card}>
              <Text style={styles.title}>{element.titulo}</Text>
              <Image
                source={require("../assets/pelicula.jpg")}
                style={styles.image}
              ></Image>
              <View style={{ marginTop: 20 }}>
                <View key={element.id}>
                  <Text style={styles.text}>
                    Resumen:{" "}
                    <Text style={{ color: "#fff" }}>{element.resumen}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Categoría:{" "}
                    <Text style={{ color: "#fff" }}>{element.categoria}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Valor:{" "}
                    <Text style={{ color: "#fff" }}>
                      {element.valor_entrada} $
                    </Text>
                  </Text>
                  <View style={styles.fixToText}>
                    <TouchableHighlight>
                      <Link to="/" style={styles.button1}>
                        <Text style={{ color: "#fff" }}>Volver</Text>
                      </Link>
                    </TouchableHighlight>
                    <TouchableHighlight>
                      <Link to="/" style={styles.button2}>
                        <Text style={{ color: "#fff" }}>Comprar</Text>
                      </Link>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  card: {
    width: 350,
    height: 640,
    backgroundColor: "#307cb1a3",
    // opacity: 0.8,
    left: 25,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 50,
    marginBottom: 25
  },
  image: {
    left: 70,
    width: 170,
    height: 300,
    borderRadius: 10
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
    color: "#fff",
    marginBottom: 20
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#30b1a5"
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50
  },
  button1: {
    borderRadius: 100,
    backgroundColor: "#32a58a",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  button2: {
    borderRadius: 100,
    backgroundColor: "#4bcde2",
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
