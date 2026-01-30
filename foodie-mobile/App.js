import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { styles } from './src/style';
import icons from './src/constants/icons';

export default function App() {

const nome = "Ernesto Sampaio"

  return (<>
      <Text style={styles.textos}>Hello {nome}!</Text>
      <Image style={styles.imagem} source={icons.remove}/>
      <Button style={styles.btn} title="Salva Dados"/>
        </>
  );
}
