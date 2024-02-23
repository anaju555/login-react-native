import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, ImageBackground, Button, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./background.png/fundo.png')} style={styles.image}>
      <TextInput style={styles.input}  placeholder="digite seu email"/>
      <TextInput style={styles.input}  placeholder="digite sua senha" secureTextEntry={true}/>
      <Text style={styles.login}>Faça seu login</Text>
      <Button title="Login" onPress={() => console.log('Login pressed')} />
      <Image source={require('./background.png/gatinho.png')} style={styles.image2}/>
      </ImageBackground>

   </View>

  );
}

   //ESTILO E POSIÇÃO DE ELEMENTOS
  

const styles = StyleSheet.create({
  container: {
  flex: 1,
 },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },

  login: {
  color: 'black',
  fontSize: 25,
  bottom: 160,

 },
  input: {
   height: 40,
   margin: 12,
   borderWidth: 1,
   padding: 15,

  },

  image2: {
    width: 60,
    height: 60,
    left: 70,
  }

  })