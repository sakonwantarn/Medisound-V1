import React from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import { styles } from "../../res/styles";

interface Props {
  title: string;
  onPress(): void;
}

class MedlistHeader extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.medlistHeaderContainer}>
        <View style={{flex:1}}>
          <Text style={styles.medlistHeaderTitle}>{this.props.title}</Text>
        </View>
        <View style={{flex:1, alignItems: "flex-end"}}>
          <Button type="outline" onPress={this.props.onPress} icon={"plus"}>{"ADD"}</Button>
        </View>
      </View>
    );
  }
}

export default MedlistHeader;
