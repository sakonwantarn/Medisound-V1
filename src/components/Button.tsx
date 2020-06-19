import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "../res/styles";
import { colors } from "../res/colors";

interface Props {
  children?: string;
  icon?: "plus" | "save" | "camera";
  type?: "outline" | "solid" | "text";
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
    } else if (type === "text") {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={{ ...styles.button, ...styles.buttonTextStyle }}
        >
          {icon === "plus" ? (
            <Feather name={icon} size={20} color={colors.RED_BROWN} />
          ) : icon === "save" ? (
            <Ionicons name="md-save" size={20} color={colors.RED_BROWN} style={{marginRight:6}} />
          ) : null}
          <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
      );
    } else {
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
}

export default Button;
