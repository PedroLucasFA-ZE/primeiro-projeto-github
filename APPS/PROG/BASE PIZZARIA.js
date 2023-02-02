import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'Calabresa', valor: 35.90},
        {key: 2, nome: 'Peperone', valor: 40},
        {key: 3, nome: 'Strogonoff', valor: 39},
        {key: 4, nome: 'Bacon', valor: 39},
        {key: 5, nome: 'Frango/Catupiri', valor: 35},
        {key: 6, nome: 'Frango/Bacon', valor: 38},
        {key: 7, nome: 'Quatro Queijos', valor: 35},
      ]
    }; 
  };


  render(){

    let pizzasItem = this.state.pizzas.map( (v, k ) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker
        selectedValue={this.state.pizza}
        onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue}) }
        >
         {pizzasItem}
        </Picker>

        
        <Text style={styles.pizzas}>Voce Escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas:{
    marginTop: 15,
    fontSize: 28,
    textAlign: 'center',
  }
});

export default App;
