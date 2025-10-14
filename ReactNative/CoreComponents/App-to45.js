import { View,Text,StyleSheet,Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Welcome!</Text>
                <CustomButton title="Press Me" onPress={() => alert("Pressed!")} />
            </View>
        </View>
        </SafeAreaView>
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "plum"
    },
    container: {
        backgroundColor: "plum",
        flex: 1,
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? 10 : 0
    },
    box: {
      // padding: 20,
    },
    text: {
      fontSize: 24
    }
})








{/* Tutorial - 42 
import { View,Text,StyleSheet,Dimensions,useWindowDimensions } from 'react-native';

export default function App() {
  

  const deviceWidth = useWindowDimensions().width;
  const deviceHeight = useWindowDimensions().height;
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
*/}    