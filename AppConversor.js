import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Conversor from './src/Conversor';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="EUR" moedaB="BRL" />
        <Conversor moedaA="ARS" moedaB="BRL" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;