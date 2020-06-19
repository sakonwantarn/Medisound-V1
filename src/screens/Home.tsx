import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../res/colors";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.ORANGE_LIGHT,
          },
          headerTitleStyle: {
            color: colors.RED_BROWN,
          },
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            color: colors.RED_BROWN,
          },
          headerBackImage: () => (
            <Ionicons
              name="ios-arrow-back"
              style={{ marginLeft: 12, marginRight: 8, top: 1 }}
              size={28}
              color={colors.RED_BROWN}
            />
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    );
  }
}
