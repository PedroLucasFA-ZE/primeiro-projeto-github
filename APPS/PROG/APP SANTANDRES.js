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
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {sexoNome: 'Masculino' , valor: 1 },
        {sexoNome: 'Feminino' , valor: 2 },
      ],
      limite: 100,
      estudante: false,
    };

    this.enviarDados = this.enviarDados.bind(this);

  }

  enviarDados(){
    if(this.state.nome === '' || this.state.idade === ''){
      alert('PREENCHA OS DADOS PARA PROSEGUIR!')
      return;
    }

    alert(  
      'Conta Aberta Com Sucesso!! \n \n' +
      'Nome: ' + this.state.nome + '\n' +
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: ' + this.state.sexos[this.state.sexo].sexoNome + '\n' +
      'Limite Da Conta:' + ' ' + this.state.limite.toFixed(2) + '\n' +
      'Conta Estudante: ' + ((this.state.estudante)? 'ativo' : 'inativo')
    );
  }


  render(){

    let sexoItems = this.state.sexos.map( (v, k) => { 
      return <Picker.Item key={k} value={k} label={v.sexoNome}/>
    });


    return(
      <View style={styles.container}>
      <View style={styles.areaTotal}>
          
        <Text style={styles.textoLogo}>SANTANDRES</Text>
          
        <Text style={styles.textoNome}>Nome : </Text>
        <TextInput
        style={styles.textoInput}
        placeholder="Digite Seu Nome"
        onChangeText={ (texto) => this.setState({nome: texto})}
        underlineColorAndroid="transparent"
       />
          
        <Text style={styles.textoNome}>idade :</Text>
        <TextInput
        style={styles.textoInput}
        placeholder="Digite Sua Idade"
        onChangeText={ (texto) => this.setState({idade: texto})}
        underlineColorAndroid="transparent"
        keyboardType='numeric'
        />

        <View style={styles.areaSexo}>
          <Text style={styles.textoNome}>Sexo :</Text>
          <Picker style={styles.pickerSexo}
                  selectedValue={this.state.sexo}
                  onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
          {sexoItems}
          </Picker>
        </View>

        <View style={styles.limiteArea}>
              <Text style={styles.textoNome}>Seu Limite :</Text>
              <Text style={styles.limiteTexto}>R$ : {this.state.limite.toFixed(0)}</Text>
        </View>

        <View>
          <Slider
            minimumTrackTintColor="#222222" 
            minimumValue={100} 
            maximumValue={5000}
            value={this.state.limite}
            onValueChange={(limite)=> this.setState({limite: limite})}
          />
        </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.textoEstud}>Estudante :</Text>
          <Switch
          style={{paddingTop: 20}}
          trackColor="blue"
          value={this.state.estudante}
          onValueChange={ (valorEstudante) => this.setState({estudante: valorEstudante })}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={this.enviarDados} underlineColor="#000000">
              <Text style={styles.botaoTexto}>Abrir Conta</Text>
        </TouchableOpacity>
      </View>
      </View>    
    );
  }
}
            
      
const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    flex: 1,
  },
  areaTotal:{
    flexDirection: 'column',
    margin: 10,
  },
  textoLogo:{
    margin: 15,
    fontSize:40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#f00'
  },
  textoInput:{
    height: 45,
    borderWidth: 1,
    borderColor: '#2222',
    margin: 1,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
  },
  textoNome:{
    marginTop: 1,
    fontSize: 20,
    color: '#f00',
    fontWeight: 'bold',
  },
  areaSexo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  pickerSexo:{
    flex: 1
  },
  limiteArea:{
    flexDirection:'row',
    paddingBottom: 5,
  },
  limiteTexto:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaEstudante:{
    flexDirection: 'row', 
    alignItems: 'center'
  },
  botao:{
   height: 35,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#000000',
   borderRadius: 150,
   margin: 20
  },
  botaoTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  textoEstud:{
    marginTop: 5,
    fontSize: 20,
    color: '#F00',
    fontWeight: 'bold',
  },
});