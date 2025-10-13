import { View,Text,StyleSheet } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
        <Text>StyleSheet API</Text>
        <View style={styles.darkMode}>
            <Text style={styles.darkModeText}>Style Inheritance</Text>
        </View>
        <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
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
    darkMode: {
        backgroundColor: "black"
    },
    darkModeText: {
        color: "white"
    },
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
    },
    boxShadow: {
        shadowColor: "#e50a0aff",
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.7,
        shadowRadius: 4
    }
})