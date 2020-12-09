import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Modal } from 'react-native';

class Entrar extends Component {

    render() {
        return (
            <View style={{ backgroundColor: "#292929", width: '100%', borderRadius: 15, height: 350 }}>
                <Text style={{ color: "#fff", fontSize: 28, paddingTop: 15, textAlign: 'center' }}>Seja Bem-vindo!</Text>
                <Button title="Sair" onPress={this.props.fechar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Entrar;