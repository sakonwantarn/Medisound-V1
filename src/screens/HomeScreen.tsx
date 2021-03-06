import React from "react";
import { FlatList, View, Text, Image, ImageBackground } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import { styles } from "../res/styles";
import { colors } from "../res/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import Modal from "../components/Modal";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    medicineList: state.medicine,
  };
};

interface Props {
  navigation: NavigationProp<any, any>;
}

interface State {
  modalVisible: boolean;
}

export class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentDidMount() {
    console.log(this.props.medicineList);
  }

  render() {
    console.log(this.props.medicineList);
    const { navigation } = this.props;
    return (
      <ScreenContainer>
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: "center",
          }}
          source={require("../../assets/images/wallpaper.png")}
        >
          <FlatList
            data={this.props.medicineList.medicine}
            keyExtractor={(item) => `${item.id}`}
            ListEmptyComponent={() => {
              return (
                <View style={styles.homeListContainer}>
                  <Text style={styles.medlistNoDataText}>
                    No Medicine To Consume.
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("MedList")}
                  >
                    <Text
                      style={[styles.medlistNoDataText, { color: "#001440" }]}
                    >
                      Check MedList.
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.homeListContainer}>
                  <View style={styles.homeListHeader}>
                    <Text style={styles.homeListHeaderText}>
                      {item.specificTime} on {item.time}
                    </Text>
                  </View>
                  <View style={styles.homeListContent}>
                    <View style={[styles.homeListButtonContainer, { flex: 1 }]}>
                      <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../assets/icons/tablet.png")}
                      />
                    </View>
                    <View style={{ flex: 3 }}>
                      <Text style={styles.homeListHeaderText}>{item.name}</Text>
                      <Text style={{ color: colors.BLACK_FONT, fontSize: 18 }}>
                        {item.detail}
                      </Text>
                    </View>
                    <View style={{ flex: 2 }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ modalVisible: true });
                        }}
                        style={styles.homeListButtonContainer}
                      >
                        <Text
                          style={[
                            styles.homeListHeaderText,
                            { color: colors.GREEN_SUCESS },
                          ]}
                        >
                          Did You?
                        </Text>
                        {item.done ? (
                          <Feather
                            name="check-circle"
                            size={24}
                            color={colors.GREEN_SUCESS}
                          />
                        ) : (
                          <Feather
                            name="circle"
                            size={24}
                            color={colors.GREEN_SUCESS}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
            style={{
              paddingHorizontal: 20,
            }}
            ListHeaderComponent={
              <View style={[styles.containerCenter, { marginTop: 28 }]}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <Image
                    style={{ width: 200, height: 200 }}
                    source={require("../../assets/images/home.png")}
                  />
                </TouchableOpacity>
                <Text style={styles.homeHeaderText}>Hallo, Granny!</Text>
                <Text style={styles.homeHeaderText}>Medicine For Today :</Text>
              </View>
            }
          />
          <Modal
            type="done"
            description={"WELL DONE!"}
            buttonTitle={"CLOSE"}
            onPress={() => {
              this.setState({ modalVisible: false });
            }}
            onRequestClose={() => {
              this.setState({ modalVisible: false });
            }}
            visible={this.state.modalVisible}
          />
        </ImageBackground>
      </ScreenContainer>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);
