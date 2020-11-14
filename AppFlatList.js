import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Pessoa from './src/Pessoa'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: "Douglas", idade: 27, email: 'douglasfkln@outlook.com' },
        { id: '2', nome: "Franklin", idade: 50, email: 'franklin@outlook.com' },
        { id: '3', nome: "da Silva", idade: 32, email: 'silva@outlook.com' },
        { id: '4', nome: "Geferson", idade: 45, email: 'geferson@outlook.com' },
        { id: '5', nome: "Jose", idade: 45, email: 'jose@outlook.com' }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        />
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
