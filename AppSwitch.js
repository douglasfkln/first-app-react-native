import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(valueSwich) => this.setState({ status: valueSwich })}
          thumbColor="blue"
        />
        <Text>{this.state.status ? "Ativo" : "Inativo"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  }
});

export default App;