import { View,Text,StyleSheet } from 'react-native';
import Box from './components/Box';

export default function App() {
  
  return (
    <View style={styles.container}>
        <Box style={{ backgroundColor: "green",alignSelf: "flex-start"}}>Box 1</Box>
        <Box style={{ backgroundColor: "blue", alignSelf: "flex-end"}}>Box 2</Box>
        <Box style={{ backgroundColor: "red", alignSelf: "center"}}>Box 3</Box>
        <Box style={{ backgroundColor: "red", alignSelf: "center"}}>Box 3</Box>
        <Box style={{ backgroundColor: "red", alignSelf: "center"}}>Box 3</Box>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // flexDirection: "column-reverse", // column(defaulf), column-reverse,row,row-reverse
        // justifyContent: "space-evenly", // flex-start(default),center,flex-end,space-around, space-between,space-evenly
        alignItems: "stretch", // stretch(default), center, baseline,flex-start,flex-end
        borderWidth: 6,
        borderColor: "yellow",
        // flex:1
        height: 200,
        flexWrap: "wrap" // belirli bir yükseklik varsa box'ın içine wrap etmeyi sağlar
    }
})
// alignSelf: "flex-start" flex item'lara uygulanır. flex-end, center vs. kendi başlarına yönlemek için