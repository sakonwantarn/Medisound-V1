import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Camera from "./src/screens/Camera";
import Medlist from "./src/screens/Medlist";
import Home from "./src/screens/Home";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "./src/res/colors";

const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          backBehavior="history"
          tabBarOptions={{
            activeTintColor: colors.RED_BROWN,
            inactiveTintColor: colors.RED_BROWN_FADED,
            tabStyle: {
              backgroundColor: colors.ORANGE_LIGHT,
              paddingTop: 2,
              shadowColor: colors.BLACK,
              borderWidth: 0,
            },
            labelStyle: { fontSize: 16, fontWeight: "bold" },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => (
                <FontAwesome name="heart" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Camera"
            component={Camera}
            options={{
              tabBarIcon: ({ size, color }) => (
                <FontAwesome name="camera" size={size} color={color} />
              ),
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="MedList"
            component={Medlist}
            options={{
              tabBarIcon: ({ size, color }) => (
                <FontAwesome5 name="notes-medical" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
