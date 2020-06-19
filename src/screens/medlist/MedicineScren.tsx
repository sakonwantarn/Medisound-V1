import React, { Props } from "react";
import { View, Text } from "react-native";
import TextInput from "../../components/TextInput";
import { colors } from "../../res/colors";
import { styles } from "../../res/styles";
import Button from "../../components/Button";

interface State {
  nameField: string;
  detailField: string;
  shapeField: string;
  colorFiled: string;
  timeField: string;
  categoryField: string;
}

export default class MedicineScreen extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      nameField: "",
      detailField: "",
      shapeField: "",
      colorFiled: "",
      timeField: "",
      categoryField: "",
    };
  }

  render() {
    return (
      <View>
        <View
          style={{
            alignItems: "flex-end",
            marginVertical: 20,
            marginRight: 12,
          }}
        >
          <Button type="outline">SCAN</Button>
        </View>
        <Text
          style={[
            styles.homeListHeaderText,
            { marginLeft: 32, marginVertical: 2 },
          ]}
        >
          Medicine Info
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            onChangeText={(nameField: any) =>
              this.setState({ nameField: nameField })
            }
            value={this.state.nameField}
            label="Name"
            placeholder="Name"
          />
          <TextInput
            onChangeText={(detailField: any) =>
              this.setState({ detailField: detailField })
            }
            value={this.state.detailField}
            label="Detail"
            placeholder="Detail"
          />
          <TextInput
            onChangeText={(shapeField: any) =>
              this.setState({ shapeField: shapeField })
            }
            value={this.state.shapeField}
            label="Shape"
            placeholder="Shape"
          />
          <TextInput
            onChangeText={(colorFiled: any) =>
              this.setState({ colorFiled: colorFiled })
            }
            value={this.state.colorFiled}
            label="Color"
            placeholder="Color"
            last
          />
        </View>
        <Text
          style={[
            styles.homeListHeaderText,
            { marginLeft: 32, marginVertical: 2 },
          ]}
        >
          Medicine Time
        </Text>
        <View style={styles.formContainer}>
          <TextInput
            onChangeText={(timeField: any) =>
              this.setState({ timeField: timeField })
            }
            value={this.state.timeField}
            label="Time"
            placeholder="Time"
          />
          <TextInput
            onChangeText={(categoryField: any) =>
              this.setState({ categoryField: categoryField })
            }
            value={this.state.categoryField}
            label="Category"
            placeholder="After meal"
            last
          />
        </View>
      </View>
    );
  }
}
