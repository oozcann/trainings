import { useState } from 'react';
import { View,Text,Image,ImageBackground, ScrollView, Button,Pressable,Modal } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  let [isModalVisible, setIsModalVisible] = useState(false);
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
        {/* Tutorial - 12
        <Button title='Submit' onPress={() => console.log('Button pressed!')}></Button>
        */}
        {/* Tutorial - 13
        <Pressable onPress={() => console.debug('Image pressed!')}>
          <Image source={logoImg} style={{width: 300, height: 300}}></Image>
        </Pressable>
        <Pressable onPress={() => console.debug('Text pressed!')}>
          <Text>Tıklanabilir Yazı</Text>
        </Pressable>
        <Pressable 
          onPressIn={() => console.debug('OnPressIn pressed!')} 
          onPressOut={() => console.debug('OnPressOut pressed!')}
          onLongPress={() => console.log('onLongPress')}
          >
          <Text>Tıklanabilir Yazı</Text>
        </Pressable>
        */}
        {/* Tutorial - 14
        <Button title='Press' onPress={() => setIsModalVisible(true)}></Button>
        <Modal 
          visible={isModalVisible} 
          onRequestClose={() => setIsModalVisible(false)} 
          animationType='slide'
          presentationStyle='pageSheet'// only for ios
          >
          <View style={{flex: 1, backgroundColor: 'green',padding: 20}}>
            <Text>Modal Visible</Text>
            <Button title='Close' onPress={() => setIsModalVisible(false)}></Button>
          </View>
        </Modal>
        */}

    </View>
  );
}

