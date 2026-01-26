import { StyleSheet, Text, View } from 'react-native';

export default function App() {

const nome = "Ernesto Sampaio"

  return (
    <View style={styles.container}>
      <Text>Hello + {nome}!</Text>
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
