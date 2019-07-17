import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import Login from './src/components/Login';
import bgImg from './src/images/maps.jpg';
import logo from './src/images/spotshot.png';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const App = () => (
  <ImageBackground source={bgImg} style={styles.container}>
    {/* <Login /> */}
    <View>
      <Image style={styles.logo} source={logo} />
    </View>
    <View style={styles.textContainer}>
      <TextInput
        style={styles.input}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
      />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    top: 70,
    width: screenHeight / 1.2,
    height: screenWidth / 1.2,
    resizeMode: 'contain'
  },
  input: {
    width: screenWidth - 75,
    fontSize: 16,
    height: 45,
    paddingLeft: 10,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    margin: 10,
  }
});

export default App;
