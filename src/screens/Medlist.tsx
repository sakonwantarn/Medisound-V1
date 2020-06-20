import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedlistScreen from "./medlist/MedlistScreen";
import { colors } from "../res/colors";
import MedicineScreen from "./medlist/MedicineScren";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { NavigationProp } from "@react-navigation/native";

const Stack = createStackNavigator();

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class Medlist extends React.Component<Props> {
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
          name="MedListScreen"
          component={MedlistScreen}
          options={{
            title: "MedList",
            headerRight: () => (
              <Button
                onPress={() => this.props.navigation.navigate("AddMedicine")}
                type="text"
                icon="plus"
              >
                Add
              </Button>
            ),
          }}
        />
        <Stack.Screen name="AddMedicine" component={MedicineScreen} 
          options={{
            title: "Add Medicine",
            headerRight: () => (
              <Button
                onPress={() => this.props.navigation.navigate("MedListScreen")}
                type="text"
                icon="save"
              >
                Save
              </Button>
            ),
          }}/>
      </Stack.Navigator>
    );
  }
}
