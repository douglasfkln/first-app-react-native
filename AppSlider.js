import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor: 40
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          value={this.state.valor}
        />

        <Text style={{ textAlign: 'center', fontSize: 20 }}>{this.state.valor.toFixed(0)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

export default App;