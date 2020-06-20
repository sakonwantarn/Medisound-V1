import React from "react";
import { Modal as RNModal, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../res/styles";
import { colors } from "../res/colors";
import Button from "./Button";

interface Props {
  animationType?: "slide" | "fade" | "none";
  transparent?: boolean;
  visible: boolean;
  onRequestClose(): void;
  description: string;
  buttonTitle: string;
  onPress(): void;
  type?: "normal" | "done";
}

class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    animationType: "fade",
    transparent: true,
    visible: false,
    type: "normal",
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
      type,
      ...res
    } = this.props;
    let textColor: string;

    if (type === "done") {
      textColor = colors.GREEN_SUCESS;
    } else {
      textColor = colors.RED_BROWN;
    }

    return (
      <RNModal
        animationType={animationType}
        transparent={visible}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={{width: 240, height: 240}} source={require("../../assets/images/elephant.png")}/>
            <Text style={[styles.modalText, { color: textColor }]}>
              {description}
            </Text>
            <Button onPress={onPress} type="solid">
              {buttonTitle}
            </Button>
          </View>
        </View>
      </RNModal>
    );
  }
}

export default Modal;
