import { View,Text,StyleSheet } from 'react-native';
import Box from './components/Box';

export default function App() {
  
  return (
    <View style={styles.container}>
        <Box style={{backgroundColor: "green"}}>Box 1</Box>
        <Box style={{backgroundColor: "blue"}}>Box 2</Box>
        <Box style={{backgroundColor: "red"}}>Box 3</Box>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderWidth: 6,
        borderColor: "yellow"
    }
})