import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Modal } from 'react-native';
import Entrar from './src/Entrar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Entrar" onPress={() => this.toggleModal(true)} />

        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          transparent={true}
        >
          <View style={{ margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Entrar fechar={() => this.toggleModal(false)} />
          </View>
        </Modal>
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