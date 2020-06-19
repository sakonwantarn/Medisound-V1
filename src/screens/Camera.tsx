import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../res/colors";
import ScannerScreen from "./ScannerScreen";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class Camera extends React.Component<Props> {
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
        }}
      >
        <Stack.Screen
          name="Scan Label"
          component={ScannerScreen}
          options={{
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Ionicons
                  name="ios-arrow-back"
                  style={{ marginLeft: 12, marginRight: 8, top: 1 }}
                  size={28}
                  color={colors.RED_BROWN}
                />
                <Text style={{ color: colors.RED_BROWN, fontSize: 16 }}>
                  Back
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}
