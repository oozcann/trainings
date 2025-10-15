import { ScrollView,StyleSheet,Platform } from 'react-native';
import PokemonCard from './components/Pokemon/PokemonCard';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const charmanderData = {
        name: "Charmander",
        image: require("./assets/charmander.png"),
        type: "Fire",
        hp: 39,
        moves: ["Scratch", "Ember", "Growl", "Leer"],
        weaknesses: ["Water", "Rock"],
    };

    const squirtleData = {
        name: "Squirtle",
        image: require("./assets/squirtle.png"), // Replace with the actual image path
        type: "Water",
        hp: 44,
        moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
        weaknesses: ["Electric", "Grass"],
    };

    const bulbasaurData = {
        name: "Bulbasaur",
        image: require("./assets/bulbasaur.png"), // Replace with the actual image path
        type: "Grass",
        hp: 45,
        moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    };

    const pikachuData = {
        name: "Pikachu",
        image: require("./assets/pikachu.png"), // Replace with the actual image path
        type: "Electric",
        hp: 35,
        moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
        weaknesses: ["Ground"],
    };
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <PokemonCard {...charmanderData} />
                <PokemonCard {...squirtleData} />
                <PokemonCard {...bulbasaurData} />
                <PokemonCard {...pikachuData} />
            </ScrollView>
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