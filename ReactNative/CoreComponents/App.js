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
        width: 200,
        height: 100,
        padding: 10
    },
    lightblueBg: {
        backgroundColor: "lightblue",
    },
    lightgreenBg: {
        backgroundColor: "lightgreen",
    }
})