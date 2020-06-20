import React from "react";
import { View, Text, KeyboardAvoidingView, SafeAreaView } from "react-native";
import TextInput from "../../components/TextInput";
import { colors } from "../../res/colors";
import { styles } from "../../res/styles";
import Button from "../../components/Button";
import { connect } from "react-redux";
import { saveMedicine } from "../../stores/medicine/actions";
import { bindActionCreators } from "redux";
import { NavigationProp } from "@react-navigation/native";
import { v4 as uuid } from "uuid";
import { ScrollView } from "react-native-gesture-handler";

interface State {
  nameField: string;
  detailField: string;
  shapeField: string;
  colorFiled: string;
  timeField: string;
  specificTimeField: string;
  categoryField: string;
}

interface Props {
  navigation: NavigationProp<any, any>;
}

const mapDispatchToProps = (dispatch: any) => ({
  saveMedicine: bindActionCreators(saveMedicine, dispatch),
});

export class MedicineScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      nameField: "",
      detailField: "",
      shapeField: "",
      colorFiled: "",
      timeField: "",
      specificTimeField: "",
      categoryField: "",
    };
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => this.handleSave()} type="text" icon="save">
          Save
        </Button>
      ),
    });
  }

  handleSave() {
    let medicine = {
      id: uuid(),
      name: this.state.nameField,
      detail: this.state.detailField,
      shape: this.state.shapeField,
      color: this.state.colorFiled,
      time: this.state.timeField,
      specificTime: this.state.specificTimeField,
      categoryTime: this.state.categoryField.toUpperCase(),
    };
    this.props.saveMedicine(medicine);
    this.setState({
      nameField: "",
      detailField: "",
      shapeField: "",
      colorFiled: "",
      timeField: "",
      specificTimeField: "",
      categoryField: "",
    });
    this.props.navigation.navigate("MedListScreen");
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: colors.WHITE }}>
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: "center" }}
          behavior="padding"
          enabled
        >
          <View style={{alignItems: "flex-end", paddingRight:12, paddingTop: 20}}>
            <Button onPress={()=>alert("Coming soon!")} type="outline">
              SCAN
            </Button>
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
              placeholder="Acetylcysteine"
            />
            <TextInput
              onChangeText={(detailField: any) =>
                this.setState({ detailField: detailField })
              }
              value={this.state.detailField}
              label="Detail"
              placeholder="1 tablet"
            />
            <TextInput
              onChangeText={(shapeField: any) =>
                this.setState({ shapeField: shapeField })
              }
              value={this.state.shapeField}
              label="Shape"
              placeholder="Tablet"
            />
            <TextInput
              onChangeText={(colorFiled: any) =>
                this.setState({ colorFiled: colorFiled })
              }
              value={this.state.colorFiled}
              label="Color"
              placeholder="White"
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
              placeholder="19.00"
            />
            <TextInput
              onChangeText={(specificTimeField: any) =>
                this.setState({ specificTimeField: specificTimeField })
              }
              value={this.state.specificTimeField}
              label="Specific"
              placeholder="After meal"
            />
            <TextInput
              onChangeText={(categoryField: any) =>
                this.setState({ categoryField: categoryField })
              }
              value={this.state.categoryField}
              label="Category"
              placeholder="Evening"
              last
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default connect(null, mapDispatchToProps)(MedicineScreen);
