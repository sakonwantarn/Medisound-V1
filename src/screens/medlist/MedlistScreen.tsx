import React from "react";
import { Text, View, Image } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { default as Header } from "../../components/header/Medlist";
import { styles } from "../../res/styles";
import { colors } from "../../res/colors";
import { NavigationProp } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-dsas-3ad53abb28ba",
    title: "Tatrazine",
    time: "13.00",
  },
  {
    id: "bd7acbea-c1b1-46c2-asdw-3ad53abb28ba",
    title: "Vitamins C",
    time: "13.00",
  },
];

const SDATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Paracetamol",
    time: "18.30",
  },
];

const NODATA = [];

interface Props {
  navigation: NavigationProp<any, any>;
}

export default class MedlistScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      morningMedicine: DATA,
    };
  }
  render() {
    const { navigation } = this.props;
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
            data={NODATA}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={({ index }) =>
              index === 0 || index === NODATA.length - 1 ? null : (
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
                  <View style={styles.medlistItemImageContainer}></View>
                  <View style={styles.medlistItemMedicineContainer}>
                    <Text style={styles.medlistItemText}>{item.title}</Text>
                    <Text style={styles.medlistItemText}>10 mg</Text>
                  </View>
                  <View style={styles.medlistItemTimeContainer}>
                    <Text style={styles.medlistItemText}>Before Meal</Text>
                    <Text style={styles.medlistItemText}>07.00</Text>
                  </View>
                </View>
              );
            }}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              backgroundColor: colors.WHITE,
              borderRadius: 6,
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
            data={DATA}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={({ index }) =>
              index === 0 || index === DATA.length - 1 ? null : (
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
                    <Text style={styles.medlistItemText}>{item.title}</Text>
                    <Text style={styles.medlistItemText}>1 Capsule</Text>
                  </View>
                  <View style={styles.medlistItemTimeContainer}>
                    <Text style={styles.medlistItemText}>Before Meal</Text>
                    <Text style={styles.medlistItemText}>07.00</Text>
                  </View>
                </View>
              );
            }}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              backgroundColor: colors.WHITE,
              borderRadius: 6,
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
          <Header title={"EVENING"} />
          <FlatList
            data={SDATA}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={({ index }) =>
              index === 0 || index === SDATA.length - 1 ? null : (
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
                    <Text style={styles.medlistItemText}>{item.title}</Text>
                    <Text style={styles.medlistItemText}>500 mg</Text>
                  </View>
                  <View style={styles.medlistItemTimeContainer}>
                    <Text style={styles.medlistItemText}>Before Meal</Text>
                    <Text style={styles.medlistItemText}>07.00</Text>
                  </View>
                </View>
              );
            }}
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
              backgroundColor: colors.WHITE,
              borderRadius: 6,
              paddingVertical: 0,
              paddingHorizontal: 8,
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
