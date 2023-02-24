import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native';
import style from './styles/style';
import Alcometer from './components/Alcometer';

export default function App() {
  return (
    
      <View style={styles.container}>
       <Alcometer />
      </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
