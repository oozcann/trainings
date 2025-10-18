// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/Profile";
import CourseListScreen from "./screens/CourseList";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStackNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
          // tabBarShowLabel: false,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "grey"
        }}>
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: () => <Ionicons name={"person"} size={20} />,
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen name="CourseList" component={CourseListScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
            <Tab.Screen
                name="About Stack"
                component={AboutStack}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}