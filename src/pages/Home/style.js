import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  loadButton: {
    width: 200,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#000fff',
    borderRadius: 12,
  },
  loadButtonText: {
    color: '#F4F4f4',
    fontSize: 16,
  },
  title:{
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 22,
    color: '#090909',
  },
  containerMovies: {
    justifyContent: 'center',
    alignItems: 'center'

  },
  listTitle: {
    color: '#a87a90',
    fontSize: 16,
    marginTop: 10,
  },
  avatarMovie: {
    width: 100,
    height: 100,
  },

});


export default style;