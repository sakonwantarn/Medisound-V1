import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "../res/styles";
import { colors } from "../res/colors";

interface Props {
  children?: string;
  icon?: any;
  type?: "outline" | "solid";
  onPress(): void;
}

class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    type: "solid",
    icon: false,
  };

  render() {
    const { children, icon, type, onPress } = this.props;
    if (type === "outline") {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{ ...styles.button, ...styles.buttonOutline }}
        >
          {icon ? (
            <Feather name={icon} size={20} color={colors.RED_BROWN} />
          ) : (
            icon
          )}
          <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
      );
    } else
      return (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, styles.buttonSolid]}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
      );
  }
}

export default Button;
