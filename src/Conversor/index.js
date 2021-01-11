import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import api from '../services/api';

class Conversor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaBValor: 0,
            valorConvertido: 0
        }
        this.converter = this.converter.bind(this);
    }

    async converter() {
        let moeda_param = this.state.moedaA + '_' + this.state.moedaB;
        const response = await api.get(`convert?q=${moeda_param}&compact=ultra&apiKey=52f43686a33ac85769be`);

        let valor = parseFloat(this.state.moedaBValor);
        this.setState({
            valorConvertido: (valor * response.data[moeda_param]).toFixed(2).replace('.', ',')
        });
        Keyboard.dismiss();
    }

    render() {
        const { moedaA, moedaB } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>

                <TextInput
                    placeholder="Valor a ser convertido"
                    style={styles.areaInput}
                    onChangeText={(moedaBValor) => this.setState({ moedaBValor })}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.botaoArea} onPress={() => this.converter()}>
                    <Text style={styles.botaoText}>Converter</Text>
                </TouchableOpacity>

                <Text style={styles.valorConvertido}>{(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000"
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#CCC',
        paddingLeft: 10,
        borderRadius: 8,
        borderColor: '#C9C9C9',
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: "center",
        marginTop: 15,
        fontSize: 20
    },
    botaoArea: {
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    botaoText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'

    },
    valorConvertido: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15
    }
});

export default Conversor;