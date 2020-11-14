import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
        //  scrollEnabled={false}
        >
          <View style={[styles.box, styles.box1]}></View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3]}></View>
          <View style={[styles.box, styles.box4]}></View>
        </ScrollView>

        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}>
          <View style={[styles.boxH, styles.box1]}></View>
          <View style={[styles.boxH, styles.box2]}></View>
          <View style={[styles.boxH, styles.box3]}></View>
          <View style={[styles.boxH, styles.box4]}></View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    height: 250
  },
  boxH: {
    height: 250,
    width: 150
  },
  box1: {
    backgroundColor: 'red'
  },
  box2: {
    backgroundColor: 'green'
  },
  box3: {
    backgroundColor: 'yellow'
  },
  box4: {
    backgroundColor: 'blue'
  }
});

export default App;