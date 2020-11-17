import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Switch, ScrollView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      idade: "",
      sexo: "M",
      limite: 1000,
      estudante: false,
      status: false
    };

    this.solicitar = this.solicitar.bind(this);
    this.showRelatorio = this.showRelatorio.bind(this);
  }

  solicitar() {
    if (!this.state.nome) {
      alert("Informe seu nome");
      return;
    }
    if (!this.state.idade) {
      alert("Informe sua idade");
      return;
    }
    this.setState({ status: true });
  }

  showRelatorio() {
    if (this.state.status) {
      return (
        <View>
          <View style={styles.relatorio}>
            <Text style={styles.relatorioLabel}>Nome:</Text>
            <Text style={styles.relatorioValor}>{this.state.nome}</Text>
          </View>
          <View style={styles.relatorio}>
            <Text style={styles.relatorioLabel}>Idade:</Text>
            <Text style={styles.relatorioValor}>{this.state.idade}</Text>
          </View>
          <View style={styles.relatorio}>
            <Text style={styles.relatorioLabel}>Sexo:</Text>
            <Text style={styles.relatorioValor}>{(this.state.sexo == "M") ? "Masculino" : "Feminino"}</Text>
          </View>
          <View style={styles.relatorio}>
            <Text style={styles.relatorioLabel}>Limite desejado:</Text>
            <Text style={styles.relatorioValor}>{this.state.limite.toFixed(2).replace('.', ',')}</Text>
          </View>
          <View style={styles.relatorio}>
            <Text style={styles.relatorioLabel}>Estudante:</Text>
            <Text style={styles.relatorioValor}>{this.state.estudante ? "Sim" : "Não"}</Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.section}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
              value={this.state.nome}
              onChangeText={text => this.setState({ nome: text })}
              style={styles.input}></TextInput>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Idade:</Text>
            <TextInput
              value={this.state.idade}
              onChangeText={text => this.setState({ idade: text })}
              style={styles.input}
              keyboardType="numeric"></TextInput>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Sexo:</Text>
            <Picker
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}
            >
              <Picker.Item key={"M"} value="M" label="Masculino"></Picker.Item>
              <Picker.Item key={"F"} value="F" label="Feminino"></Picker.Item>
            </Picker>
          </View>
          <View style={styles.section}>
            <Text style={styles.label}>Limite desejado:</Text>
            <Slider style={styles.slider}
              minimumValue={0}
              maximumValue={5000}
              onValueChange={(limiteSelecionado) => this.setState({ limite: limiteSelecionado })}
              value={this.state.limite}
              minimumTrackTintColor='#00aeef'
              thumbTintColor='#00aeef'
            />
            <Text style={styles.valorLimite}>R$ {this.state.limite.toFixed(2).replace('.', ',')}</Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.label, styles.estudante]}>Estudante:</Text>
            <Switch
              value={this.state.estudante}
              onValueChange={(valueSwich) => this.setState({ estudante: valueSwich })}
              thumbColor='#00aeef'
            />
          </View>
          <TouchableOpacity style={styles.botao} onPress={this.solicitar}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Solicitar conta</Text>
            </View>
          </TouchableOpacity>
          {this.showRelatorio()}
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  section: {
    marginTop: 20
  },
  label: {
    fontSize: 15,
    marginBottom: 5
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    borderColor: '#666',
    height: 45,
    backgroundColor: '#e8e8e8'
  },
  slider: {
    marginLeft: -15
  },
  valorLimite: {
    textAlign: 'center',
    fontSize: 18
  },
  estudante: {
    position: 'absolute'
  },
  botao: {
    height: 50,
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 10,
    borderColor: '#00aeef'
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  relatorio: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10
  },
  relatorioLabel: {
    fontSize: 18
  },
  relatorioValor: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default App;