import { View,Text,StyleSheet,Dimensions } from 'react-native';
import Box from './components/Box';

export default function App() {
  
  return (
    <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
    </View>
  );
}
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "plum",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
      width: deviceWidth > 500 ? "%70" : "90%",
      height: deviceHeight > 600 ? "60%" : "90%",
      backgroundColor: "lightblue",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: deviceWidth > 500 ? 50 : 24
    }
})