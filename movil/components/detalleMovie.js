import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import Axios from "axios";

const API_GET_PELI = "http://192.168.100.116:4000/getPelicula/";

const API_GET_SALA_PELI = "http://192.168.100.116:4000/getSalaPelicula/";

export default class DatalleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "",
      pelicula: [],
      sala_peliculas: [],

      id_pelicula: ""
    };
  }

  getPelicula = () => {
    Axios.get(`${API_GET_PELI}id=${this.state.id_pelicula}`)
      .then(response => {
        this.setState({ pelicula: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });

    Axios.get(`${API_GET_SALA_PELI}?id_pelicula=${this.state.id_pelicula}`)
      .then(response => {
        this.setState({ sala_peliculas: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  asyncstorageSave = async id => {
    try {
      await AsyncStorage.setItem("id_sala_pelicula", id.toString());
    } catch (err) {
      alert(err);
    }
  };

  asyncstorageGet = async () => {
    try {
      const idfilm = await AsyncStorage.getItem("id_pelicula");
      this.setState({ id_pelicula: idfilm });
      this.getPelicula();
    } catch (e) {
      alert(e);
    }
  };

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({ id_pelicula: "" });
    } catch (e) {
      alert(e);
    }
  };

  // componentDidMount() {
  //   this.asyncstorageGet();
  // }

  render() {
    const { pelicula, sala_peliculas, checked } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/bg.jpg")}
      >
        <View style={styles.card}>
          <Image
            source={require("../assets/pelicula.jpg")}
            style={styles.image}
          ></Image>
          <View>
            {pelicula.map(element => (
              <View key={element.id}>
                <Text>{element.titulo}</Text>
              </View>
            ))}
          </View>
        </View>
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
    backgroundColor: "#fff",
    opacity: 0.8,
    top: 60,
    left: 25,
    borderRadius: 10,
    padding: 20
  },
  image: {
    left: 20,
    width: 270,
    height: 400,
    borderRadius: 10
  }
});
