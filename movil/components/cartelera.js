import React, { Component } from "react";
import { Link, AsyncStorage } from "react-router-native";
import Axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView
} from "react-native";

const API_PELICULAS = "http://192.168.100.116:4000/getPelicula";

export default class Cartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: []
    };
  }

  componentDidMount() {
    Axios.get(API_PELICULAS)
      .then(response => {
        this.setState({ peliculas: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  asyncstorageSave = async id_pelicula => {
    try {
      await AsyncStorage.setItem("id", id_pelicula.toString());
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { peliculas } = this.state;
    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/bg.jpg")}
      >
        <View>
          <View style={styles.header}>
            <Text style={styles.cartelera}>CARTELERA</Text>
          </View>
          <ScrollView>
            {peliculas.map(element => (
              <Link
                to="/detalleMovie"
                key={element.id}
                onPress={() => this.asyncstorageSave(element.id)}
              >
                <View style={styles.menuContainer}>
                  <View key={element.id} style={styles.menuItem}>
                    <View>
                      <Image
                        source={require("../assets/pelicula.jpg")}
                        style={styles.image}
                      ></Image>
                      <Text style={styles.title_movies}>{element.titulo}</Text>
                    </View>
                  </View>
                </View>
              </Link>
            ))}
          </ScrollView>
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
  cartelera: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 50,
    marginBottom: 25
  },
  image: {
    width: 300,
    height: 500,
    borderColor: "#fff",
    borderWidth: 2
  },
  menuContainer: {
    marginBottom: 100
  },
  text: {
    color: "#fff"
  },
  menuItem: {
    paddingHorizontal: 50,
    marginBottom: 50
  },
  title_movies: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    marginTop: 10
  }
});
