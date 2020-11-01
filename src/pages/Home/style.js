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
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowOpacity: 1.41,
    shadowRadius: 2.11,
    elevation: 7,
    padding: 10,
    marginVertical: 10,
  },
  listTitle: {
    color: '#000000',
    fontSize: 22,
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
  },
  avatarMovie: {
    width: 300,
    height: 300,
  },

});


export default style;