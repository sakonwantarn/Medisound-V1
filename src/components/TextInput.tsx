import React from "react";
import { View, Text, TextInput as RNTextInput } from "react-native";
import { styles } from "../res/styles";
import { colors } from "../res/colors";

interface Props {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  label?: string;
  last?: boolean;
  editable?: boolean;
}

class TextInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    last: false,
    editable: true
  }

  render() {
    const { onChangeText, value, placeholder, label, last, editable } = this.props;
    return (
      <View style={[styles.textInputContainer, last?null:{borderBottomWidth: 1}]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textInputLabel}>{label}</Text>
        </View>
        <View style={{ flex: 2, alignItems: "flex-end" }}>
          <RNTextInput
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.GRAY_SEPARATOR}
            style={styles.textInputForm}
            editable={editable}
          />
        </View>
      </View>
    );
  }
}

export default TextInput;
