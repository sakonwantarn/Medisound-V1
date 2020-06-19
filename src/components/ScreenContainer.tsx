import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { styles } from "../res/styles";

interface Props {
  children: any;
}

class ScreenContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        {this.props.children}
      </SafeAreaView>
    );
  }
}

export default ScreenContainer;
