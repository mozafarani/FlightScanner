import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import backgroundImage from "../assets/kebda.jpeg"; // Ensure this path is correct

const { height } = Dimensions.get("window");

export default function LanguageSelectionScreen({ navigation }) {
  const handleLanguageSelection = (language) => {
    navigation.navigate("Login", { language });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        imageStyle={styles.imageStyle}
      />
      <View style={styles.curvedContainer}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Select Language</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLanguageSelection("EN")}
          >
            <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleLanguageSelection("AR")}
          >
            <Text style={styles.buttonText}>العربية</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  image: {
    width: "100%",
    height: height * 0.65, // Cover more than half of the screen
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {},
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  curvedContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 30,
  },
  form: {
    width: "90%",
    alignItems: "center",
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e65d24", // Use the matching color here
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
