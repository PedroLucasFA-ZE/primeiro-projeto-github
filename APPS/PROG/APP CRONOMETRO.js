import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  vai(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botao: 'VAI'});
    }else{
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);
      
      this.setState({botao: 'PARAR'});

    }
  }


  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }
  
  render(){
    return(
      <View style={styles.container}>

      <Image
      source={require('./src/cronometro.png')}
      style={styles.cronometro}
      />

      <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.vai}>
          <Text style={styles.bntTexto}>{this.state.botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}onPress={this.limpar}>
          <Text style={styles.bntTexto}>LIMPAR</Text>
        </TouchableOpacity>

      </View>
      
      <View style={styles.areaUltima}>
          <Text style={styles.textocorrida}>
            {this.state.ultimo > 0 ? 'Ultimo Tempo: ' + this.state.ultimo.toFixed(2) + ' SEC ' : '' }
          </Text>
      </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a0ee'
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    margin: 70,
    height: 40
    },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  bntTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00a0ee'
  },
  areaUltima:{
    marginTop:40
  },
  textocorrida:{
    fontSize: 25,
    fontStyle:'italic',
    color:'#FFF'
  }
});

export default App;
