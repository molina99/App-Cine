import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import Cartelera from "./components/cartelera";
import DetalleMovie from "./components/detalleMovie";

export default class App extends Component {   
   render() {   
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={ Cartelera } />
            <Route exact path="/detalleMovie" component={ DetalleMovie } />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});