import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { default as Header } from "../../components/header/Medlist";
import { styles } from "../../res/styles";
import { colors } from "../../res/colors";
import { NavigationProp } from "@react-navigation/native";
import { connect } from "react-redux";

interface Props {
  navigation: NavigationProp<any, any>;
}

export class MedlistScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  filterData(category: string) {
    let medicineList = this.props.medicineList.medicine;
    let filtered = [];
    for (let medicine of medicineList) {
      if (medicine.categoryTime === category.toUpperCase( )) {
        filtered.push(medicine);
      }
    }
    return filtered;
  }

  render() {
    const { navigation } = this.props;
    const morningMedicine = this.filterData("Morning");
    const afternoonMedicine = this.filterData("Afternoon");
    const eveningMedicine = this.filterData("Evening");

    return (
      <ScrollView style={{ backgroundColor: colors.WHITE, flex: 1 }}>
        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          <Header
            onPress={() => navigation.navigate("AddMedicine")}
            title={"MORNING"}
          />
          <FlatList
            data={morningMedicine}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={({ index }) =>
              index === 0 || index === morningMedicine.length - 1 ? null : (
                <View
                  style={{
                    borderWidth: 1 / 2,
                    borderColor: colors.GRAY_SEPARATOR,
                  }}
                />
              )
            }
            ListEmptyComponent={() => {
              return (
                <View style={styles.medlistItemContainer}>
                  <Text style={styles.medlistNoDataText}>
                    NO MEDICINE ADDED YET
                  </Text>
                </View>
              );
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.medlistItemContainer}>
                  <View style={styles.medlistItemImageContainer}>
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../../../assets/icons/tablet.png")}
                    />
                  </View>
                  <View style={styles.medlistItemMedicineContainer}>
                    <Text
                      style={[styles.medlistItemText, { fontWeight: "bold" }]}
                    >
                      {item.name}
                    </Text>
                    <Text style={styles.medlistItemText}>{item.detail}</Text>
                  </View>
                  <View style={styles.medlistItemTimeContainer}>
                    <Text style={styles.medlistItemText}>
                      {item.specificTime}
                    </Text>
                    <Text style={styles.medlistItemText}>{item.time}</Text>
                  </View>
                </View>
              );
            }}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              backgroundColor: colors.WHITE,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: colors.GRAY_SEPARATOR,
              paddingVertical: 0,
              paddingHorizontal: 8,
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          <Header title={"AFTERNOON"} />
          <FlatList
            data={afternoonMedicine}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={({ index }) =>
              index === 0 || index === afternoonMedicine.length - 1 ? null : (
                <View
                  style={{
                    borderWidth: 1 / 2,
                    borderColor: colors.GRAY_SEPARATOR,
                  }}
                />
              )
            }
            ListEmptyComponent={() => {
              return (
                <View style={styles.medlistItemContainer}>
                  <Text style={styles.medlistNoDataText}>
                    NO MEDICINE ADDED YET
                  </Text>
                </View>
              );
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.medlistItemContainer}>
                  <View style={styles.medlistItemImageContainer}>
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../../../assets/icons/tablet.png")}
                    />
                  </View>
                  <View style={styles.medlistItemMedicineContainer}>
                    <Text
                      style={[styles.medlistItemText, { fontWeight: "bold" }]}
                    >
                      {item.name}
                    </Text>
                    <Text style={styles.medlistItemText}>{item.detail}</Text>
                  </View>
                  <View style={styles.medlistItemTimeContainer}>
                    <Text style={styles.medlistItemText}>
                      {item.specificTime}
                    </Text>
                    <Text style={styles.medlistItemText}>{item.time}</Text>
                  </View>
                </View>
              );
            }}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              backgroundColor: colors.WHITE,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: colors.GRAY_SEPARATOR,
              paddingVertical: 0,
              paddingHorizontal: 8,
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}
        ></View>
        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          <Header title={"EVENING"} />
          <FlatList
            data={eveningMedicine}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={({ index }) =>
              index === 0 || index === eveningMedicine.length - 1 ? null : (
                <View
                  style={{
                    borderWidth: 1 / 2,
                    borderColor: colors.GRAY_SEPARATOR,
                  }}
                />
              )
            }
            ListEmptyComponent={() => {
              return (
                <View style={styles.medlistItemContainer}>
                  <Text style={styles.medlistNoDataText}>
                    NO MEDICINE ADDED YET
                  </Text>
                </View>
              );
            }}
            renderItem={({ item }) => {
              return (
                <View style={styles.medlistItemContainer}>
                  <View style={styles.medlistItemImageContainer}>
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("../../../assets/icons/tablet.png")}
                    />
                  </View>
                  <View style={styles.medlistItemMedicineContainer}>
                    <Text
                      style={[styles.medlistItemText, { fontWeight: "bold" }]}
                    >
                      {item.name}
                    </Text>
                    <Text style={styles.medlistItemText}>{item.detail}</Text>
                  </View>
                  <View style={styles.medlistItemTimeContainer}>
                    <Text style={styles.medlistItemText}>
                      {item.specificTime}
                    </Text>
                    <Text style={styles.medlistItemText}>{item.time}</Text>
                  </View>
                </View>
              );
            }}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,

              elevation: 3,
              backgroundColor: colors.WHITE,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: colors.GRAY_SEPARATOR,
              paddingVertical: 0,
              paddingHorizontal: 8,
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
          }}
        ></View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    medicineList: state.medicine,
  };
};

export default connect(mapStateToProps)(MedlistScreen);
