import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity
  } from 'react-native';
  import Slider from '@react-native-community/slider';
  import {Picker} from '@react-native-picker/picker';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <View style={styles.container}>
        
        <Text style={styles.textoCriar}>Criar Conta</Text>

        <TextInput
        style={styles.nomeinput}
        placeholder="Digite Seu Nome"
        onChangeText={this.pegaNome}
        />
        
        <TextInput
        style={styles.idadeinput}
        placeholder="Digite Sua Idade"
        onChangeText={this.pegaIdade}
        />

      </View>    
    );

  }

}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    flex: 1,
  },
  textoCriar:{
    margin: 15,
    fontSize:40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  nomeinput:{
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 15,
    fontSize: 20,
    padding: 10,
  },
  idadeinput:{
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 15,
    fontSize: 20,
    padding: 10,
  }
});