import { View,Text,StyleSheet,Dimensions } from 'react-native';
import { useState,useEffect } from 'react';
import Box from './components/Box';

export default function App() {
  
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window")
  })
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change",({window}) => {
      setDimensions({window});
    })
    return () => subscription?.remove();
  })
  const {window} = dimensions;
  const deviceWidth = window.width;
  const deviceHeight = window.height;
console.log(deviceHeight,deviceWidth);
  return (
    <View style={styles.container}>
        <View style={[styles.box, {
          width: deviceWidth > 500 ? "70%" : "90%",
          height: deviceHeight > 600 ? "60%" : "90%",
        }]}>
          <Text style={{fontSize: deviceWidth > 500 ? 50 : 24}}>Welcome!</Text>
        </View>
    </View>
  );
}
// const deviceWidth = Dimensions.get("window").width;
// const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "plum",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
      // width: deviceWidth > 500 ? "%70" : "90%",
      // height: deviceHeight > 600 ? "60%" : "90%",
      backgroundColor: "lightblue",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      // fontSize: deviceWidth > 500 ? 50 : 24
    }
})