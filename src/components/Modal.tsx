import React from "react";
import { Modal as RNModal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../res/styles";
import { colors } from "../res/colors";

interface Props {
  animationType?: "slide" | "fade" | "none";
  transparent?: boolean;
  visible: boolean;
  onRequestClose(): void;
  description: string;
  buttonTitle: string;
  onPress(): void;
}

class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    animationType: "slide",
    transparent: true,
    visible: false,
  };

  render() {
    const {
      description,
      buttonTitle,
      animationType,
      transparent,
      visible,
      onRequestClose,
      onPress,
      ...res
    } = this.props;

    return (
      <RNModal
        animationType={animationType}
        transparent={visible}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{description}</Text>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: colors.BLUE }}
              onPress={onPress}
            >
              <Text style={styles.textStyle}>{buttonTitle}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RNModal>
    );
  }
}

export default Modal;
