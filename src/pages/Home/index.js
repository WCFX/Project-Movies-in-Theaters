import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import styles from './style';


const Home = () => {

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Olá Mundo de Merda</Text>
    </SafeAreaView>
  )
};


export default Home;