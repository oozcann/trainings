import { View,Text,Image,ImageBackground } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum',paddingTop: 20}}>
        {/*
        <Text><Text style={{color: 'white'}}>Hello</Text> World!</Text>
        <Image source={logoImg} style={{width: 300, height: 300}}></Image>
        <Image source={{uri: 'https://picsum.photos/300'}} style={{width: 300, height: 300}}></Image>
        */}
        <ImageBackground source={logoImg} style={{flex: 1}}>
          <Text></Text>
        </ImageBackground>
    </View>
  );
}

