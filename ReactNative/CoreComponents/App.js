import { View,Text,Image,ImageBackground, ScrollView } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum',padding: 20}}>
        {/* Tutorial - 10
        <Text><Text style={{color: 'white'}}>Hello</Text> World!</Text>
        <Image source={logoImg} style={{width: 300, height: 300}}></Image>
        <Image source={{uri: 'https://picsum.photos/300'}} style={{width: 300, height: 300}}></Image>
        <ImageBackground source={logoImg} style={{flex: 1}}>
          <Text></Text>
        </ImageBackground>
        */}
        {/* Tutorial - 11
        <ScrollView>
          <Image source={logoImg} style={{width: 300, height: 300}}></Image>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in ex vulputate, venenatis risus id, aliquam sapien. Fusce at massa blandit, lacinia ligula eget, tempus ex. Vivamus non neque sed ligula mollis molestie. Quisque luctus nibh vitae rutrum accumsan. Aliquam auctor ultrices sem, ut venenatis sapien ultrices nec. Aenean purus risus, maximus sit amet pulvinar id, eleifend quis ex. Donec consequat magna sed nibh feugiat, id ultrices eros porta. Pellentesque volutpat ante et tellus pharetra consectetur. Praesent a convallis augue. In tristique malesuada sagittis. Mauris dictum pretium ex ac semper. In tincidunt consectetur odio ac viverra. Fusce tincidunt velit vel neque convallis, non posuere augue consequat. In tincidunt dignissim nibh at tincidunt.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in ex vulputate, venenatis risus id, aliquam sapien. Fusce at massa blandit, lacinia ligula eget, tempus ex. Vivamus non neque sed ligula mollis molestie. Quisque luctus nibh vitae rutrum accumsan. Aliquam auctor ultrices sem, ut venenatis sapien ultrices nec. Aenean purus risus, maximus sit amet pulvinar id, eleifend quis ex. Donec consequat magna sed nibh feugiat, id ultrices eros porta. Pellentesque volutpat ante et tellus pharetra consectetur. Praesent a convallis augue. In tristique malesuada sagittis. Mauris dictum pretium ex ac semper. In tincidunt consectetur odio ac viverra. Fusce tincidunt velit vel neque convallis, non posuere augue consequat. In tincidunt dignissim nibh at tincidunt.
            Duis quis ante felis. In hac habitasse platea dictumst. Sed ultrices orci sed augue volutpat dignissim. Sed at cursus leo, vel finibus lacus. Fusce iaculis est et nisl fringilla, at tempus nibh consequat. Sed commodo scelerisque orci sit amet vulputate. Curabitur eu turpis imperdiet, luctus urna a, dapibus lorem. Sed id ligula in lectus consequat malesuada in eu dui. Curabitur erat leo, fermentum ut egestas ac, congue in erat. Sed scelerisque metus eget tempus semper.
            Duis quis ante felis. In hac habitasse platea dictumst. Sed ultrices orci sed augue volutpat dignissim. Sed at cursus leo, vel finibus lacus. Fusce iaculis est et nisl fringilla, at tempus nibh consequat. Sed commodo scelerisque orci sit amet vulputate. Curabitur eu turpis imperdiet, luctus urna a, dapibus lorem. Sed id ligula in lectus consequat malesuada in eu dui. Curabitur erat leo, fermentum ut egestas ac, congue in erat. Sed scelerisque metus eget tempus semper.
          </Text>
          <Image source={logoImg} style={{width: 300, height: 300}}></Image>
        </ScrollView>
        */}
    </View>
  );
}

