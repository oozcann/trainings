import { ScrollView,View,Text,StyleSheet,Platform,StatusBar,FlatList } from 'react-native';
//import PokemonCard from './components/Pokemon/PokemonCard';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import pokemonList from './data.json';

export default function App() {
    
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            {/*
            <ScrollView style={styles.scrollView}>
                {
                    pokemonList.map(pokemon => {
                        return (
                            <View style={styles.card} key={pokemon.id}>
                                <Text style={styles.text}>{pokemon.type}</Text>
                                <Text style={styles.text}>{pokemon.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            */}
            <FlatList
                data={pokemonList}
                renderItem={({item}) => {
                    return(
                        <View style={styles.card} key={item.id}>
                            <Text style={styles.text}>{item.type}</Text>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "f5f5f5",
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    scrollView: {
        paddingHorizontal: 16
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16
    },
    text: {
        fontSize: 30
    }
})  