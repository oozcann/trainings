// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/Profile";
import CourseListScreen from "./screens/CourseList";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="CourseList" component={CourseListScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}