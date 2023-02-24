import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abdee2',
    width: '100%'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  title: {
    color: "#26c9d8",
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50,
  },
  input: {
   borderWidth: 2,
   borderColor: "#73CED6",
   width: 120,
   color: "#000000",
   paddingLeft: 10
  },
  radioStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  calculator: {
    marginTop: 150,
    alignItems: 'center'
  },
  button: {
    backgroundColor:'#86d7da',
    padding: 15
  },
  numeric: {
    backgroundColor: '#86d7da',
  }
});