import React from "react";
import { View, Image } from "react-native";
import TextInput from "../components/TextInput";
import { styles } from "../res/styles";
import { colors } from "../res/colors";
import { ScrollView } from "react-native-gesture-handler";

interface State {
  nameField: string;
  dateField: string;
  sexField: string;
  bloodField: string;
  weightField: string;
  heightField: string;
  wheelChairField: string;
}

export default class ProfileScreen extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      nameField: "Grany",
      dateField: "10 June 1962",
      sexField: "Female",
      bloodField: "A+",
      weightField: "65 Kg",
      heightField: "155 Cm",
      wheelChairField: "Yes",
    };
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: colors.WHITE}}>
        <View style={{alignContent: "center", justifyContent: "center", alignItems: "center", marginVertical: 20}}>
          <Image style={{width:90, height:90}} source={require("../../assets/images/profile.png")} />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            onChangeText={(nameField: any) =>
              this.setState({ nameField: nameField })
            }
            value={this.state.nameField}
            label="Name"
            placeholder="Name"
            editable={false}
          />
          <TextInput
            onChangeText={(dateField: any) =>
              this.setState({ dateField: dateField })
            }
            value={this.state.dateField}
            label="Birthday"
            placeholder="Date of Birth"
            editable={false}
          />
          <TextInput
            onChangeText={(sexField: any) =>
              this.setState({ sexField: sexField })
            }
            value={this.state.sexField}
            label="Sex"
            placeholder="Sex"
            editable={false}
          />
          <TextInput
            onChangeText={(bloodField: any) =>
              this.setState({ bloodField: bloodField })
            }
            value={this.state.bloodField}
            label="Blood Type"
            placeholder="Blood Type"
            editable={false}
          />
          <TextInput
            onChangeText={(weightField: any) =>
              this.setState({ weightField: weightField })
            }
            value={this.state.weightField}
            label="Weight"
            placeholder="Weight"
            editable={false}
          />
          <TextInput
            onChangeText={(heightField: any) =>
              this.setState({ heightField: heightField })
            }
            value={this.state.heightField}
            label="Height"
            placeholder="Height"
            editable={false}
          />
          <TextInput
            onChangeText={(wheelChairField: any) =>
              this.setState({ wheelChairField: wheelChairField })
            }
            value={this.state.wheelChairField}
            label="Wheelchair"
            placeholder="Wheelchair"
            editable={false}
            last
          />
        </View>
      </ScrollView>
    );
  }
}
