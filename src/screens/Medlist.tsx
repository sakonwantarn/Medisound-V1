import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import MedlistScreen from "./medlist/MedlistScreen";
import { colors } from "../res/colors";
import MedicineScreen from "./medlist/MedicineScren";

const Stack = createStackNavigator();

export default class Medlist extends React.Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={
          {
            headerStyle:{
              backgroundColor: colors.ORANGE_LIGHT
            },
            headerTitleStyle:{
              color: colors.RED_BROWN
            }
          }
        }
      >
        <Stack.Screen name="MedList" component={MedlistScreen} /> 
        <Stack.Screen name="AddMedicine" component={MedicineScreen} /> 
      </Stack.Navigator>
    );
  }
}
