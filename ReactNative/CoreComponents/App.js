import { View,Text,StyleSheet } from 'react-native';
import Box from './components/Box';

export default function App() {
  
  return (
    <View style={styles.container}>
        <Box style={{flex:1, backgroundColor: "green"}}>Box 1</Box>
        <Box style={{flex:3, backgroundColor: "blue"}}>Box 2</Box>
        <Box style={{flex:2, backgroundColor: "red"}}>Box 3</Box>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderWidth: 6,
        borderColor: "yellow",
        flex:1
    }
})