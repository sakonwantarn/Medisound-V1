import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: colors.WHITE,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  medlistHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 12
  },
  medlistHeaderTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.BLACK_FONT,
  },
  medlistItemContainer: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 10
  },
  medlistItemImageContainer: {
    flex:1/2,
  },
  medlistItemMedicineContainer: {
    flex:3,
  },
  medlistItemTimeContainer: {
    flex:2,
    alignItems: "flex-end"
  },
  medlistItemText: {
    fontSize: 18
  },
  medlistNoDataText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.GRAY_TEXT
  },


  button: {
    flexDirection:"row"
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: colors.RED_BROWN, 
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2
  },
  buttonText: {
    color: colors.RED_BROWN,
    fontSize: 18,
    fontWeight: "bold"
  },

  textInputContainer: { 
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 12
  },
  textInputForm: {
    color: colors.BLACK_FONT,
    fontSize: 20,
    textAlign: "right",
  }, 
  textInputLabel: {
    color: colors.GRAY_TEXT,
    fontSize: 20,
  }
});
