import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

import styles from './style';


const Home = () => {


  const [loading, setLoading] = useState(false);
  const [movies, setMovies ] = useState([]);

  useEffect(() => {
    async function reqMovies(){
      setLoading(true)
      const req = await fetch('https://api.b7web.com.br/cinema/');
      const json = await req.json();
      
      if(json){
        setMovies(json);
      }
      setLoading(false)
    }

    reqMovies();
  }, []);

  return(
    <SafeAreaView style={styles.container}>

    {loading && 
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator style={styles.activityIndicator} color="#2ED573" size="large"/>
        <Text style={styles.activityIndicatorText}>Loading ...</Text>
      </View>
    }

    {!loading &&
      <>
        <Text style={styles.title}>Total de filmes: {movies.length}</Text>
        <FlatList
          data={movies}
          renderItem={({item}) => (
            <View style={styles.containerMovies}>
              <Text style={styles.listTitle}>{item.titulo}</Text>
              <Image 
                style={styles.avatarMovie}
                source={{uri:item.avatar}}
                resizeMode="contain"
              />
            </View>
          )}
          keyExtractor={item => item.titulo}
        />
      </>
    }

      

    </SafeAreaView>
  )
};


export default Home;