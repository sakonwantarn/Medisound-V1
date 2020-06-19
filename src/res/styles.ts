import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    alignContent: "center",
    backgroundColor: colors.WHITE,
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#00000090",
  },
  modalView: {
    alignItems: "center",
    borderRadius: 6,
    width: "90%",
    paddingVertical: 20,
    backgroundColor: colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: colors.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 22,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  medlistHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 12,
  },
  medlistHeaderTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.BLACK_FONT,
  },
  medlistItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  medlistItemImageContainer: {
    flex: 1 / 2,
    marginRight: 8,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  medlistItemMedicineContainer: {
    flex: 3,
  },
  medlistItemTimeContainer: {
    flex: 2,
    alignItems: "flex-end",
  },
  medlistItemText: {
    fontSize: 18,
  },
  medlistNoDataText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.GRAY_TEXT,
  },

  button: {
    flexDirection: "row",
  },
  buttonSolid: {
    backgroundColor: colors.ORANGE,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: colors.RED_BROWN,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  buttonTextStyle: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  buttonText: {
    color: colors.RED_BROWN,
    fontSize: 16,
    fontWeight: "bold",
  },

  textInputContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    paddingVertical: 12,
    borderColor: colors.GRAY_SEPARATOR
  },
  textInputForm: {
    color: colors.BLACK_FONT,
    fontSize: 18,
    textAlign: "right",
  },
  textInputLabel: {
    color: colors.GRAY_TEXT,
    fontSize: 18,
  },
  formContainer: {
    backgroundColor: "white",
    borderColor: colors.GRAY_SEPARATOR,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 12,
    marginVertical: 8
  },

  homeListContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: 10,
    backgroundColor: colors.WHITE,
    padding: 8,
    borderRadius: 8,
  },
  homeListHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY_SEPARATOR,
    paddingBottom: 8,
  },
  homeListHeaderText: {
    color: colors.BLACK_FONT,
    fontSize: 18,
    fontWeight: "bold",
  },
  homeListContent: {
    marginTop: 8,
    flexDirection: "row",
  },
  homeListButtonContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  homeHeaderText: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 4,
  },

  scannerGuideText: {
    color: colors.WHITE,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
  },
  scannerGuide: {
    backgroundColor: "#00000080",
    flex: 1,
  },
});
