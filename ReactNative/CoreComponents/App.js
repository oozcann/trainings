import { View,Text,StyleSheet } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
        <Text>StyleSheet API</Text>
        <View style={[styles.box, styles.lightblueBg]}>
            <Text>Lightblue Box</Text>
        </View>
        <View style={[styles.box, styles.lightgreenBg]}>
            <Text>Lightgreen Box</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#bfbaba',padding: 20},
    box: {
        width: "100%",
        height: "25%",
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: 10
    },
    lightblueBg: {
        backgroundColor: "lightblue",
    },
    lightgreenBg: {
        backgroundColor: "lightgreen",
    }
})