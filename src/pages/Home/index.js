import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import styles from './style';


const Home = () => {

  const [movies, setMovies ] = useState([]);
  
  async function handleLoadButton(){
    const req = await fetch('https://api.b7web.com.br/cinema/');
    const json = await req.json();

    if(json){
      setMovies(json);
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.loadButton} onPress={handleLoadButton} >
        <Text style={styles.loadButtonText}>Carregar Filmes</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Total de filmes: {movies.length}</Text>
    </SafeAreaView>
  )
};


export default Home;