import { View,Text,StyleSheet,Platform } from 'react-native';
import PokemonCard from './components/Pokemon/PokemonCard';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View>
                <PokemonCard></PokemonCard>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "f5f5f5",
        flex: 1,
        paddingTop: Platform.OS === "android" ? 25 : 0
    }
})  