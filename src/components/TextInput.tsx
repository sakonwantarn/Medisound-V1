import React from "react";
import { View, Text, TextInput as RNTextInput } from "react-native";
import { styles } from "../res/styles";
import { colors } from "../res/colors";

interface Props {
  onChangeText(): void;
  value?: string;
  placeholder?: string;
  label?: string;
}

class TextInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { onChangeText, value, placeholder, label } = this.props;
    return (
      <View style={styles.textInputContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.textInputLabel}>{label}</Text>
        </View>
        <View style={{flex: 3, alignItems: "flex-end"}}>
          <RNTextInput
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={colors.GRAY_SEPARATOR} 
            style={styles.textInputForm}
          />
        </View>
      </View>
    );
  }
}

export default TextInput;
