import React from "react"; 
import { View, Text } from "react-native";
import TextInput from "../../components/TextInput";

export default class MedicineScreen extends React.Component {
  render() {
    return (
        <View>
            <Text>Medicine Info</Text>
            <View style={{backgroundColor:"white"}}>
                <TextInput label="NAME" placeholder="name"/>
            </View>
        </View>
    );
  }
}
