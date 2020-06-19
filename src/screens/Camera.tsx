import React from "react"; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { colors } from "../res/colors"; 
import ScannerScreen from "./ScannerScreen";

const Stack = createStackNavigator();

export default class Camera extends React.Component {
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
        <Stack.Screen name="Scan Label" component={ScannerScreen} />  
      </Stack.Navigator>
    );
  }
}
