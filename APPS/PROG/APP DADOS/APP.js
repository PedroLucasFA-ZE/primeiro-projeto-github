import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Pessoas from "./src/Pessoas";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: '1', nome: 'Pedro Lucas', idade: 20, email: 'pedrolucas@gmail.com' },
        {id: '2', nome: 'Akio',        idade: 19, email: 'akio@gmail.com' },
        {id: '3', nome: 'Maike',       idade: 20, email: 'maike@gmail.com' },
        {id: '4', nome: 'Leoni',       idade: 25, email: 'leoni@gmail.com' },
        {id: '5', nome: 'Pedro Gaio',  idade: 26, email: 'pedrogaio@gmail.com' },
        {id: '6', nome: 'Felipe',      idade: 23, email: 'felipe@gmail.com' },
        {id: '7', nome: 'Carlos',      idade: 22, email: 'carlos@gmail.com' },
        {id: '8', nome: 'Maiki',       idade: 24, email: 'maiki@gmail.com' },
      ]
    }
  }
  
  render(){
    return(
      <View style={styles.container}>

      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoas data={item} /> }
      />
       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;
