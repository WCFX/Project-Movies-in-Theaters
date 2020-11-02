import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
  loadButton: {
    width: 200,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#1b6365',
    borderRadius: 12,
  },
  loadButtonText: {
    color: '#ccc',
    fontSize: 16,
  },
  title:{
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 22,
    color: '#ccc',
  },
  containerMovies: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%',
    paddingBottom: 10,
    marginVertical: 10,
  },
  listTitle: {
    color: '#ccc',
    fontSize: 22,
    marginTop: 10,
    padding: 10,
    textAlign: 'center',
  },
  avatarMovie: {
    width: 400,
    height: 400,
  },
  activityIndicatorContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicatorText: {
    color: '#FFF',
    paddingTop: 10,
    fontSize: 22,
  }
});


export default style;