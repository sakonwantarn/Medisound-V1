import React from "react";
import { Camera } from "expo-camera";
import {
  SafeAreaView,
  View, 
  Text,
  TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import * as ImageManipulator from "expo-image-manipulator";
import { activateKeepAwake } from "expo-keep-awake";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../res/styles";
import scraper from "../services/scraper";
import vajaAPI from "../services/vajaAPI";
import vision from "@react-native-firebase/ml-vision";
import Modal from "../components/Modal";

interface State {
  modalVisible: any;
}

export default class ScannerScreen extends React.Component<{}, State> {
  camera: Camera | null = null;
  constructor(props: {}) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentDidMount() {
    activateKeepAwake();
    this.cameraPermission();
  }

  async cameraPermission() {
    const { status } = await Camera.requestPermissionsAsync();
    console.log("camera status: ", status);
  }

  setModalVisible(visible: any) {
    this.setState({ modalVisible: visible });
  }

  takePicture = async () => {
    console.log("takePicture start");
    if (this.camera) {
      console.log("got the camera");
      let picture = await this.camera.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      console.log(picture.uri);
      this.processPictureManipulateBlock(picture.uri);
      console.log("Props ", this.props);
    }
  };

  processPictureManipulateBlock = async (pictPath: any) => {
    const manipResult = await ImageManipulator.manipulateAsync(pictPath);
    const processPictureManipulateBlock = await vision().textRecognizerProcessImage(
      manipResult.uri
    ); //change path to latest image in library
    console.log("Start here\n", "===========");

    // console.log(manipResult)
    console.log("text:", processPictureManipulateBlock.text);

    var string: any;
    string = processPictureManipulateBlock.text;
    console.log("typeof string var: " + typeof string);
    string = string.split(/\s|\n/g);

    console.log("typeof string var: " + typeof string);

    this.searchYa(string);
  };

  searchYa = async (stringArray: any) => {
    for (var i in stringArray) {
      stringArray[i] = stringArray[i].replace(/\W|[_]|\d|mg/g, "");
      stringArray[i] = stringArray[i].replace(/\s/g, "%20");

      if (stringArray[i] == "") console.log("text unavailable");
      else {
        var result = await scraper(stringArray[i]);
        console.log(stringArray[i] + "with the result: " + result);
        if (result != undefined || result != null)
          console.log("available text");
        console.log("\ndrug name", stringArray[i]);
        // console.log("Result",result)
        console.log("First drug name", stringArray[0]);
        if (result != 0)
          var result =
            "ชื่อยา" + " " + " " + stringArray[0] + " " + " " + result;
        console.log("Info before Vaja", result);
        result = result.replace("ชื่อยา0", "");
        this.playAudio(result);
      }
    }
  };

  playAudio = async (result: any) => {
    console.log("feed to vaja", result);
    var audioData = await vajaAPI(result);
    console.log("audio result", audioData);

    var soundObj = new Audio.Sound();
    var currentIndex = 0;

    var _status = await soundObj.getStatusAsync();
    var totIdx = audioData.length - 1;
    // firstly look at below here the logic to start the audio.. so if u wanna stop it.. you might change some code below.. :) i recommend u using state :)

    while (this.state.modalVisible) {
      // get status of sound object
      var _status = await soundObj.getStatusAsync();
      var totIdx = audioData.length - 1;
      console.log("currentIndex: " + currentIndex + " of " + totIdx);
      console.log(_status);
      // stopper if the sound index is more than the audio so stop it
      if (
        currentIndex >= audioData.length ||
        this.state.modalVisible == false
      ) {
        // here is to exit the while
        if (_status.isPlaying) soundObj.stopAsync();
        return;
      }
      // to load the audio files, if audio is not loaded load it
      if (_status.isLoaded != true) {
        try {
          await soundObj.loadAsync({ uri: audioData[currentIndex].uri }); // load the audio by the index..
        } catch (error) {
          console.error(error);
        }
      } else if (_status.isLoaded == true && _status.isPlaying == false) {
        // to undload the audio, if the audio is loaded but the audio is already played so we need to unload first before load the new one..
        if (_status.durationMillis == _status.positionMillis) {
          // i think you have to
          try {
            await soundObj.unloadAsync();
            currentIndex = currentIndex + 1; //change to the next index
          } catch (error) {
            console.log(error);
          }
        }
        // play audio here..
        try {
          await soundObj.playAsync();
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Camera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={{ flex: 3 }}
          type={Camera.Constants.Type.back}
          autoFocus={Camera.Constants.AutoFocus.on}
        />
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Modal
            description={"WAIT กรุณารอสักครู่"}
            buttonTitle={"Exit"}
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            visible={this.state.modalVisible}
          />
          <TouchableOpacity
            onPress={() => {
              this.takePicture();
              this.setModalVisible(true);
              console.log("clicked button succed");
            }}
            style={{ alignItems: "center" }}
          >
            <Ionicons name="ios-radio-button-on" size={64} color="black" />
            <Text style={{ color: "#ffffff", fontSize: 6 }}> take a photo</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
