import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Alunos from './src/Alunos';

export default function App() {
  return (
    <View style={styles.container}>
      <Alunos name="Adalberto Alves" grade1={6.5} grade2={7.3} faltas={10}></Alunos>
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
